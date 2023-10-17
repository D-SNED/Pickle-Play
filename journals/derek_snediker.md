# PicklePlay - Derek's Development Journal

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

## Date: 10/11/23

### Today I worked on:

Finished the create tournaments endpoint as well as the get all tournaments endpoint. Wasn't too bad. It's been slow making progress because of just how group work can be. Often times you need to step away from your work to help out. We also are getting a lot better at writing our issues and merge requests as well as making detailed notes for our reviewers accepting out MR's.

**AH-HA!💡**
I figured out how to implement error handling on my own. Doesn't seem like something that was that hard in hindsight, but it was a bit of a pain looking through documentation. Ultimately the approach I took was very quick and easy to implement and came straight from the fastAPI documentation. Also generally getting a better grasp of fastAPI. I'm actually having fun and enjoying the process of building the backend. It's tough at times but it's getting better.

**🎉 Celebrations 🎉**
Today went relatively smoothly compared to other days. I think the team is getting some muscle memory down and I'm hoping we can wrap up our endpoints tomorrow and start tackling the front end soon.

### Bugs encountered 🐛🐞🐜 :

I keep getting an Incompatible Migrations error that will stop my fastAPI container. It's the bane of our groups existence as many of us have encountered this error. Seems like the only solution is nuking docker. Starting from zero and mounting, building and composing containers. I'll try and take a picture of the error when I encounter it.

🪲

**\~Solution~**

### References Used Today:

N/A

### Any Blockers:

None at the moment

### Tomorrow I'm working on:

Working on update tournament endpoint. Will definitely finish that. Really hoping to get delete tournament and get specific tournament finished as well

### References for Tomorrow:

## [Learn fastAPI videos](https://learn-2.galvanize.com/cohorts/3733/blocks/1893/content_files/build/02-rest-fastapi/10-fast-api-videos.md)

## 10/12/23

### Today I worked on:

I refactored the GET_all_tournaments method. Finished the update tournament endpoint as well as the get_specific_tournament endpoint.

**AH-HA!💡**
We realized that our response shape was incorrect for our GET all tournaments endpoint. I was able to change the shapes of the pydantic model but couldn't figure out how to get the data into the table and then retrieve the table. With Jordan's and Cory's help I was able to write a sql statement that joined the tournament and location tables and I was able to format the return to access the info in each column while iterating through the database. Felt good being able to implement that

**🎉 Celebrations 🎉**
Figuring out the Get all players endpoint

### Bugs encountered 🐛🐞🐜 :

🪲

**\~Solution~**

### References Used Today:

## [Learn fastAPI videos](https://learn-2.galvanize.com/cohorts/3733/blocks/1893/content_files/build/02-rest-fastapi/10-fast-api-videos.md)

### Any Blockers:

Not really a blocker but I think for the get specific tournament I'll need to add more fields in pydantic model for location to show more location details on the frontend.

### Tomorrow I'm working on:

Get specific tournament finished and merged and delete tournament

### References for Tomorrow:

[Learn fastAPI videos](https://learn-2.galvanize.com/cohorts/3733/blocks/1893/content_files/build/02-rest-fastapi/10-fast-api-videos.md)

- ***

## Week 4

## 10/16/23

### Today I worked on:

Worked on the delete tournament endpoint as well as fixing the bug in update tournament endpoint with Amanda.

**AH-HA!💡**
For the update tournament endpoint we were getting a bug that would return a 200 response rather than an error message when a tournament was updated with a tournament_id that did not exist. To fix this we specified the values we wanted after our fetchone() function to be the values at specific indexes of the query. It the id exists it will update the tournament and if the id does not exist it will skip to the except block and throw the specified error.

**🎉 Celebrations 🎉**
At this point the backend for tournaments has been completed and I can move on to either unit tests or the frontend for the tournaments section.

### Bugs encountered 🐛🐞🐜 :

See AH-HA!
🪲

**\~Solution~**
See AH-HA!

### References Used Today:

[Learn fastAPI videos](https://learn-2.galvanize.com/cohorts/3733/blocks/1893/content_files/build/02-rest-fastapi/10-fast-api-videos.md)

### Any Blockers:

None at the moment

### Tomorrow I'm working on:

Most likely frontend for tournaments, possibly unit testing

### References for Tomorrow:

[Learn React vids](https://learn-2.galvanize.com/cohorts/3733/blocks/1897/content_files/build/04-react-hooks-router/01-react-hooks.md)

## [Learn Unit Test Videos](https://learn-2.galvanize.com/cohorts/3733/blocks/1906/content_files/build/04-unit-tests/01-unit-tests.md)

- ***

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
