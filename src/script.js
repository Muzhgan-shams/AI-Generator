function displayFact(response) {
  new Typewriter('#fact', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: '',
  });
}

function generateFact(event) {
  event.preventDefault();

  let userInput = document.querySelector('#input-element');
  let apiKey = 'o1214355d46e610e0665f9f2cae5tadb';
  let context =
    'You are an expert at providing fun facts about any given topic. When a user provides a topic, generate a single fun and interesting fact related to that topic. Ensure the fact is easy to understand, engaging, and possibly surprising or unique. Your job is to make learning about various subjects entertaining and informative. For example: If the user inputs "space," you might respond with: "Did you know that space is completely silent because there’s no atmosphere to carry sound?" If the user inputs "penguins," you might respond with: "Did you know penguins can jump up to 9 feet in the air when they emerge from the water?" Your task is to generate similar fun facts for any topic the user provides, and make sure to make the fact interesting by using emojies.';
  let prompt = `Provide a fun, interesting, and lesser-known fact about${userInput.value}. Ensure the fact is engaging, easy to understand, and informative. `;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let factElement = document.querySelector('#fact');
  factElement.classList.remove('hidden');
  factElement.innerHTML = `<div class="generating">⏳ Generating...</div>`;

  axios.get(apiURL).then(displayFact);
}

let factFormElement = document.querySelector('#form-element');
factFormElement.addEventListener('submit', generateFact);
