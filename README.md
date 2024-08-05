# :rowboat: Duo Rowing 
Initial website template for Duo Rowing

## Project Overview
Duo Rowing is a single-page application (SPA) built using vanilla JavaScript, SCSS, and Vite. The project structure includes dynamic loading of different sections based on the URL path, modularised components, and a focus on responsive design.

<br>

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Workflow](#project-workflow)
- [Git Workflow](#git-workflow)

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

## Project Workflow

### Views
Let's discuss the `Views` files first. <br>

The `Views` files define the structure of the components and pages in the application. For example, `src/views/pages/home/index.js` creates the markup layout of the Home page by generating a section element with the class name `hero` and incorporating several components in the `Home()` function. <br>

At the top of the file, `hero` and `createDivider` are imported from their respective directories to be part of the Home layout. Moving forward, additional components for the Home page (also based on section tags) should be created and imported into the `src/views/pages/home/index.js` file. <br>

Component locations vary depending on their intended usage. If a component is to be reused across the web application, it should be created in `src/views/components/global/`. If it is meant to be used only once, it should be created within the Pages directory, `src/views/pages/xxxx/`. <br>

An imported component can be utilised in this format: `${component-name.output}`. You can also pass a class name, similar to how `createDivider` passes a class name of `left-aligned`.

### Controllers
The routing in this application is handled by a single file, `src/controllers/router.js`. This file is responsible for managing navigation between different views based on the URL path. It contains two main functions:

1. `router()`: This function determines which view to display based on the current URL path. It updates the document title and content accordingly, and initialises the navigation menu.

2. `navigateTo(url)`: This function is used for client-side navigation. It updates the browser's history and calls the `router()` function to update the view.

The router interacts with view files to dynamically load content and update the UI as needed. For example, when a user navigates to a new page, the router loads the appropriate view and updates the document title.

### Scripts
Scripts are used for specific functionalities such as handling UI interactions and DOM manipulations. They work alongside controllers to implement the desired behaviors and features. For example, `src/scripts/components/nav.js` contains the logic to initialise the navigation menu and handle the mobile menu interactions.

### Relationship with View Files
 Controllers and scripts interact with these view files to dynamically load content, handle user events, and update the UI as needed. For example, a controller might load a specific view based on the URL path, while a script might handle a button click event within that view to show or hide certain elements. For example, a controller might load a specific view based on the URL path, while a script might handle a button click event within that view to show or hide certain elements. The initialiseNav function ensures that the mobile menu is correctly initialised whenever the view is updated.

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
