import * as THREE from 'three';

class BackgroundEffect {
  constructor(options = {}) {
    this.container = options.container || document.body;
    this.scene = null;
    this.camera = null;
    this.renderer = null;

    this.torus = null;
    this.pentaFilled = null;
    this.pentaEdges = null;

    this.cubeCamera = null; // 👈 NEW: For environment capture
    this.clock = new THREE.Clock(); // For continuous animation

    this.init();
    this.addObjects();
    this.initEvents();
    this.animate();
  }

  // --- Core Setup ---

  init() {
    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Fixed positioning and pointer-events: none for background rendering
    this.renderer.domElement.style.position = "fixed";
    this.renderer.domElement.style.top = "0";
    this.renderer.domElement.style.left = "0";
    this.renderer.domElement.style.pointerEvents = "none";
    this.renderer.domElement.style.zIndex = "3";
    this.container.appendChild(this.renderer.domElement);

    // 💡 Cube Camera Setup (Captures the environment around the shapes)
    // The resolution of the cubemap texture (higher is better, but slower)
    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
        format: THREE.RGBFormat,
        generateMipmaps: true,
        minFilter: THREE.LinearMipmapLinearFilter,
    });
    this.cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget);
    this.scene.add(this.cubeCamera);
    
    // Add a soft ambient light
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    // Add a directional light for better shading
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 7.5);
    this.scene.add(directionalLight);
  }

  // --- Object Creation ---

  // --- Object Creation ---
addObjects() {
    // 💡 Refractive Glass Material (Standard MeshPhysicalMaterial)
    const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffffff, // White color for maximum light reflection/transmission
        metalness: 0,
        roughness: 0.05, // Keep low for clear surfaces
        transmission: 1.0, // Full transmission for glass
        
        // --- CHANGES FOR MORE TRANSPARENCY ---
        thickness: 0.05, // 👈 MODIFIED: Significantly reduced thickness (was 0.2)
        envMapIntensity: 3.0, // 👈 MODIFIED: Increased intensity (was 2.0) to make the refracted environment brighter
        ior: 1.45, // 👈 MODIFIED: Slightly reduced IOR (was 1.52) for less severe light bending/distortion
        // ------------------------------------
        
        transparent: true,
        opacity: 1.0, 
        
        envMap: null, 
        side: THREE.DoubleSide
    });
    
    // Wireframe edges material (unchanged)
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xffa500, linewidth: 2 });
    
    // --- 1. Torus (Refractive Glass) ---
    const torusGeometry = new THREE.TorusGeometry(1, 0.4, 24, 128);
    this.torus = new THREE.Mesh(torusGeometry, glassMaterial.clone()); 
    this.torus.position.x = 10;
    this.torus.visible = false;
    this.scene.add(this.torus);

    // --- 2. Pentahedron (Refractive Glass) ---
    const pentaGeometry = new THREE.ConeGeometry(0.8, 1.2, 4, 1, false); 
    this.pentaFilled = new THREE.Mesh(pentaGeometry, glassMaterial.clone());
    this.pentaFilled.position.x = -10;
    this.pentaFilled.visible = false;
    this.scene.add(this.pentaFilled);

    // --- 3. Pentahedron Edges (Wireframe - Unchanged) ---
    const edgesGeometry = new THREE.EdgesGeometry(pentaGeometry);
    this.pentaEdges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    this.pentaEdges.position.x = -10;
    this.pentaEdges.visible = false;
    //this.scene.add(this.pentaEdges);
    
    // Set the envMap property on the materials now that we have the cubeCamera ready
    this.torus.material.envMap = this.cubeCamera.renderTarget.texture;
    this.pentaFilled.material.envMap = this.cubeCamera.renderTarget.texture;
}

  // --- Event Handlers (Unchanged) ---

  easeOutQuad(t) {
    return t * (2 - t);
  }

  onScroll = () => {
    const scrollY = window.scrollY;
    const trigger = 1200;
    const distance = 400;
    const shrinkStart = 1900;
    const shrinkDistance = 300;

    // --- Appear / Slide-In Logic ---
    if (scrollY > trigger) {
      const t = Math.min((scrollY - trigger) / distance, 1);
      const easedT = this.easeOutQuad(t);

      this.torus.visible = true;
      this.torus.position.x = 10 * (1 - easedT);

      this.pentaFilled.visible = true;
      this.pentaEdges.visible = true;
      this.pentaFilled.position.x = -10 * (1 - easedT);
      this.pentaEdges.position.x = -10 * (1 - easedT);
    } else {
        // Reset visibility before trigger point
        this.torus.visible = false;
        this.pentaFilled.visible = false;
        this.pentaEdges.visible = false;
    }

    // --- Shrink / Disappear Logic ---
    if (scrollY > shrinkStart) {
      const shrinkT = Math.min((scrollY - shrinkStart) / shrinkDistance, 1);
      const scale = 1 - shrinkT; // goes from 1 → 0
      
      this.torus.scale.set(scale, scale, scale);
      this.pentaFilled.scale.set(scale, scale, scale);
      this.pentaEdges.scale.set(scale, scale, scale);
      
      this.torus.visible = this.pentaFilled.visible = this.pentaEdges.visible = scale > 0.05;
    } else {
      this.torus.scale.set(1, 1, 1);
      this.pentaFilled.scale.set(1, 1, 1);
      this.pentaEdges.scale.set(1, 1, 1);
    }

    // --- Continuous Rotation Logic ---
    const time = this.clock.getElapsedTime(); // Use continuous time for smoother rotation
    
    // We still apply scroll rotation, but combine it with continuous time-based rotation
    this.torus.rotation.x = scrollY * 0.005 + time * 0.1;
    this.torus.rotation.y = scrollY * 0.005 + time * 0.05;
    this.pentaFilled.rotation.x = scrollY * 0.004 + time * 0.08;
    this.pentaFilled.rotation.y = scrollY * 0.004 + time * 0.04;
    this.pentaEdges.rotation.x = this.pentaFilled.rotation.x;
    this.pentaEdges.rotation.y = this.pentaFilled.rotation.y;
  }

  onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  initEvents() {
    window.addEventListener("resize", this.onResize);
    window.addEventListener("scroll", this.onScroll);
    // Initialize the scroll state once
    this.onScroll();
  }

  // --- Animation Loop ---

  animate = () => {
    requestAnimationFrame(this.animate);
    
    // 💡 Refraction Step 1: Hide the reflective objects temporarily
    this.torus.visible = false;
    this.pentaFilled.visible = false;

    // 💡 Refraction Step 2: Render the scene (background elements) from the cube camera's perspective
    this.cubeCamera.update(this.renderer, this.scene);

    // 💡 Refraction Step 3: Show the reflective objects again
    this.torus.visible = true;
    this.pentaFilled.visible = true;

    // Standard Render (Renders the entire scene, including the glass objects with their environment map)
    this.renderer.render(this.scene, this.camera);
  }
  
  // 💡 Optional: Add a dispose method for clean cleanup if the component is removed later
  dispose() {
      if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
      window.removeEventListener("resize", this.onResize);
      window.removeEventListener("scroll", this.onScroll);
      if (this.renderer.domElement.parentNode) {
          this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
      this.renderer.dispose();
      this.torus.geometry.dispose();
      this.pentaFilled.geometry.dispose();
      this.pentaEdges.geometry.dispose();
      this.torus.material.dispose();
      this.pentaFilled.material.dispose();
      this.pentaEdges.material.dispose();
      this.cubeCamera.renderTarget.dispose();
  }
}

// Export the class for use in other files
export default BackgroundEffect;

// ripples




