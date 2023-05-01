# ESBuild In-Browser transpiling

## Description  

> This project demonstrates a simple and straightforward app for in-browser transpiling of TypeScript and React code using ESBuild-wasm.  
> Users can input React code into a textarea, and upon submission, the app transpiles the code into pure JavaScript and displays it.  
> The app centralizes Material-UI imports for a well-structured and maintainable codebase.  
> The ESBuild-wasm binary, compiled from Go code, is included in the public folder to enable browser-based execution.  

## Key Features

> - Centralized Material-UI imports and helper functions for easy maintenance in case of major changes  
> - ESBuild-wasm transpiling for in-browser TypeScript or React code conversion  
> - Simple interface with a textarea for inputting React code and displaying the transpiled JavaScript output  


## Dependencies

This project uses the following dependencies:  

### ESBuild-wsm  

> - This is the cross-platform WebAssembly binary for esbuild, a JavaScript bundler and minifier. 
> - Install: `npm install --save-exact esbuild-wasm@0.8.27`  

  
### Material-UI

> - [Material-UI](https://material-ui.com/)
> - Install: `npm install @mui/material @emotion/react @emotion/styled @mui/joy`

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser


## Credits

> - Special thanks to [Stephen Grider](https://www.udemy.com/user/sgslo/) for his excellent TypeScript tutorials  
> - ESBuild-wasm project: esbuild.github.io


