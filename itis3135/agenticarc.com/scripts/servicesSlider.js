const slides = ["slide1", "slide2", "slide3"];
const state = { current: 0 };
const showSlide = (index) => {
    slides.forEach((id, i) => {
        document.getElementById(id).style.display = i === index ? "block" : "none";
    });
};
const nextSlide = () => {
    state.current = (state.current + 1) % slides.length;
    showSlide(state.current);
};
const prevSlide = () => {
    state.current = (state.current - 1 + slides.length) % slides.length;
    showSlide(state.current);
};
setInterval(nextSlide, 5000);