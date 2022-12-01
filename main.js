const deepai = require('deepai');

deepai.setApiKey('API_KEY');


async function aiGenerator() {
    const response = await deepai.callStandardApi("stable-diffusion",  {
        text: document.getElementById('imageGenerator');
    })
}

