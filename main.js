// deepai.setApiKey('');

let randomizedImage = document.getElementById('randomized-image');
const generateButton = document.getElementById('generate-button');
const inputText = document.getElementById('search-box');

generateButton.addEventListener('click', () => {
  let testInput = inputText.value;
  inputText.value = '';
  // async function aiGenerator() {
  //   const response = await deepai.callStandardApi('stable-diffusion', {
  //     text: testInput,
  //   });
  //   //   const data = await response.json();
  // //   return data;
  // }
  //aiGenerator();

  const data = {
    id: '08badc2f-43ca-46cd-acf5-ece84cdc22d0',
    output_url:
      'https://api.deepai.org/job-view-file/08badc2f-43ca-46cd-acf5-ece84cdc22d0/outputs/output.jpg',
  };

  randomizedImage.src = data.output_url;
});
