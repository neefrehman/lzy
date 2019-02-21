const lzy = (offset = 200) => {

    const observer = new IntersectionObserver(onIntersection, {
        rootMargin: `${offset}px ${offset}px`,
        threshold: 0.01
    });

    const images = document.querySelectorAll("[data-src]");

    const loadImage = imageEl => {
        const imageSource = imageEl.getAttribute("data-src");
        if (imageEl.tagName === "IMG") {
            imageEl.setAttribute("src", imageSource);
        } else {
            imageEl.style.backgroundImage = `url(${imageSource})`;
        }
        imageEl.removeAttribute("data-src");
    };

    function onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                observer.unobserve(entry.target);
                loadImage(entry.target);
            }
        });
    }

    images.forEach(image => observer.observe(image));

};
