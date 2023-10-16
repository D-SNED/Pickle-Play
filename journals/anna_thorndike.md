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

-
- ***

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

-
-

### Accomplishments

-
-

### Challenges

-
-

### Plan for next week

-
- ***

---

## Week 5

### Goals

-
-

### Accomplishments

-
-

### Challenges

-
-

### Plan for next week

-
- ***
