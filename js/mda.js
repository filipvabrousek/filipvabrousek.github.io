class MotionText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          margin: 0 auto;
          opacity: 0;
          transition: opacity 0.5s ease-out;
        }
        svg {
         /* width: 100vw;*/
         width: 100vw;
          max-width: 1200px;
          height: auto;
          display: block;
          margin: 0 auto;
        }
        path {
          fill: none;
          stroke: var(--stroke-color, #2b85dfff);
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke-width 0.05s linear;
        }



        @media (max-device-width: 430px) {
        svg {
        width: auto;
        }
        }
        
      </style>
      <div id="container"></div>
    `;
  }

  async connectedCallback() {
    const color = this.getAttribute("color") || "#2b85dfff";
    const startY = parseFloat(this.getAttribute("start")) || 0;
    const endY = parseFloat(this.getAttribute("end")) || 1000;
    const strokeMin = parseFloat(this.getAttribute("stroke-min")) || 0.5;
    const strokeMax = parseFloat(this.getAttribute("stroke-max")) || 2;
    const appearAt = parseFloat(this.getAttribute("appear-at")) || 800; // <-- NEW: scrollY where it appears
    const src = this.getAttribute("src") || "js/motion.svg";

    this.shadowRoot.host.style.setProperty("--stroke-color", color);
    const container = this.shadowRoot.getElementById("container");
    //container.style.background = "orange";
    //container.style.overflowX = "hidden";

    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`Failed to fetch SVG: ${response.statusText}`);
      container.innerHTML = await response.text();

      const svg = container.querySelector("svg");
 
      const paths = svg?.querySelectorAll("path") || [];
      if (!svg || paths.length === 0) throw new Error("SVG paths missing.");

      // initialize paths
      paths.forEach(path => {
        const len = path.getTotalLength();
        path.style.strokeDasharray = len;
        path.style.strokeDashoffset = len;
      });

      const lerp = (a, b, t) => a + (b - a) * t;

      const onScroll = () => {
        const scrollY = window.scrollY;
        const progress = Math.min(Math.max((scrollY - startY) / (endY - startY), 0), 1);

        // show element only after appearAt threshold
        this.style.opacity = scrollY >= appearAt ? "1" : "0";

        // draw stroke animation
        paths.forEach(path => {
          const len = path.getTotalLength();
          path.style.strokeDashoffset = len * (1 - progress);
          path.style.strokeWidth = lerp(strokeMax, strokeMin, progress);
        });
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      onScroll();

    } catch (error) {
      console.error(`Error loading motion.svg: ${error.message}`);
      container.innerHTML = `<p style="color:red;text-align:center;">Error: Could not load SVG</p>`;
    }
  }
}

customElements.define("motion-text", MotionText);
