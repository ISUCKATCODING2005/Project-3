    const typingElement = document.querySelector('.typing');
    const texts = ["Web Developer", "Creative Designer", "Tech Enthusiast"];
    let index = 0, charIndex = 0;
    function type() {
      if (charIndex < texts[index].length) {
        typingElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 2000);
      }
    }
    function erase() {
      if (charIndex > 0) {
        typingElement.textContent = texts[index].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, 50);
      } else {
        index = (index+1)%texts.length;
        setTimeout(type, 500);
      }
    }
    document.addEventListener("DOMContentLoaded", type);

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      form.reset();
    });