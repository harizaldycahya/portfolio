// components/CursorEffects.js
import { useEffect } from 'react';

export default function CursorEffects() {
  useEffect(() => {
    const floatingH = document.getElementById('floatingH');
    const cursorCircle = document.getElementById('cursorCircle');
    const hidingSections = document.querySelectorAll('.hidden-section');

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (mouseX - centerX) / centerX;
      const offsetY = (mouseY - centerY) / centerY;

      const rotateY = offsetX * 30;
      const rotateX = -offsetY * 30;

      if (floatingH) {
        floatingH.style.left = `${mouseX}px`;
        floatingH.style.top = `${mouseY}px`;
        floatingH.style.transform = `
          translate(-50%, -50%)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
      }

      if (cursorCircle) {
        cursorCircle.style.left = `${mouseX}px`;
        cursorCircle.style.top = `${mouseY}px`;
      }

      let isOverHiddenSection = false;
      hidingSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = rect.bottom + window.scrollY;
        const left = rect.left + window.scrollX;
        const right = rect.right + window.scrollX;

        if (
          mouseX + window.scrollX >= left &&
          mouseX + window.scrollX <= right &&
          mouseY + window.scrollY >= top &&
          mouseY + window.scrollY <= bottom
        ) {
          isOverHiddenSection = true;
        }
      });

      if (floatingH) {
        floatingH.classList.toggle("hidden-h", isOverHiddenSection);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}