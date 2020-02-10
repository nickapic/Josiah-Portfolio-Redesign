function scrollAppear() {
  var textToAnimate = document.querySelector(
    ".about-me_text-content_paragraph"
  );
  var textPosition = textToAnimate.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (textPosition < screenPosition) {
    textToAnimate.classList.add("text-content-appear");
  }
}
window.addEventListener("scroll", scrollAppear);
