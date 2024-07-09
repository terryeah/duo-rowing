# :rowboat: Duo Rowing

## Project Overview
Duo Rowing is a single-page application (SPA) built using vanilla JavaScript, SCSS, and Vite. The project structure includes dynamic loading of different sections based on the URL path, modularised components, and a focus on responsive design.

<br><br>

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Controllers and Scripts](#controllers-and-scripts)
- [License](#license)

<br><br>

## Installation
To get started with the Duo Rowing project, clone the repository and install the dependencies.

```bash
git clone https://github.com/terryeah/duo-rowing.git
cd duo-rowing
npm install
```

<br><br>

## Usage
To run the project locally, use the following command:

```bash
npm run dev
```

This will start the Vite development server, and you can view the project in your browser at http://localhost:5173.

<br><br>

## Project Structure
The project is organised into the following main directories and files:

duo-rowing/
├── dist/
├── node_modules/
├── public/
│   ├── fonts/
│   ├── images/
│   └── index.html
├── src/
│   ├── controllers/
│   ├── scripts/
│   ├── styles/
│   │   ├── configurations/
│   │   ├── components/
│   │   └── sections/
│   ├── views/
│   │   ├── components/
│   │   └── pages/
│   ├── duo-rowing-ogLO4MuO.js
│   ├── duo-rowing-Bo0Q5ygK.css
│   └── index-DYurBFqH.js
├── .gitignore
├── LICENSE
├── package.json
└── vite.config.mjs

<br><br>

## Components

### Divider
The divider component is used to create a visual separation between sections of the page. It consists of a divider-wrapper div containing a divider div, with customisable class names.

### Home Page
The home page dynamically includes the hero section and a divider with a class name `left-aligned` by default.

<br><br>

## Controllers and Script

### Controllers
Controllers are responsible for handling the routing and logic of the application. They manage how different views are loaded and how the application state changes in response to user interactions.

### Scripts
Scripts are used for specific functionalities such as handling UI interactions and DOM manipulations. They work alongside controllers to implement the desired behaviors and features.

### Relationship with View Files
The view files define the structure of the components and pages in the application. Controllers and scripts interact with these view files to dynamically load content, handle user events, and update the UI as needed. For example, a controller might load a specific view based on the URL path, while a script might handle a button click event within that view to show or hide certain elements.

<br><br>

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

