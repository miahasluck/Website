const frameImage = document.querySelector(".frame-image");

if (frameImage) {
  let isDragging = false;
  let startPointerX = 0;
  let startPointerY = 0;
  let startLeft = 0;
  let startTop = 0;

  frameImage.draggable = false;

  frameImage.addEventListener("pointerdown", (event) => {
    isDragging = true;
    startPointerX = event.clientX;
    startPointerY = event.clientY;
    startLeft = frameImage.offsetLeft;
    startTop = frameImage.offsetTop;

    frameImage.classList.add("is-dragging");
    frameImage.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  frameImage.addEventListener("pointermove", (event) => {
    if (!isDragging) {
      return;
    }

    const nextLeft = startLeft + event.clientX - startPointerX;
    const nextTop = startTop + event.clientY - startPointerY;

    frameImage.style.left = `${nextLeft}px`;
    frameImage.style.top = `${nextTop}px`;
  });

  frameImage.addEventListener("pointerup", (event) => {
    isDragging = false;
    frameImage.classList.remove("is-dragging");
    frameImage.releasePointerCapture(event.pointerId);
  });

  frameImage.addEventListener("pointercancel", () => {
    isDragging = false;
    frameImage.classList.remove("is-dragging");
  });
}
