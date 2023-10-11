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

1. First item (Description)
2. Second item (Team Members)
3. Third item (Overview)
   1. Indented item
   2. Indented item
4. Fourth item (Design)
5. Fifth item (Installation)
6. Sixth item ()
7. Seventh item ()
8. Eight item ()
9. Ninth item ()
10. Tenth item ()

---

## Overview

Words words words

<img src="https://media1.giphy.com/media/7UNUIz3gs9VM93UNKK/200w.webp?cid=ecf05e47dh7t773v3kat38ecd6yageyeih2axacvaku6q678&ep=v1_gifs_related&rid=200w.webp&ct=g" width="250">

---

## Design

Words words words

UX Design

- Interaction Design
- Wireframes & Prototypes
  - Figma
  - ?UIZARD
- Information Architect
- User Research
- Scenarious

UI Design

- Visual Design
- Colors
  <img src="./z_color_palette.JPG" width="250">

- Graphic Designer
- Layouts
- Typography

<details><summary><strong>Wire-Frame Diagrams</strong></summary>
    <img src="***">
</details>

<details><summary><strong>Context Map</strong></summary>
    <img src="***">
</details>

<details><summary><strong>Route Tree Diagram</strong></summary>
    <img src="***">
</details>

<img src="https://media0.giphy.com/media/XSSTbYF0U4EeoQOvum/200w.gif?cid=6c09b952crxadocwr4t840n9mst8ljbqfv5nlz3idr0prsd4&ep=v1_gifs_search&rid=200w.gif&ct=g" width="250">

---

## Installation

1. Open up your terminal to the desired directory on your local computer

2. Fork the repository

3. Clone the repository

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

<img src="https://media4.giphy.com/media/CuuSHzuc0O166MRfjt/200w.webp?cid=ecf05e47crde4jycxw91yo9m31k2rrqvlrpwga68rhwii8kf&ep=v1_gifs_search&rid=200w.webp&ct=g" width="250">

<img src="https://media0.giphy.com/media/Yfl7CS7vQqnebA69aH/200w.webp?cid=ecf05e47crde4jycxw91yo9m31k2rrqvlrpwga68rhwii8kf&ep=v1_gifs_search&rid=200w.webp&ct=g" width="250">

---

## API Documentation

Words words words

#### Example Table

| Method | URL                                   | Action                   | View       |
| ------ | ------------------------------------- | ------------------------ | ---------- |
| GET    | `http://localhost:8100/api/***/`      | List all \*\*\*          | `api_***s` |
| POST   | `http://localhost:8100/api/***/`      | Create a \*\*\*          | `api_***s` |
| GET    | `http://localhost:8100/api/***/<id>/` | Show a \*\*\*'s details  | `api_***`  |
| PUT    | `http://localhost:8100/api/***/<id>/` | Update a \*\*\*          | `api_***`  |
| PATCH  | `http://localhost:8100/api/***/<id>/` | Update a specific \*\*\* | `api_***`  |
| DELETE | `http://localhost:8100/api/***/<id>/` | Delete a \*\*\*          | `api_***`  |

<img src="https://media4.giphy.com/media/3dDNV1Lr1X3ZjR3xvZ/200w.webp?cid=ecf05e47dh7t773v3kat38ecd6yageyeih2axacvaku6q678&ep=v1_gifs_related&rid=200w.webp&ct=g" width="250">

---

## Deployement

Project is deployed to Caprover (BE, DB) & GitLab-pages (FE)

- Make sure this project is in a group. If it isn't, stop now and move it to a GitLab group.
- Remove the fork relationship: In GitLab go to:
  `Settings > General > Advanced > Clear Fork Relationhsip with Original Project`
- Add these GitLab CI/CD variables:
  `PUBLIC_URL: this is your gitlab pages URL`
  `REACT_APP_API_HOST: enter "blank" for now`
- Our GitLab project URL
  `https://gitlab.com/gitjaacd/pickle_play` or `https://gitlab.com/gitjaacd/pickle-play`
- Our GitLab pages URL
  `https://gitjaacd.gitlab.io/pickle_play` or `https://gitjaacd.gitlab.io/pickle-play`
- Initalize CapRover (Attain IP address and domain from an instructor, follow steps in the CD Cookbook in Learn)
- Merge a change into main to kick off the inital deploy. Once the build pipeline finishes you should be able to see an "under construction" page on your GitLab pages site.

<img src="https://media0.giphy.com/media/z3eiFtHmDE2HopPuls/200w.webp?cid=ecf05e473nk82i01poa1ahcnd4iuye3cdvda1oxfde22pkte&ep=v1_gifs_search&rid=200w.webp&ct=g" width="250">

<img src="https://media0.giphy.com/media/0RiL76Qdbg7b4maVY6/200w.webp?cid=ecf05e473nk82i01poa1ahcnd4iuye3cdvda1oxfde22pkte&ep=v1_gifs_search&rid=200w.webp&ct=g" width="250">

<img src="https://media4.giphy.com/media/K0fCYZRbETczFWydo0/200w.webp?cid=ecf05e473nk82i01poa1ahcnd4iuye3cdvda1oxfde22pkte&ep=v1_gifs_search&rid=200w.webp&ct=g" width="250">

<img src="https://media3.giphy.com/media/yeZk3fKwR9uUsqduDj/200w.webp?cid=ecf05e47wnyzapeybij42kwreb56fj90pi1wgdmo0uxwztfv&ep=v1_gifs_search&rid=200w.webp&ct=g" width="250">

<img src="https://media1.giphy.com/media/xm4uYTatdDtbmCsBCw/200w.webp?cid=ecf05e47koiwk48f8or6a70g1jjux2m8869nnlb7is1cbe9g&ep=v1_gifs_search&rid=200w.webp&ct=g" width="250">

---

## Issues

- GitLab issue board is setup and in use (or project management tool of choice)

---

## Journals

- Journals

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
