deepai.setApiKey('');

let randomizedImage = document.getElementById('randomized-image');
const generateButton = document.getElementById('generate-button');
const inputText = document.getElementById('search-box');
const textGenerator = document.getElementById('text-generator');
const fantasyGenerator = document.getElementById('fantasy-world');
const creatureGenerator = document.getElementById('cute-creature');
const animeGenerator = document.getElementById('anime-portrait');
const oldStyleGenerator = document.getElementById('old-style');
const stableDiffusionGenerator = document.getElementById('stable-diffusion');

let generateOption = 'stable-diffusion';

document.addEventListener('click', (event) => {
  if (event.target.value === textGenerator.value) {
    generateOption = textGenerator.value;
  } else if (event.target.value === fantasyGenerator.value) {
    generateOption = fantasyGenerator.value;
  } else if (event.target.value === creatureGenerator.value) {
    generateOption = creatureGenerator.value;
  } else if (event.target.value === animeGenerator.value) {
    generateOption = animeGenerator.value;
  } else if (event.target.value === oldStyleGenerator.value) {
    generateOption = oldStyleGenerator.value;
  } else if (event.target.value === stableDiffusionGenerator.value) {
    generateOption = stableDiffusionGenerator.value;
  }
});

generateButton.addEventListener('click', () => {
  let generateText = inputText.value;
  inputText.value = '';

  async function aiGenerator() {
    try {
      const response = await deepai.callStandardApi(generateOption, {
        text: generateText,
      });
      const data = await response;

      randomizedImage.src = data.output_url;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  aiGenerator();
});
