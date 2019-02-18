const lzy = (offset = 200) => {

  const images = document.querySelectorAll("[data-src]");

  const onIntersection = entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        loadImage(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(onIntersection, {
    rootMargin: `${offset}px ${offset}px`,
    threshold: 0.01
  });

  const loadImage = imageEl => {
    const imageSource = imageEl.getAttribute("data-src");
    if (imageEl.tagName === "IMG") {
      imageEl.setAttribute("src", imageSource);
    } else {
      imageEl.style.backgroundImage = `url(${imageSource})`;
    }
    imageEl.removeAttribute("data-src");
};

  images.forEach(image => observer.observe(image));

};
