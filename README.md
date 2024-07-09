# :rowboat: Duo Rowing

## Project Overview
Duo Rowing is a single-page application (SPA) built using vanilla JavaScript, SCSS, and Vite. The project structure includes dynamic loading of different sections based on the URL path, modularised components, and a focus on responsive design.

<br>

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Controllers and Scripts](#controllers-and-scripts)
- [Git Workflow](#git-workflow)
- [License](#license)

<br>

## Installation
To get started with the Duo Rowing project, clone the repository and install the dependencies.

```bash
git clone https://github.com/terryeah/duo-rowing.git
cd duo-rowing
npm install
```
Note: This project was built with Node.js version 20. Ensure you have the correct Node.js version installed.

<br>

## Usage
To run the project locally, use the following command:

```bash
npm run dev
```

This will start the Vite development server, and you can view the project in your browser at http://localhost:5173.

<br>

## Components

### Divider
The divider component is used to create a visual separation between sections of the page. It consists of a divider-wrapper div containing a divider div, with customisable class names.

### Home Page
The home page dynamically includes the hero section and a divider with a class name `left-aligned` by default.

<br>

## Controllers and Script

### Controllers
Controllers are responsible for handling the routing and logic of the application. They manage how different views are loaded and how the application state changes in response to user interactions.

### Scripts
Scripts are used for specific functionalities such as handling UI interactions and DOM manipulations. They work alongside controllers to implement the desired behaviors and features.

### Relationship with View Files
The view files define the structure of the components and pages in the application. Controllers and scripts interact with these view files to dynamically load content, handle user events, and update the UI as needed. For example, a controller might load a specific view based on the URL path, while a script might handle a button click event within that view to show or hide certain elements.

<br>

## Git Workflow

### Trunk-Based Development
This project uses the trunk-based development method. All developers should work on the `main` branch. As this is a simple project, there is no need for multiple branches. All changes should be committed directly to the `main` branch.

### Using Git on the Main Branch
1. **Clone the Repository**
   ```bash
   git clone https://github.com/terryeah/duo-rowing.git
   cd duo-rowing
   ```
2. **Check Out the Main Branch**
   Ensure you are on the `main` branch before making any changes.
   ```bash
   git checkout main
   ```
3. **Pull Latest Changes**
	Always pull the latest changes from the `main` branch before starting any work to avoid conflicts.
   ```bash
   git pull origin main
   ```
4. **Make Changes**<br>
	Make your code changes as needed.<br>
5. **Add Changes**
	Stage the changes you have made.
   ```bash
	git add .
   ```
6. **Commit Changes**
	Commit your changes with a meaningful message.
   ```bash
	git commit -m "Your commit message"
   ```
7. **Push Changes**
	Push your changes to the remote repository.
   ```bash
	git push origin main
   ```

<br>

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

