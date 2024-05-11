# React + TypeScript + Vite federation (Microfrontend)
This project is a demonstration of a micro frontend architecture, allowing users to understand how multiple frontend applications can be integrated into a single coherent application.

# Overview
Microfrontend architecture involves breaking down a web application into smaller, more manageable pieces, each developed and deployed independently. These individual pieces, or microfrontends, can then be composed together to form a cohesive user experience.

# Current Status
This project is actively being developed to complete all planned features. While some parts are already implemented, work is ongoing to finalize the remaining components.

# Technologies Used
Core Project (Host): Vite + React + Vite module federation + Typescript + Tailwind CSS
Auth Project (Remote): Vite + Typescript + Vite module federation + Tailwind 
Product Project (Remote): Vite + React + Vite module federation + Typescript + Tailwind CSS

# Installation
1. Clone this repository to your local machine.
2. Navigate to the directory where you cloned the repository.
3. Install dependencies by running:
```js
npm install
```
4. Run npm run build and npm run serve. This will build and serve both host and remote on ports 5000, 5001 respectively.

HOST: localhost:5000 

REMOTE: localhost:5001 (Product Cards)

# Contributing
This project is developed for personal learning purposes and is currently not open to external contributions.

# License
This project is free and open-source, released under the MIT License.

# Support
If you encounter any issues or have questions about this project, feel free to reach out to the project owner.
