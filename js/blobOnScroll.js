function fadeInBlobs(duration = 1000) {
  const start = performance.now();

  const upperBlob = S(".upperBlob");
  const upperRightBlob = S(".upperRightBlob");
  const upperLeftBlob = S(".upperLeftBlob");

  // Optional stagger delays in seconds
  const delays = {
    upperBlob: 0,
    upperRightBlob: 0.1,
    upperLeftBlob: 0.2
  };

  function animate(time) {
    const elapsed = time - start;

    // Upper Blob
    let t1 = Math.min(Math.max((elapsed / duration) - delays.upperBlob, 0) / (1 - delays.upperBlob), 1);
    let ease1 = t1 * t1 * (3 - 2 * t1); // smoothstep easing
    upperBlob.style.display = "none";
    upperBlob.style.transform = `scale(${0.77 * 0.5 * ease1}) translate(0, ${28 * ease1}px)`;
    upperBlob.style.opacity = ease1;

    // Upper Right Blob
    let t2 = Math.min(Math.max((elapsed / duration) - delays.upperRightBlob, 0) / (1 - delays.upperRightBlob), 1);
    let ease2 = t2 * t2 * (3 - 2 * t2);
    upperRightBlob.style.transform = `scale(${ease2})`;
    upperRightBlob.style.opacity = ease2;

    // Upper Left Blob
    let t3 = Math.min(Math.max((elapsed / duration) - delays.upperLeftBlob, 0) / (1 - delays.upperLeftBlob), 1);
    let ease3 = t3 * t3 * (3 - 2 * t3);
    upperLeftBlob.style.transform = `scale(${ease3})`;
    upperLeftBlob.style.opacity = ease3;

    if (t1 < 1 || t2 < 1 || t3 < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// Trigger on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  fadeInBlobs();
});

document.addEventListener("scroll", () => {

  // --- Smoothly map scrollY to values between 0 → 1
  const progress = convertRange(
    window.scrollY,
    { min: 0, max: 815 },
    { min: 0, max: 1 }
  );

  // Clamp progress between 0–1 so fast scrolls don’t exceed limits
  const clamped = Math.max(0, Math.min(1, progress));

  // Derived values
  const converted = clamped * 4 + 1;

  // === Upper Blob ===
  if (converted < 4) {
    const scaleUpper = converted * 0.77;
    const translateUpper = converted * 28;
    S(".upperBlob").style.transform = `scale(${scaleUpper}) translate(0, ${translateUpper}px)`;
  }

  // === Side Blobs (left & right) ===
  // As user scrolls, they shrink from 1 → 0 across ~400px scroll range
  const scaleDecay = convertRange(
    window.scrollY,
    { min: 0, max: 400 },
    { min: 1, max: 0 }
  );

  // Clamp to ensure values stay between 0–1
  const scaleValue = Math.max(0, Math.min(1, scaleDecay));

  // Apply both scale and opacity for a smoother disappearance
  S(".upperRightBlob").style.transform = `scale(${scaleValue})`;
  S(".upperLeftBlob").style.transform = `scale(${scaleValue})`;
  S(".upperRightBlob").style.opacity = scaleValue;
  S(".upperLeftBlob").style.opacity = scaleValue;

});
