# PicklePlay - John's Development Journal

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

- Roll up sleeves and get to the meat of the project!!!!

---

## Week 3

### Goals

10/09/23 - W15D1

- Created Get all Teams endpoint
- Created routers/teams.py
- created queries/teams.py
- Had conflicting migration information and conflicting dependencies that were pushed to main and started affecting peoples projects when pulled
- We had to resolve and update main

Began working on POST teams endpoint

10/10/23 - W15D2

- Updated "GET all teams" endpoint - in my "POST teams" endpoint - it has more
- Continuing work on "POST teams" endpoint
- "POST" in localhost:8000/docs - make sure to set optional fields to "null" otherwise the query will search for fields as if they are the number '0'

10/11/23 - W15D3

- created PUT (update teams) endpoint
- also made minor alterations to POST endpoint

10/12/23 - W15D4

- Realized my POST and PUT endpoints response shape for data was different than what we wanted in our API design
  - Need to update GET specific team endpoints to have the same response shape as API Design and implement that into POST and PUT endpoints as well
- Finished GET specific team endpoint

10/13/23 - W15D5

- Finished DELETE specific team endpoint
- In "40-resolving-response-shape-in-get-specific-team-endpoint" branch:
  - Created new shape for response data for GET One Team (see in queries/teams.py 'class SpecificTeamOut')
- Need to update Journal

### Accomplishments

- Finished most endpoints

### Challenges

- Had to resolve 'null' issues differing from 0 fields

### Plan for next week

- Complete all endpoints and begin work on front end
- ***

## Week 4

### Goals

10/16/23 - W16D1

- Finished up proper Response shape foor GET get_one TEAM
- Encountering 400 BAD REQUEST error when trying to use new get_one team for all teams other than team 8 - possibly because there is a null field for player_id_2 on all other teams
- IF EITHER PLAYER OR TOURNAMENT IS NULL get_one team does not work (all information fields must be completed with existing data for the 'get_one' to work)

10/17/23 - W16D2

- Working on CI/CD implementation
- Backend Deploy doesn't work
- Rosheen said she needs to speak with DevOps team to get it to work

10/18/23 - W16D3

- Finished Frontend and Backend Deployment
- lookup 'useParams' - to grab {id} for details page routers
- Beginning work on Frontend Components

10/19/23 - W16D4

- Need to pull and run all prune commands and rebuild db b/c we updated tables
- Also need to rerun the deployment
- Practice test Monday
- Rosheen says if we run into issues with rerunning deployment - delete db and redeploy so migrations run properly if problem happens in deployment (can keep the same name so we don't have to redeploy the api again)

10/20/23 - W16D5

- No class

### Accomplishments

- Managed to deploy
- Began work on frontend components

### Challenges

- All deployment was frustrating and difficult

### Plan for next week

- Finish frontend components
- ***

## Week 5

### Goals

10/23/23 - W17D1

- Completed GET all teams unit test
- continued working on frontend components
- Almost completed the POST team component - need to write merge request

10/24/23 - W17D2

- Finished POST / create team frontend component
- Finished TeamsList Component

10/25/23 - W17D3

- Working on TeamDetails Component
- Completed TeamDetails component
- Finished implementing Delete in TeamDetails component
- Completed TeamUpdate Component
- Finished implementing edit/TeamUpdate Component into TeamDetails Component
- updated Journal

10/26/23 - W17D4

- Need to use NavLink instead of Link
- Need to uncomment out the 'api-unit-tests-job' in .gitlab-ci.yml
- confirm the unit tests are being run in pipeline after
- Change <a> tags and hrefs into Links or Navlinks! Cannot be anything else
- Only using <a> tags if going to an external site
- Remove navbar from Home.jsx
- /racket.glb

- removing console log statements and comments from our code
- Beginning work on readme and making sure journals are up to date
- Testing fully deployed site
- Need to figure out with Amanda if we can include first and last name in Create Player frontend

10/27/23

- Finish Readme
- Update Journals

### Accomplishments

- Finished all frontend components
- Cleaned up deployment

### Challenges

- Stress of deadline approaching
- Resolving deployment issues

### Plan for next week

- Do stretch goals
- ***
