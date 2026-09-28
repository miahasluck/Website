const carRoofLink = document.querySelector(".car-roof-link");

if (carRoofLink) {
  const carRoofCursor = document.createElement("img");

  carRoofCursor.className = "car-roof-cursor";
  carRoofCursor.src = "images/ID%20cursor.png";
  carRoofCursor.alt = "";
  carRoofCursor.draggable = false;
  document.body.appendChild(carRoofCursor);

  carRoofLink.addEventListener("mouseenter", () => {
    carRoofCursor.classList.add("is-active");
  });

  carRoofLink.addEventListener("mouseleave", () => {
    carRoofCursor.classList.remove("is-active");
  });

  carRoofLink.addEventListener("mousemove", (event) => {
    carRoofCursor.style.left = `${event.clientX}px`;
    carRoofCursor.style.top = `${event.clientY}px`;
  });
}

const contactLink = document.querySelector("#contact-link");
const contactOverlay = document.querySelector("#contact-overlay");
const contactBackdrop = document.querySelector(".contact-overlay-backdrop");
const contactOverlayImage = document.querySelector(".contact-overlay-image");

function openContactOverlay() {
  if (!contactOverlay) {
    return;
  }

  contactOverlay.hidden = false;
  requestAnimationFrame(() => {
    contactOverlay.classList.add("is-visible");
  });
}

function closeContactOverlay() {
  if (!contactOverlay || contactOverlay.hidden) {
    return;
  }

  contactOverlay.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!contactOverlay.classList.contains("is-visible")) {
      contactOverlay.hidden = true;
    }
  }, 450);
}

if (contactLink && contactOverlay) {
  contactLink.addEventListener("click", (event) => {
    event.preventDefault();
    openContactOverlay();
  });
}

if (contactBackdrop) {
  contactBackdrop.addEventListener("click", closeContactOverlay);
}

if (contactOverlayImage) {
  contactOverlayImage.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

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
