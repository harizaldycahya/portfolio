import { useEffect } from "react";

export default function FloatingH() {
  useEffect(() => {
    const floatingH = document.getElementById("floatingH");
    const cursorCircle = document.getElementById("cursorCircle");
    const hidingSections = document.querySelectorAll(".hide-floating-h");

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    function handleMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Instantly move the cursor circle
      if (cursorCircle) {
        cursorCircle.style.left = `${mouseX}px`;
        cursorCircle.style.top = `${mouseY}px`;
      }
    }

    function animateFloatingH() {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (mouseX - centerX) / centerX;
      const offsetY = (mouseY - centerY) / centerY;

      const rotateY = offsetX * 30;
      const rotateX = -offsetY * 30;

      if (floatingH) {
        floatingH.style.left = `${currentX}px`;
        floatingH.style.top = `${currentY}px`;
        floatingH.style.transform = `
          translate(-50%, -50%)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
      }

      requestAnimationFrame(animateFloatingH);
    }

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animateFloatingH);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="wrapper">
      <div id="floatingH">H</div>
      <div id="cursorCircle"></div>
      <div id="cursorDark">view</div>
    </div>
  );
}