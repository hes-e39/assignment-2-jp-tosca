[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/YPPMpBcq)
# Assignment 2

This is the 2nd assignment (A2) for E-39 Design Principles in React. Using our timers from Assignment 1 (A1), we will build a workout app that allows our users to assemble **multiple timers** into a full workout.

## Project setup

**You may have noticed that the `src` directory is empty. This is because A2 will build on your code from A1. Before you begin, please copy ONLY the `src` folder from your A1 repo into this one and run `npm install` to get your dependencies installed.**

NOTE: If you installed any additional dependencies outside of the default set provided by us, then you will have to also install them here with.

## Timer functionality

The full workout consists of a queue of individual timers, that will be executed in the order that they were added. Let's take a look at an example:

![image](https://github.com/user-attachments/assets/94695108-5b78-4bef-8978-401098694abc)

## Structural Changes to Context

We will start by moving timer state into a global context that will be shared by the app. In A1 we had to store the state of only one timer that we were configuring, now we will have to store all of the timers that the user has configured and the order that the timers will be executed when the user runs the workout. The order that the timers are created is the order in which they are executed.

The choice of data structure should be a queue, which follows First-In-First-Out, and supports the normal enqueue (add item to the queue) and dequeue (removes item from the queue). How you implement the queue is up to you, but things to consider are that:

1. Each timer can be in one of three states: running, completed, and not running. You will need a way to keep track of what state the timer is in, so that you can display it accordingly (see the image above) 
2. During configuration, the user can remove any timer from the queue, so you will be supporting deleting
3. While the timer is running, you will need to either store or dynamically calculate which timer is active. 
4. You don't want to clear the configurations as the timers are running. The user should be able to restart the entire workout at anytime

## Changes to Routing

Currently we have two routes `/` and `/docs`. We are going to be modifying our `/` screen and add a new one called `/add` using `react-router`.

### Home - Path should be `/`

- List of timers to be run for a workout. User should be able to remove a timer
- The total time the workout will take
- A button to "Add" a new timer. This button brings the user to the `/add` screen
- Controls to Pause/Resume the workout
- Controls to reset the workout back to its initial state
- Controls to "fast-forward" - ends the current running timer and moves onto the next one

### Add Timer - Path should be `/add`

- When user clicks "Add" from **Home** screen, they are routed to this page, where they can choose the type of timer and configure all inputs for each timer. After configuring, the user confirms and the timer is added to the list.
- The `/add` page should allow the user to configure any of the four timers (stopwatch, countdown, XY, and tabata)
- The user should be able to go back to the home page from here

## Deliverable
- A user can configure (combination of any timers in any order) and execute a workout 
- All four timers must be functional: stopwatch, countdown, tabata, and XY.
- Routing must be configured to support the home route (`/`) and add route (`/add`)

## Grading Rubric
- A workout can be configured with any combination of timers. Individual timers can be configured by the user.
- Final workout application should be bug free
- DRY (do not repeat yourself). Try to make sure common code is shared and not copy/pasted
- Console is free of warnings/errors
- Deploy your application

## Dev Setup

**Prerequisite: you have `node` installed on the command line and can run `node --version`**

1. Open a terminal and navigate to the root of this repository
2. Run: `npm install`
3. Install [VSCode](https://code.visualstudio.com/?wt.mc_id=vscom_downloads)
4. Open VSCode. Install the recommended extensions that pop up in the bottom right. If you don't see this, then you can manually install the following two extensions: [BiomeJS](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) and [TailwindCSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).
5. You might need to restart VSCode in order for extensions to take in effect. Restart by running `CMD+Shift+P` and search for "Reload Window", hit `Enter`.
6. Verify that BiomeJS is working by adding some extra indents/spaces in `src/main.tsx`. It should format the file on save.
7. Start the dev server with `npm run dev` and navigate to http://localhost:5173/

## Deploy to GH-Pages

**It is important that you follow these steps in the correct order:**

1. Open `package.json` and update the `"homepage"` key with your repo information. It should change from:

`"homepage": "https://hes-e39.github.io/react-ts-template/"`

to

`"homepage": "https://hes-e39.github.io/<your repo>/"`

If you created this repo in github classrooms, the repo name should have your username at the end of it. Make sure to copy the whole thing. Also make sure the trailing `/` follows after your repo name.

2. Push changes to GH
3. Wait until actions finish, this will create a new branch `gh-pages` and run the deployment
4. In your GH repo: Settings -> Pages -> Build and deployment -> Branch -> gh-pages

You might have to hard refresh the browser page when pushing multiple updates to GH in order to reflect the most recent changes.
