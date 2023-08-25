const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const el = entry.target// as HTMLElement;
            const transitionName = el.dataset.transitionName;
            (el).style.setProperty(
                "--transition-name",
                entry.isIntersecting ? `${transitionName}` : "none"
            );
        });
    }
);

const animatables = Array.from(document.querySelectorAll('.animatable'));
animatables.forEach((animatable) => {
    observer.observe(animatable);
});