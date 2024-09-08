function generateFact(event) {
  event.preventDefault();

  new Typewriter('#fact', {
    strings:
      ' Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.',
    autoStart: true,
    delay: 1,
    cursor: '',
  });
}

let factFormElement = document.querySelector('#form-element');
factFormElement.addEventListener('submit', generateFact);
