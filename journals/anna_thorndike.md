# PicklePlay - Anna's Development Journal

## Team Members:

- Amanda Taing
- Anna Thorndike
- Christopher Bush
- Derek Snediker
- John Gordon

---

## Week 1

### Goals

- Formulate plan (solidify user story and features)
- Outline general structure of project (wireframes in Excalidraw/Figma, notes in Notion)
- Introduction to new tools/tech (BeeKeeper, PostgresSQL)

### Accomplishments

- Plan conceived and outlined
- Got approval from instructors and SEIRs on wireframes and database schema
- No one cried -- everyone had a good time!

### Challenges

- Nothing significant in particular
- Having to troubleshoot docker and practice rebuilding containers.

### Plan for next week

- Get started!
- Work on migration tables and FastAPI endpoints

---

## Week 2

### Goals

- Figure out how to use new tech in this project (SQL, FastAPI, etc.)
- Finalize database decision and setup database (mongo or SQL)
- At least 1 table created with migrations completed OR mongo collection created
- 1 backend endpoint completed (authentication endpoints are a group grade, not individual grade) and in a satisfactory merge request
- Journal updated for the week (should be updated once a week) and in a satisfactory merge request (aka now)

### Accomplishments

- Set up SQL tables, successful
- Initial migration successful
- First backend endpoint successful

### Challenges

- Making sure the linter is happy!

### Plan for next week

- Starting front-end
- Drafting pages and file structure, css, tailwindcss.

## Week 3

### Goals

- Review teammate endpoints and merge them into main.
- Start front-end with CRA and start on a component.
- Team agreed to tailwindcss, will have to check with them about potentially using Flowbite as a plugin because it could be a great opportunity to try and use the Figma design system build for integration with Tailwindcss. Options may be limited to free snippets.

### Accomplishments

- Sucessfully installed npm and performed npm start.\
- Added description and keywords to index.html.
- Installed and added tailwindcss in index.css file.
- Also added a style.js file. Both the style.js and index.css information was previously used in my portfolio project and I wanted to see about modifying the info to meet my teams needs.
- Added file structure to front-end with subdirectories (assets, components, pages, constants, etc.). Added some empty files to those subdirectories.
- Added images to public folder and assets/images folder. Will need to change those images if they do not fit with the overall theme of the project per team opinion.
- I started two components (NotFoundPage and NavBar) but I wasn't able to test them out because I need to get rid of a console error that is trying to get JSON data from html.

### Challenges

- Accidently did npm build command and had to create a new branch and copy the front-end work I did in the old branch to the new branch. I had to do this twice because I messed up and tried to rename src to src2 then copy the folder and move it between branches but when I created the new branch I wasn't paying attention and merged the src files. Restarted and did it correctly on branch 44. I did remove the merge requests, issues, and branches associated with the old branches.
- Had to install lodash, ESLint, and eslint-jsx-a11y somethin' to appease the errors that were preventing me from executing npm start.
- I thought create-react-app came with react-router-dom as a primary package but it wasn't there so I had to install it.
- I have the tailwindcss config file and the postcss autoprefixer config file. They are both js and can be converted to cjs. Will need to check with instructor to confirm what makes sense.
- I'm not entirely sure how to fetch fastapi data and integrate it into the front-end yet. I am getting a console log error about JSON - will figure that out on Monday (week 16).
- Will need to review code with team and potentially an instructor to make sure everything looks ok before merging to main.
- I tried to review the edits location branch and realized there was two branches (edit-location vs update-location) but the issue update-location was an actual merge request issue and the other wasn't, so I copied the merge request details and put them in the update-location merge request. I tried testing the corrected branch but wasn't getting the correct error handling message. I know Amanda and Chris were working on it Friday evening so I'll have to check in with them again since I didn't see the expected activity/messages on GitLab.

### Plan for next week

- I'd like to install three.js, react fiber and react drei because I was able to get my hands on some cool 3d objects (pickleball paddle, pickleball court, and pickleball) and I'd like to integrate them on the home, about, and contact pages.
- Figure out how to implement the fastapi into the front-end and how to display the players, teams, tournaments, and locations data using tailwindcss (and potentially flowbite).
- Help team finish fastapi endpoints if they are not finished yet.
- Continue to review and merge fastapi endpoints prn.
- I'd like to incorporate Challonge API for our project and have started watching some JS Mastery videos on implementing APIs.
- I'd also like to figure out how to use Google Maps API so we can have a map location associated with pickleball courts. Otherwise we will just have to hard code locations.
- I'm sure there will be setbacks because bracket generation can be difficult but we can only try.
- I'd like to finish the About and Contact pages by the end of Week 16. And get a functional Navbar.

---

## Week 4

### Goals

- Handle front-end setup, make components, implement unit test for get one player.

### Accomplishments

- Adding front-end with create-react-app
- Installed tailwindcss along with PostCSS and Autoprefixer as dependencies (see first command below).. the second command (see second command below) initializes a tailwind.config.js file in your project root directory, which you can use to customize the default Tailwind CSS configuration.
- Set up the Tailwind directives inside the ./src/index.css file and added gradients, text-gradients, and shadow-boxes:
  `@tailwind base;
@tailwind components;
@tailwind utilities;
`
- \*note for box-shadows: @keyframes mulShdSpin is a CSS rule used to define an animation that can be applied to an HTML element. The animation is called "mulShdSpin" and it specifies how the element should change over time.
- Installed eslint and eslint-plugin-jsx-a11y for more consistent coding and using jsx files.
- Installed react-router-dom for Navbar.jsx component. this file will be connected to constants/index.js.
- Added css to index.css file
- Created styles.js for additional styling.
- Added file structure to src folder, created the following subdirectories to improve organization: accounts, assets, components, errors, and pages. Some of these subdirectories include empty files for future use. In assets folder made icons, images, and logos folders. In accounts folder, empty files include: Login.js, Profile.js, Signup.js. In pages folder, empty pages include: About.js, Contact.js, Home.js.
- Added a greenbg.jpg and a notfoundpage.jpg for Home.js component (empty file) background and NotFoundPage.js component (not empty).
- Created a constants folder with an index.js file so we can import text to whatever component we want. This will improve maintainability and make the rest of the code a template for future projects since you only really need to change what's in the constants folder (index.js) with different information to create a totally new application.
- Added some comments based on documentation (see tops public/index.html and src/index.js)
- Added meta description and keywords to public/index.html file
- Made edits in src/Construct.js and check for changes on localhost:3000
- Reviewed and merged many MRs.

### Challenges

- Making sure styles and tailwindcss were working as intended.
- Making sure everyone new how to use the styles and css.
- Had issue with unit test create player, ended up getting help from SEIRs and switched to get one player instead.

### Plan for next week

- Interested in using framer motion and react 3d libraries.
- Frequent check ins to ensure all team members are feeling good.

---

## Week 5

### Goals

- Implement three 3d objects (racket, pickleball, court)
- Implement navbar
- Make some cards and other styling choices for home and about pages.

### Accomplishments

- navbar was implemented
- 2/3 3d objects have been correctly displayed and are interactive.

### Challenges

- Had some glitching with the court object. The blue part got pixelated everytime a user would rotate it. I tried changing positioning and lighting but it wasn't helping. I haven't deleted the files out of the project in case I learn how to fix this at a later date.
- May need to update my unit test if Amanda changes player query.

### Plan for next week

- Celebrate!
- After instructor presentations, our team will take some time to work on styling for mod 3 presentations.
