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

[Learn Unit Test Videos](https://learn-2.galvanize.com/cohorts/3733/blocks/1906/content_files/build/04-unit-tests/01-unit-tests.md)

- ***

## 10/17/23

### Today I worked on:

Mostly merge requests and helped Amanda with frontend auth. Slow day getting the backend finsihed and everyone caught up so we can work on frontend

**AH-HA!💡**

**🎉 Celebrations 🎉**
We got front end auth working

### Bugs encountered 🐛🐞🐜 :

- ***

## 10/18/23

### Today I worked on:

Worked on getting a list of all my tournaments as well as fixing our backend.. I found out that we couldn't delete things that had foreign key relationships because we used ON DELETE RESTRICT.

**AH-HA!💡**
We were able to fix the database deletion fiasco with ON DELETE CASCADE. Not entirely sure why we didn't do this in the first place. I believe we confused ourselves and mixed up what would get deleted if we used CASCADE but in the end it was the right choice

**🎉 Celebrations 🎉**
I was able to create tournament cards for the frontend tournament list! It looks really good!

### Bugs encountered 🐛🐞🐜 :

N/A
🪲

**\~Solution~**

### References Used Today:

N/A

### Any Blockers:

N/A

### Tomorrow I'm working on:

Create tournament form

### References for Tomorrow:

[Learn Unit Tests](https://learn-2.galvanize.com/cohorts/3733/blocks/1906/content_files/build/04-unit-tests/01-unit-tests.md)

- ***

## 10/19/23

### Today I worked on:

Create tournament form. I really just worked on styling. I think I'm getting lost in that and need to focus on the functionality more. Styling is so fun tho...

**AH-HA!💡**
Was having trouble getting my cards to show in columns. It was as simple as using a tailwind col class. Thanks Christopher. I looked at your code for that!

**🎉 Celebrations 🎉**
Finishing a long week.. Also getting more comfortable with React again

### Bugs encountered 🐛🐞🐜 :

For some reason Christopher can't get a location to create. He's logged in as an authorized user so her should be able to.. I think i'll probably run into that issue soon as well unless he solves it first
🪲

**\~Solution~**
N/A

### References Used Today:

N/A

### Any Blockers:

Creating location is getting a 401 unathorized error

### Tomorrow I'm working on:

The react logic for my create tournament form

### References for Tomorrow:

- ***

## 10/21/23

### Today I worked on:

Finished my create tournament form!
**AH-HA!💡**
The 401 unauthorized error was because I wasn't including the credentials in the fetch config! Also I had to look at stack overflow to get my checkbox to update its state and revert back to false once the form was entered

**🎉 Celebrations 🎉**
Very happy I got through the form without much trouble

## 10/22/23

### Today I worked on:

Get specific tournament unit test. Did some merge requests for Amanda and checked her code as well as helped her with her unit test. Started on the tournament details component as well.

**AH-HA!💡**
Unit tests need a mock query to test so the test doesn't actually interact with the database. It makes sense that you really don't want to interact with the database ever except for real requests.

useParams() is a way to dynamically change a url and pass in something like a tournament_id in order to get the details for a specific instance.

**🎉 Celebrations 🎉**
I'm getting more familiar with useParams()

### Bugs encountered 🐛🐞🐜 :

422 unprocessible entity. This was when the url would update to tournaments/undefined rather than tournament/3 for example. Im not entirely sure why when passing the tournament_id as a parameter into the fetch function was breaking it but once it was removed it worked.
🪲

**\~Solution~**
Remove tournament_id as parameter in fetch function

### References Used Today:

N/A

### Any Blockers:

N/A

### Tomorrow I'm working on:

finishing details page

### References for Tomorrow:

N/A

### Bugs encountered 🐛🐞🐜 :

N/A

- ***

## Week 5

## 10/23/23

### Today I worked on:

update tournament
**AH-HA!💡**
I had a hard time figuring out how to get the old data to populate in the form so user wouldn't need to type in the data they din't want changed.I solved the issue by fetching the data for the tournament being edited and set the state of the different fields to be the fetchedData. On page load it populates the old fields.
**🎉 Celebrations 🎉**
I got my update form to work!

### Bugs encountered 🐛🐞🐜 :

Couldn't figure out how to populate the dropdown menu with the location before updating
🪲

**\~Solution~**
N/A

### References Used Today:

N/A

### Any Blockers:

The dropdown menu not populating with old data. Not sure how to fix that but overall the form still works and is 95% perfect

### Tomorrow I'm working on:

Delete tournament, fixing unittest, helping out other teammates

### References for Tomorrow:

N/A
See Above
🪲

**\~Solution~**
See above

### References Used Today:

N/A

### Any Blockers:

N/A

### Tomorrow I'm working on:

getting the teams that are playing in a specific tournament to show in tournament details page

### References for Tomorrow:

N/A

- ***

## Date: 10/25/23

### Today I worked on:

Getting teams entered in a tournament to show on the details of a specific tournament. Did many merge requests today. Did a little bit of styling and code clean up.

**AH-HA!💡**
Was running into an issue when I would get the teams data and filter that list so that it would be a list of teams that had the same tournament id as the id of the tournament. Initially on page load it wouldn't fetch the data. But on editing the code and saving it would fetch the data. The only thing I could think of was that the tournament data was being fetched and once that promise was completed it would render the page before the promise of the fetch for filtered teams. I was able to get around this by putting the fetchTeamData funciton into a second use effect and successfully rendering the team information for the tournament.

**🎉 Celebrations 🎉**
We have stopped coding to prepare for friday's presentation.

### Bugs encountered 🐛🐞🐜 :

In Amanda's code she was using useParams to dynamically change the fetch for a specific player. We ended up getting a url that was like players/undefined. I was able to get it figured out but still unsure of what was wrong. Something about passing the payer_id into the fetch funciton as a parameter.

🪲

**\~Solution~**
Still not entirely sure why it works but you can't pass the dynamically changing part into the funciton as a parameter. Also in app js her player_id was playerId and it didn't match

### References Used Today:

N/A

### Any Blockers:

Not really a blocker just wish we had been more on top of deployment this entire time

### Tomorrow I'm working on:

Read me and documentation. Merging journals.

### References for Tomorrow:

- ***
