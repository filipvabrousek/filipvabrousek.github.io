import * as THREE from 'three';

const canvas = document.querySelector('#gla-next');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xecf0f1); // 225617 very cool!


let width = window.innerWidth;
let height = window.innerHeight;

if (window.innerWidth > 3000){
width = width / 4;
height = height / 4;
}

const sizes = { width: width, height: height };

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight1.position.set(5, 6, 5);
scene.add(directionalLight1);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.set(0, 0, 10);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, powerPreference: "low-power" });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

//renderer.setPixelRatio(window.devicePixelRatio);

// Blob properties
const blobRadius = 4.0;
const blobProperties = {
    u_time: { value: 0.0 },
    _mousePos: { value: new THREE.Vector3(0.0, 0.0, 4.0) },
    _wiggleDampening: { value: 0.0 },
    _wiggleFrequency: { value: 1.5 / 2 },
    _wiggleAmplitude: { value: 1.5 * 6.7 },
    _wiggleSpeed: { value: 30.0 },
    _mouseRotate: { value: 0.0 },
    _baseColor1: { value: new THREE.Color(0xf0fc03) },
    _baseColor2: { value: new THREE.Color(0x03fc4e) },
    _baseColor3: { value: new THREE.Color(0xfc0314) },
    _baseColor4: { value: new THREE.Color(0x0352fc) },
    _baseColor5: { value: new THREE.Color(0xff00ff) },
    _baseColor6: { value: new THREE.Color(0x01801a) },
    _colorsAngle: { value: new THREE.Vector3(0.0, 0.0, -50.0) },
    _colorSinusoidal: { value: 0.5 },
    _segmentColor1: { value: 0.1 },
    _segmentColor2: { value: 0.1 },
    _segmentColor3: { value: 0.1 },
    _segmentColor4: { value: 0.1 },
    _segmentColor5: { value: 0.1 },
    _segmentColor6: { value: 0.1 },
    _frequency: { value: 1.0 },
    _amplitude: { value: 0.4 },
    _metallic: { value: 0.9 },
    _smoothness: { value: 0.9 },
    _lightintensity: { value: 1.5 }
    // Removed _opacity uniform
};

blobProperties._frequency.value = 0.7;       // Lower from 1.0
blobProperties._amplitude.value = 0.4;       // Lower from 0.4
blobProperties._wiggleFrequency.value = 0.5; // Lower from 1.5
blobProperties._wiggleAmplitude.value = 0.3; // Lower from 1.5
blobProperties._wiggleSpeed.value = 5.0;     // Optional: slower wi

// Shader material
const blobMaterial = new THREE.ShaderMaterial({
    uniforms: blobProperties,
    // Set transparent to false to ignore alpha blending
    transparent: false, 
      vertexShader: ` 
        attribute vec3 tangent;
        uniform float u_time;         
        uniform vec3 _mousePos;
        uniform float _frequency; 
        uniform float _amplitude;  
        uniform float _wiggleDampening;
        uniform float _wiggleFrequency;
        uniform float _wiggleAmplitude;
        uniform float _wiggleSpeed;
        uniform float _mouseRotate;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 PositionVS;        
        varying vec3 PositionWS;
        varying vec3 PositionOS;

        vec3 mod289(vec3 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
        vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
        vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
        vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}

        float pnoise(vec3 P, vec3 rep){
            vec3 Pi0 = mod(floor(P), rep); 
            vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
            Pi0 = mod289(Pi0);
            Pi1 = mod289(Pi1);
            vec3 Pf0 = fract(P); 
            vec3 Pf1 = Pf0 - vec3(1.0);
            vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
            vec4 iy = vec4(Pi0.yy, Pi1.yy);
            vec4 iz0 = Pi0.zzzz;
            vec4 iz1 = Pi1.zzzz;
            vec4 ixy = permute(permute(ix) + iy);
            vec4 ixy0 = permute(ixy + iz0);
            vec4 ixy1 = permute(ixy + iz1);
            vec4 gx0 = ixy0 * (1.0 / 7.0);
            vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
            gx0 = fract(gx0);
            vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
            vec4 sz0 = step(gz0, vec4(0.0));
            gx0 -= sz0 * (step(0.0, gx0) - 0.5);
            gy0 -= sz0 * (step(0.0, gy0) - 0.5);
            vec4 gx1 = ixy1 * (1.0 / 7.0);
            vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
            gx1 = fract(gx1);
            vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
            vec4 sz1 = step(gz1, vec4(0.0));
            gx1 -= sz1 * (step(0.0, gx1) - 0.5);
            gy1 -= sz1 * (step(0.0, gy1) - 0.5);
            vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
            vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
            vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
            vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
            vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
            vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
            vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
            vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
            vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
            g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;
            vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
            g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;
            float n000 = dot(g000, Pf0);
            float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
            float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
            float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
            float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
            float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
            float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
            float n111 = dot(g111, Pf1);
            vec3 fade_xyz = fade(Pf0);
            vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
            vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
            float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
            return 2.2 * n_xyz;
        }

        mat4 createRotationMatrix(vec3 angles){
            float cosX = cos(angles.x), sinX = sin(angles.x);
            float cosY = cos(angles.y), sinY = sin(angles.y);
            float cosZ = cos(angles.z), sinZ = sin(angles.z);
            mat4 rotationX = mat4(
                1.0,0.0,0.0,0.0,
                0.0,cosX,-sinX,0.0,
                0.0,sinX,cosX,0.0,
                0.0,0.0,0.0,1.0
            );
            mat4 rotationY = mat4(
                cosY,0.0,sinY,0.0,
                0.0,1.0,0.0,0.0,
                -sinY,0.0,cosY,0.0,
                0.0,0.0,0.0,1.0
            );
            mat4 rotationZ = mat4(
                cosZ,-sinZ,0.0,0.0,
                sinZ,cosZ,0.0,0.0,
                0.0,0.0,1.0,0.0,
                0.0,0.0,0.0,1.0
            );
            return rotationZ * rotationY * rotationX;
        }

        void main(){
            vUv = uv;
            float time = u_time * 0.5;
            vec3 rep = vec3(10.0);
            float frequency = _frequency;
            float amplitude = _amplitude;
            PositionOS = position;
            vec3 mousepos = (inverse(modelMatrix) * vec4(_mousePos, 1.0)).xyz;
            float mdistance = length(mousepos - position);

            vec3 wiggleOffset = normal * sin(-time * _wiggleSpeed + mdistance * _wiggleFrequency)
                                 * clamp(1.0/mdistance,0.0,1.0)
                                 * _wiggleDampening * _wiggleAmplitude;

            vec3 rotateOffset = -(createRotationMatrix(vec3(0.0,_mouseRotate,0.0)) * vec4(position,1.0)).xyz + position;

            float displacement = pnoise((position + wiggleOffset + rotateOffset) * frequency + time, rep) * amplitude;            
            vec3 newPosition = position + normal * displacement;

            vec3 posPlusTangent = position + tangent * 0.01;
            displacement = pnoise((posPlusTangent + wiggleOffset + rotateOffset) * frequency + time, rep) * amplitude;
            posPlusTangent += normal * displacement;

            vec3 bitangent = cross(normal, tangent);
            vec3 posPlusBitangent = position + bitangent * 0.01;
            displacement = pnoise((posPlusBitangent + wiggleOffset + rotateOffset) * frequency + time, rep) * amplitude;
            posPlusBitangent += normal * displacement;

            vec3 modifiedTangent = posPlusTangent - newPosition;
            vec3 modifiedBitangent = posPlusBitangent - newPosition;
            vec3 modifiedNormal = cross(modifiedTangent, modifiedBitangent);
            vNormal = normalize(normalMatrix * normalize(modifiedNormal));

            PositionWS = vec3(modelMatrix * vec4(newPosition, 1.0));
            PositionVS = vec3(modelViewMatrix * vec4(newPosition, 1.0));
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
    `,
  fragmentShader: `
uniform float _metallic;
uniform float _smoothness;
uniform float _lightintensity;
// Removed _opacity uniform

varying vec3 vNormal;
varying vec3 PositionOS;
varying vec3 PositionVS;
void main() {
    vec3 vnormal = normalize(vNormal);

    // The albedo is the base color of the object. Setting it to vec3(1.0) makes it white.
    vec3 albedo = vec3(1.0); 

    vec3 mate = vec3(0.18) * albedo;

    vec3 lightdir = normalize(vec3(0.8, 0.4, 0.7)); // Direction of the main light
    float sunDiffuse = clamp(dot(vnormal, lightdir), 0.0, 1.0);
    float skyDiffuse = clamp(0.5 + 0.5 * dot(vnormal, vec3(0.0, 1.0, 0.0)), 0.0, 1.0); // Light from above
    float bounceDiffuse = clamp(0.5 + 0.5 * dot(vnormal, vec3(0.0, -1.0, 0.0)), 0.0, 1.0); // Light from below

    // ************ CHANGES FOR WHITE LIGHTING ************
    // Main sunlight: changed color from warm (7.0, 4.5, 3.0) to white (3.0, 3.0, 3.0)
    vec3 diffuseCol = mate * vec3(3.0, 3.0, 3.0) * sunDiffuse * _lightintensity;
    // Sky light: made more neutral/white from (0.5, 0.8, 0.9) to (0.8, 0.9, 1.0) for a subtle cool tone
    diffuseCol += mate * vec3(0.8, 0.9, 1.0) * skyDiffuse;
    // Bounce light: made more neutral/white from (0.7, 0.3, 0.2) to (0.6, 0.6, 0.6)
    diffuseCol += mate * vec3(0.6, 0.6, 0.6) * bounceDiffuse * (1.0 - _metallic);
    // ****************************************************

    vec3 viewDir = normalize(-PositionVS);
    vec3 reflectDir = reflect(-lightdir, vnormal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), _smoothness * 128.0);
    vec3 specular = vec3(1.0) * spec * 1.5 * _metallic;

    vec3 finalcol = pow(diffuseCol + specular, vec3(0.4545));
    
    gl_FragColor = vec4(finalcol, 1.0);
}
`
});

// Blob geometry
const blobGeometry = new THREE.SphereGeometry(blobRadius, /*300, 300*/ 80, 80);
blobGeometry.computeTangents();
const blob = new THREE.Mesh(blobGeometry, blobMaterial);
scene.add(blob);

// Resize handler
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
});

// Mouse interaction
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
// Removed mouseIntersect since it wasn't used

document.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Drag rotation
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
canvas.addEventListener('mousedown', () => isDragging = true);
canvas.addEventListener('mouseup', () => isDragging = false);

canvas.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const deltaMove = { x: event.clientX - previousMousePosition.x };
        blobProperties._mouseRotate.value += deltaMove.x * 0.005;
    }
    previousMousePosition = { x: event.clientX, y: event.clientY };
});

// Animate
let startTime = performance.now() / 1000;

// Animate
function animate() {
    requestAnimationFrame(animate);

    const currentTime = performance.now() / 1000;
    const elapsedTime = currentTime - startTime;
    blobProperties.u_time.value = elapsedTime;

    // Raycast from mouse to blob
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(blob);

    if (intersects.length > 0) {
        // Mouse is over blob
        const intersectPoint = intersects[0].point;
        blobProperties._mousePos.value.lerp(intersectPoint, 0.15); // Smooth follow
        blobProperties._wiggleDampening.value = THREE.MathUtils.lerp(blobProperties._wiggleDampening.value, 0.5, 0.1);
    } else {
        // Mouse is not over blob, reset
        blobProperties._mousePos.value.lerp(new THREE.Vector3(0, 0, blobRadius), 0.05);
        blobProperties._wiggleDampening.value = THREE.MathUtils.lerp(blobProperties._wiggleDampening.value, 0.0, 0.05);
    }

    renderer.render(scene, camera);
}


animate();