# Stable Diffusion.

This project consists of an API and a React application that allow users to generate images using the [Stable Diffusion](https://github.com/CompVis/stable-diffusion) deep learning model. The API generates the images and the React application makes a request to the API to display the generated image to the user.

## Prerequisites

### API

- Python 3.7+
- PyTorch 1.7+
- FastAPI
- transformers
- pillow
- fastapi-cors

### React UI

- Node.js
- npm

## Getting Started.

### API

1. Install the required dependencies using `pip install -r requirements.txt`.
2. Set the `auth_token` variable in `auth_token.py` to your [Hugging Face access token](https://huggingface.co/settings/tokens). This is required to download the model from the Hugging Face repository.
3. Run the server with `uvicorn main:app --reload`.

### React UI

1. Install the required dependencies using `npm install`.
2. Start the development server using `npm start`.
3. The application will be available at http://localhost:3000/.

## Usage

Enter a prompt in the input field and click the "Generate" button to generate an image. If the image generation fails, an error message will be displayed.

## Deployment

### API

The API can be deployed to a hosting service such as [Heroku](https://www.heroku.com/). Make sure to add a GPU instance to your Heroku app in order to have fast image generation.

### React UI

The application can be built for production using `npm run build`, which will create a production-ready build in the `build` folder. The build can then be deployed to a hosting service such as [Netlify](https://www.netlify.com/).

## Acknowledgements

This project uses the Stable Diffusion model trained by [Stability AI](https://stability.ai/) and [Runway ML](https://runwayml.com/). The model is available on [GitHub](https://github.com/CompVis/stable-diffusion).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
