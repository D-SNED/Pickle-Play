# PicklePlay - Christopher's Development Journal

## Team Members:

- Amanda Taing
- Anna Thorndike
- Christopher Bush
- Derek Snediker
- John Gordon

---

## Week 1

### Goals

- Formulate plan
- Outline general structure of project
- Introduction to new tools/tech

### Accomplishments

- Plan conceived and outlined

### Challenges

- Nothing significant in particular
-

### Plan for next week

- Get started!

---

## Week 2


### Goals

- Figure out how to use new tech in this project (Sequel, Fast API, etc.)
- Complete first steps in using each of these in project

### Accomplishments

- Set up SQL tables
- Initial migrations
- First backend endpoints

### Challenges

- Nothing major

### Plan for next week

- Roll up sleeves and get to the meat of the project.


---

## Week 3

#### NOTE
The journal for this week mostly blends together all of the days because I forgot to journal or take notes for each day.

### Goals

- Finish all backend endpoints.
- Learn what I'm doing.

### Accomplishments

- Completed GET all endpoint for locations
- Completed POST endpoint for locations
- Completed PUT endpoint for locations

### Challenges

- I first made branches for both the GET and POST endpoints. I was still figuring out what I was doing, so I didn't initially realize that I was doing work that was more part of the GET endpoint than the POST endpoint. I thought it would be simple, unproblematic fix to just rename each of the branches to accurately reflect what I was doing in them. Turns out this was neither simple nor unproblematic. A more diligent version of me would've taken notes on what complications resulted, but the actual me did not and thus I cannot exactly explain them now.
- Brain fog, coming back from ten days off. I got used to the the workflow/learning flow of Mod 1 and 2 where I had a specific project with instructions to learn with and have somewhat struggled to adapt to the more proactive learning required by this module.
- Also I don't know what curl means, so I haven't been incorporating it into my MRs. I should probably figure out what it is.
- As of closing time on Friday, I still have yet to complete the DELETE and GET (singular) location endpoints. I had issues caused by installing pre-commit that cost me some time. Eventually Rosheen helped me resolve this by deleting some paths from the hidden .git folder.
- I also spent some time chasing my tail in circles trying to fix my PUT endpoint which returns a 200 code when trying to update a location ID that doesn't exist in the DB. Eventually after discovering that our PUT endpoints for tournaments and teams did the same thing, we decided to merge as is since it doesn't impede functionality and make a new issue to resolve this at a later point.
### Plan for next week

- I do intend to finish my other two endpoints before monday.
- For this next week I mostly intend to work on front end stuff.
- I intend to be more diligent about journaling and note taking as well.

---

## Week 4

### Goals

- It's a little ambitious, but we'd like to finish our MVP by the end of the week.
- I intend to do my share of frontend programming and working on unit tests.

### Monday
- I figured out what I was doing wrong with workflow with respect to issues and MR's. Turns out I had missed the button that creates a branch and/or an MR when writing an issue. Which had lead to several cases of duplicate branches or extra branches that had nothing in them but the same or similar names as the ones I was working on.
- I finished two issues one for a DELETE endpoint for locations and one for a GET singular endpoint for locations.
 - I had a small issue with the GET endpoint which turned out to just be an extra comma. Yay coding.

### Rest of week

- I finished all of my endpoints. I got strated on my frontend components. It was rough at first. I kind of forgot how and where to start. I had to refamiliarize myself with React and CSS and whatnot. Once I managed to get going, I was able to get into the flow of it pretty well. I could definitely feel myself getting better and more comfortable as the week went on.
- I decided to start with my Create Location component. I got everything to the point where it seemed like it should work but I kept getting an "Unauthorized" error when trying to submit. Over the weekend, Amanda found the fix for this.
- I took a break from the Create Location component to work on the list locations component and was able to get it done by the end of the week. This went pretty well and I felt get about it.

### Plan for next week

- Wrap up front end components. Make everything look good. Figure out how to use Google Maps API to show the location on a map.

---

## Week 5

### Goals

- Finish evertyhing.
- Feel good about my work.
- Feel confident about my abilities.
- Incorporate Google Maps API.
- Be a good team player.

### What Happened

- As noted previously, over the weekend, Amanda found the solution to the Unauthorized error when creating a location, so I was able to apply that and get it working.
- I made a successful unit test for GET all locations. This was pretty easy.
- I was pretty ambitious with my Single Location view component. I originally tried to do everything at once. Delete, Update, View, and bring in Google Maps. I got the view to work well. I struggled to get the layout to look exactly like what I had in my head, but got it close. Eventually I decided to push Google Maps and the layout to a different Issue and just get the basic functionality up and running. Which was pretty easy. I found a solution for delete that I liked by making a separate file for delete confirmation. My initial attempt brought upa  pop-up menu that was transparent so the delete button was not only visible behind it but really stuck out like a sore thumb. This way is way nicer. I also realized early on that udpate should be its own issue.
- I got Google Maps to work like I wanted, but I had an error in the console about mapInit not being a function. Everything else appeared to be in order, but I could not figure out how to solve this. I made copies of my files in a completely separate directory from the project if I wanted to go back to tem and decided to not do Google Maps in this branch.
- Wednesday morning I finished my Update component. This was pretty easy. The only setback was yet again forgetting to log in first since it requires authorization.
- After that I decided to first try doing Google Maps from scratch rather than trying to fix my prior code. I found a different approach that worked almost flawlessly. Although I did have some struggle trying to get the CSS layout to match the ideal in my head. I was able to get it almost exactlylike I imagined except without the dashed line separating the top from bottom. Next week after grading I might try to go back to this.
- I feel like I did a pretty good job about being available to help my teammates with MRs. I mostly hung out in our main breakout room, so I was usually available there if anyone needed an MR reviewed.
- On Thursday, I pretty much just worked on the Readme. It's now Friday and I'm going to merge this journal and call it good!
