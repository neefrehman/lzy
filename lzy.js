const lzy = ({ offset } = {}) => {

  const images = document.querySelectorAll("[data-src]");
  const observer = new IntersectionObserver(onIntersection, {
    rootMargin: offset ? `${offset}px ${offset}px` : "200px 200px",
    threshold: 0.01
  });

  function loadImage(imageEl) {
    const imageSource = imageEl.getAttribute("data-src");
    if (imageEl.tagName === "IMG") {
      imageEl.setAttribute("src", imageSource);
    } else {
      imageEl.style.backgroundImage = `url(${imageSource})`;
    }
    imageEl.removeAttribute("data-src");
  }

  images.forEach(image => observer.observe(image));

  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        loadImage(entry.target);
      }
    });
  }

};
