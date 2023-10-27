# PicklePlay

<div style="text-align: center;">
    <img src="https://media2.giphy.com/media/katn3lojUTjdkj5KOb/200w.webp?cid=ecf05e47dh7t773v3kat38ecd6yageyeih2axacvaku6q678&ep=v1_gifs_related&rid=200w.webp&ct=g" width="250">
</div>

## Description

Pickleball is one of the fastest growing sports in America, with over 4.8 million players and counting. However, it can be difficult for enthusiasts to find fellow players and exciting tournaments. That's why we created PicklePlay - a small online community for pickleball players. PicklePlay makes it easy to connect with fellow players in your area, organize and join teams and tournaments, and even scout out new courts!

## Team Members

<div style="text-align: center;">
    Amanda Taing    ⭐    Anna Thorndike    ⭐    Christopher Bush    ⭐    Derek Snediker    ⭐    John Gordon
  <br/>
  <br/>
  <img src="https://media1.giphy.com/media/uQUaS3kX0AVyy6djto/200w.webp?cid=ecf05e477d4bqoiixhlb8wi57b1k87mv3awyvnl9vj7vewj3&ep=v1_gifs_search&rid=200w.webp&ct=g" width="250">
</div>

---

## Table of Contents

1. [Description](#description)
2. [Team Members](#team-members)
3. [Design](#design--ghi--wireframes)
4. [Installation](#installation)
5. [API Documentation](#api-documentation)
6. [Deployment](#deployment)
7. [Integrations](#integrations)
8. [Thank You](#thank-you)
9. [Resources](#resources)

<div style="text-align: center;">
<img src="https://media1.giphy.com/media/7UNUIz3gs9VM93UNKK/200w.webp?cid=ecf05e47dh7t773v3kat38ecd6yageyeih2axacvaku6q678&ep=v1_gifs_related&rid=200w.webp&ct=g" width="250">
</div>

---

## Design / GHI / Wireframes

Go here for [create-react-app documentation](ghi/create_react_app.md).

Additional Dependencies:

- We installed Tailwind CSS as a PostCSS plugin.
- We used Three.js, React-three-fiber, React-three-drei, and gltfjsx for our 3d models.
- We used prop-types, react-parallax-tilt, and framer-motion as well on our frontend.

Please follow the links to view our [Datatables](docs/DataTables.md) and [Wireframes](docs/wireframe/wireframe.md).

<div style="text-align: center;">
<img src="https://media0.giphy.com/media/XSSTbYF0U4EeoQOvum/200w.gif?cid=6c09b952crxadocwr4t840n9mst8ljbqfv5nlz3idr0prsd4&ep=v1_gifs_search&rid=200w.gif&ct=g" width="250">
</div>

---

## Installation

1. Open up your terminal to your desired directory on your local computer

2. Fork the repository from the gitlab link below to your own gitlab account

- https://gitlab.com/gitjaacd/pickle-play

3. Clone the repository into your desired directory

```
git clone https://gitlab.com/gitjaacd/pickle-play.git
```

4. Change your working directory to the project's directory

```
cd pickle-play
```

5. Open up Docker Desktop and run the following commands in your terminal:

```
docker-compose down --remove-orphans
docker network prune # Answer Y
docker container prune # Answer Y
docker volume prune # Answer Y
docker image prune # Answer Y
```

6. Go back to docker desktop and delete all images, containers, and volumes

7. Run the following to build your repo. This will take a few minutes as it needs to download some dependencies.

```
docker volume create postres-data
docker-compose build
docker-compose up
```

8. All of your containers should be up and you should be able to go to the following:

- [localhost:8000/docs](http://localhost:8000/docs) —> api docs page
- [localhost:3000](http://localhost:3000) → frontend to your project

<div style="text-align: center;">
<img src="https://media4.giphy.com/media/CuuSHzuc0O166MRfjt/200w.webp?cid=ecf05e47crde4jycxw91yo9m31k2rrqvlrpwga68rhwii8kf&ep=v1_gifs_search&rid=200w.webp&ct=g" width="250">

<img src="https://media0.giphy.com/media/Yfl7CS7vQqnebA69aH/200w.webp?cid=ecf05e47crde4jycxw91yo9m31k2rrqvlrpwga68rhwii8kf&ep=v1_gifs_search&rid=200w.webp&ct=g" width="250">
</div>

---

## API Documentation

Please follow the link to view our [API Documentation](docs/API.md).

<div style="text-align: center;">
<img src="https://media4.giphy.com/media/3dDNV1Lr1X3ZjR3xvZ/200w.webp?cid=ecf05e47dh7t773v3kat38ecd6yageyeih2axacvaku6q678&ep=v1_gifs_related&rid=200w.webp&ct=g" width="250">
</div>

---

## Deployment

Project is deployed to Caprover (BE, DB) & GitLab-pages (FE)

- Make sure this project is in a group. If it isn't, stop now and move it to a GitLab group.
- Remove the fork relationship in GitLab, so go to:
  `Settings > General > Advanced > Clear Fork Relationhsip with Original Project`
- Add these GitLab CI/CD variables:
  `PUBLIC_URL: this is your gitlab pages URL`
  `SIGNING_KEY: enter "enter your signing key`
- Our GitLab project URL
  `https://gitlab.com/gitjaacd/pickle_play` or `https://gitlab.com/gitjaacd/pickle-play`
- Our GitLab pages URL
  `https://gitjaacd.gitlab.io/pickle_play` or `https://gitjaacd.gitlab.io/pickle-play`
- Initalize CapRover (We attain our IP address and domain from an instructor, then followed steps in the CI/CD in Learn)
  You can checkout the deployment instructions in learn by going to [CI/CD Notes](https://learn-2.galvanize.com/cohorts/3733/blocks/1908/content_files/build/01-ci-cd/01-continuous-integration.md)
- Merge a change into main to kick off the inital deploy. Once the build pipeline finishes you should be able to see an "under construction" page on your GitLab pages site.
- After a lot of work we transformed the construction page to our PicklePlay website!

### PicklePlay!

Backend deployment at: https://jun-2-pt-pickleplayapi.mod3projects.com/docs
Frontend deployment at: https://gitjaacd.gitlab.io/pickle-play

<div style="text-align: center;">
<img src="https://media0.giphy.com/media/0RiL76Qdbg7b4maVY6/200w.webp?cid=ecf05e473nk82i01poa1ahcnd4iuye3cdvda1oxfde22pkte&ep=v1_gifs_search&rid=200w.webp&ct=g" width="250">

<img src="https://media3.giphy.com/media/yeZk3fKwR9uUsqduDj/200w.webp?cid=ecf05e47wnyzapeybij42kwreb56fj90pi1wgdmo0uxwztfv&ep=v1_gifs_search&rid=200w.webp&ct=g" width="250">
</div>

---

## Integrations

- You can checkout our integrations by going to [Integrations](docs/Integrations.md).

---

## Journals

- You can checkout our journals by going to our journals folder.

---

# Thank You!

<div style="text-align: center;">

📣 Shout out to our amazing Hack Reactor Instructors, SEIRs, and Cohort Lead! 🎉

We want to extend a huge thank you to everyone at Hack Reactor for their unwavering dedication and support throughout our learning journey. Your tireless efforts in providing us with cutting-edge curriculum, mentorship, and genuine care for our success have empowered us to embark on exciting careers in the tech industry.

❤️ Keep shining and inspiring future developers as you have done for us. You truly are the backbone of our success! ❤️

<img src="https://media0.giphy.com/media/59kVG52Jij2U2S04BV/200w.webp?cid=ecf05e477d4bqoiixhlb8wi57b1k87mv3awyvnl9vj7vewj3&ep=v1_gifs_search&rid=200w.webp&ct=g" width="250">

</div>

---

## Resources

- [Markdown Guide](https://www.markdownguide.org/basic-syntax/#:~:text=Line%20Breaks,spaces%2C%20and%20then%20type%20return.) → Basic Syntax: The Markdown elements outlined in the original design document.
- [Pudgy-Penguin GIFs](https://giphy.com/search/pudgy-penguin) → Visual fun 😊
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/)
- [Pydantic Documentation](https://docs.pydantic.dev/latest/)
- [OpenAPI Initiative](https://www.openapis.org/)
- [React](https://react.dev/)
- [Tailwindcss / Postcss](https://tailwindcss.com/docs/installation/using-postcss)
- [Three.js](https://threejs.org/)
- [React-Three-Fiber Documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [gltfjsx](https://www.npmjs.com/package/@react-three/gltfjsx)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt)
- [framer-motion](https://www.framer.com/motion/)
