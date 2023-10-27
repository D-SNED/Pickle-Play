# API Endpoints

- [API Endpoints](#api-endpoints)
  - [Authorization / Authentication](#authorization)
    - [POST Log In](#post-login)
    - [DELETE Log Out](#delete-logout)
  - [Players](#players)
    - [POST Create Player](#post-create-player)
    - [GET All Players](#get-all-players)
    - [GET One Player](#get-one-player)
    - [DELETE Delete Player](#delete-player)
    - [PUT Update Player](#put-update-player)
  - [Locations](#locations)
    - [POST Create Location](#post-create-location)
    - [GET All Locations](#get-all-locations)
    - [GET One Location](#get-one-location)
    - [DELETE Delete Location](#delete-location)
    - [PUT Update Location](#update-location)
  - [Tournaments](#tournaments)
    - [POST Create Tournament](#post-create-tournament)
    - [GET All Tournaments](#get-all-tournaments)
    - [GET One Tournament](#get-one-tournament)
    - [DELETE Delete Tournament](#delete-tournament)
    - [PUT Update Tournament](#update-tournament)
  - [Teams](#teams)
    - [POST Create Team](#post-create-team)
    - [GET All Teams](#get-all-teams)
    - [GET One Team](#get-one-team)
    - [DELETE Delete Team](#delete-team)
    - [PUT Update Team](#update-team)

## API Endpoints

## Authorization

### POST Login

```http
POST /token HTTP/1.1
Content-type: application/x-www-form-urlencoded

  username: joker
  password: ilovetopass
```
- Response: Token

```jsonc
{
  "access_token": "string",
  "token_type": "Bearer"
}
```


### DELETE Logout
```http
DELETE /token HTTP/1.1
header:
  Authorization: Bearer token
```

- Response: always true

- Response shape (`JSON`):

```json
{
  "deleted": true
}
```

## Players

### POST Create Player

- Request:

```http
POST /api/players HTTP/1.1

{
  "username": "Joker15",
  "password": "ilovetopass",
  "email": "nicolaj@nuggets.com",
  "birthdate": "1995-12-19",
  "first_name": "Nicola",
  "last_name": "Jokic",
  "phone_number": "303-867-5309",
  "profile_picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNikola_Joki%25C4%2587&psig=AOvVaw2DjSIKPx6Mv4gQulMsuvGZ&ust=1698279714334000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPiK_Yv3j4IDFQAAAAAdAAAAABAE",
  "gender": "male",
  "skill_level_singles": 4.5,
  "skill_level_doubles": 4.5,
  "is_admin": true,
  "emergency_contact_fullname": "Michael Malone",
  "emergency_contact_phone_number": "720-867-5309"
}


```

- Response Shape: 

```jsconc
"Player": {
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiZDVkYTBhNy1lNzMxLTQzMzctYTY5ZS0yNTJiY2I1MjEyNGYiLCJleHAiOjE2OTgzNjQ2MjAsInN1YiI6Ikpva2VyMTUiLCJhY2NvdW50Ijp7ImlkIjo1LCJ1c2VybmFtZSI6Ikpva2VyMTUiLCJlbWFpbCI6Im5pY29sYWpAbnVnZ2V0cy5jb20iLCJiaXJ0aGRhdGUiOiIxOTk1LTEyLTE5IiwiZmlyc3RfbmFtZSI6Ik5pY29sYSIsImxhc3RfbmFtZSI6Ikpva2ljIiwicGhvbmVfbnVtYmVyIjoiMzAzLTg2Ny01MzA5IiwicHJvZmlsZV9waWN0dXJlIjoiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS91cmw_c2E9aSZ1cmw9aHR0cHMlM0ElMkYlMkZlbi53aWtpcGVkaWEub3JnJTJGd2lraSUyRk5pa29sYV9Kb2tpJTI1QzQlMjU4NyZwc2lnPUFPdlZhdzJEalNJS1B4Nk12NGdRdWxNc3V2R1omdXN0PTE2OTgyNzk3MTQzMzQwMDAmc291cmNlPWltYWdlcyZjZD12ZmUmb3BpPTg5OTc4NDQ5JnZlZD0wQ0JBUWpSeHFGd29UQ1BpS19ZdjNqNElERlFBQUFBQWRBQUFBQUJBRSIsImdlbmRlciI6Im1hbGUiLCJza2lsbF9sZXZlbF9zaW5nbGVzIjo0LjUsInNraWxsX2xldmVsX2RvdWJsZXMiOjQuNSwiaXNfYWRtaW4iOmZhbHNlLCJlbWVyZ2VuY3lfY29udGFjdF9mdWxsbmFtZSI6Ik1pY2hhZWwgTWFsb25lIiwiZW1lcmdlbmN5X2NvbnRhY3RfcGhvbmVfbnVtYmVyIjoiNzIwLTg2Ny01MzA5In19.X-KCsKGmXePB9YqBxfKq18v_YC2txzpITfMxo4D9ZEo",
    "token_type": "Bearer",
    "account": {
      "id": 5,
      "username": "Joker15",
      "email": "nicolaj@nuggets.com",
      "birthdate": "1995-12-19",
      "first_name": "Nicola",
      "last_name": "Jokic",
      "phone_number": "303-867-5309",
      "profile_picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNikola_Joki%25C4%2587&psig=AOvVaw2DjSIKPx6Mv4gQulMsuvGZ&ust=1698279714334000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPiK_Yv3j4IDFQAAAAAdAAAAABAE",
      "gender": "male",
      "skill_level_singles": 4.5,
      "skill_level_doubles": 4.5,
      "is_admin": false,
      "emergency_contact_fullname": "Michael Malone",
      "emergency_contact_phone_number": "720-867-5309"
    }
  }
}
```

### GET All Players

- Request:

```http
GET /api/players HTTP/1.1

```

- Response: This will fetch all players in the database.

- Response shape:

```jsonc
{
  "players": [
    {
      "id": 1,
      "username": "me",
      "email": "string",
      "birthdate": "2023-10-23",
      "first_name": "Christopher",
      "last_name": "Bush",
      "phone_number": "503-867-5309",
      "profile_picture": "https://cdn.britannica.com/16/93516-050-3FB4ABE4/Cape-porcupine.jpg",
      "gender": "Male",
      "skill_level_singles": 3.75,
      "skill_level_doubles": 3.5,
      "is_admin": true,
      "emergency_contact_fullname": "Susannah Bush",
      "emergency_contact_phone_number": "406-698-8835"
    },
    {
      "id": 2,
      "username": "Joker1",
      "email": "nicola@nuggets.com",
      "birthdate": "1785-10-25",
      "first_name": "Nicola",
      "last_name": "Jokic",
      "phone_number": "406-867-5309",
      "profile_picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNikola_Joki%25C4%2587&psig=AOvVaw2DjSIKPx6Mv4gQulMsuvGZ&ust=1698279714334000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPiK_Yv3j4IDFQAAAAAdAAAAABAE",
      "gender": "male",
      "skill_level_singles": 2.5,
      "skill_level_doubles": 2.5,
      "is_admin": true,
      "emergency_contact_fullname": "Big Bro",
      "emergency_contact_phone_number": "123-867-5309"
    },
    {
      "id": 3,
      "username": "Joker2",
      "email": "novak@tennis.com",
      "birthdate": "1885-10-25",
      "first_name": "Nicola",
      "last_name": "Djokovic",
      "phone_number": "503-867-5309",
      "profile_picture": "https://www.atptour.com/en/news/www.atptour.com/-/media/images/news/2023/10/18/19/23/djokovic-paris-2023-doubles-entry.jpg",
      "gender": "male",
      "skill_level_singles": 2.5,
      "skill_level_doubles": 2.5,
      "is_admin": true,
      "emergency_contact_fullname": "Kyrgios",
      "emergency_contact_phone_number": "333-867-5309"
    }
  ]
}
```

### GET One Player

- Request:

```http
GET /api/players/{player_id} HTTP/1.1
```

- Response: Details of a single player.

- Response Shape (JSON):

```jsonc
{ 
  "player": {
    "id": 3,
    "username": "Joker2",
    "email": "novak@tennis.com",
    "birthdate": "1885-10-25",
    "first_name": "Nicola",
    "last_name": "Djokovic",
    "phone_number": null,
    "profile_picture": "https://www.atptour.com/en/news/www.atptour.com/-/media/images/news/2023/10/18/19/23/djokovic-paris-2023-doubles-entry.jpg",
    "gender": "male",
    "skill_level_singles": 2.5,
    "skill_level_doubles": 2.5,
    "is_admin": null,
    "emergency_contact_fullname": null,
    "emergency_contact_phone_number": null
  }
}
```

### DELETE Delete Player

- Request:

```http
DELETE /api/players/{player_id} HTTP/1.1
method: DELETE
Headers:
  Authorization: Bearer {token}
```

- Response Shape: (JSON)

```jsonc
{
  "deleted": true
}
```

### PUT Update Player

- Request:

```http
PUT /api/players/{player_id} HTTP/1.1
Headers:
  Authorization: Bearer {token}

{
  "username": "steviewonder",
  "email": "mrwonder@motown.com",
  "birthdate": "1950-05-13",
  "first_name": "Stevland",
  "last_name": "Morris",
  "phone_number": "989-867-5309",
  "profile_picture": "stevie.jpeg",
  "gender": "male",
  "skill_level_singles": 0.5,
  "skill_level_doubles": 0.5,
  "is_admin": true,
  "emergency_contact_fullname": "Berry Gordy",
  "emergency_contact_phone_number": "111-222-3333"
}
```

- Response Shape:

```jsonc
"player": {
  "id": 1,
  "username": "steviewonder",
  "email": "mrwonder@motown.com",
  "birthdate": "1950-05-13",
  "first_name": "Stevland",
  "last_name": "Morris",
  "phone_number": "989-867-5309",
  "profile_picture": "stevie.jpeg",
  "gender": "male",
  "skill_level_singles": 0.5,
  "skill_level_doubles": 0.5,
  "is_admin": true,
  "emergency_contact_fullname": "Berry Gordy",
  "emergency_contact_phone_number": "111-222-3333"
}
```

## Locations

### POST Create Location

- Request:

```http
POST /api/locations/ HTTP/1.1

{
  "name": "Paul's Pickleball Palace",
  "address": "408 Hauser Ave S, Red Lodge, MT, 59068",
  "phone_number": "406-867-5309",
  "description": "Paul's Pickleball Palace has everything you need to host a tournamnet, a pickleball party, or to just come play",
  "number_indoor_courts": 12,
  "number_outdoor_courts": 4,
  "surface": "wood",
  "picture_url": "https://www.usa-shade.com/media/2857/61248_us-open-pickleball-championship-open-air-arena_fl_2016_00-21.jpg?anchor=center&mode=crop&width=360&height=270&rnd=132143363040000000",
  "locker_rooms": false,
  "restrooms": true,
  "water": true,
  "lighted_courts": true,
  "wheelchair_accessible": true
}
```

 - Response Shape (JSON):

 ```jsonc
 "location": {
    "id": 14,
    "name": "Paul's Pickleball Palace",
    "address": "408 Hauser Ave S, Red Lodge, MT, 59068",
      "phone_number": "406-867-5309",
    "description": "Paul's Pickleball Palace has everything you need to host a tournamnet, a pickleball party, or to just come play",
    "number_indoor_courts": 12,
    "number_outdoor_courts": 4,
    "surface": "wood",
    "picture_url": "https://www.usa-shade.com/media/2857/61248_us-open-pickleball-championship-open-air-arena_fl_2016_00-21.jpg?anchor=center&mode=crop&width=360&height=270&rnd=132143363040000000",
    "locker_rooms": false,
   "restrooms": true,
    "water": true,
    "lighted_courts": true,
    "wheelchair_accessible": true
}
```

### GET All Locations

- Request:

```http
GET /api/locations HTTP/1.1
```

- Response: This will fetch all locations in the database.

- Response shape:

```jsonc
{
  "locations": [
    {
      "id": 1,
      "name": "Steve's Palatial Pickleball Resort for Champions",
      "address": "900 State Street, Salem, OR, 97301",
      "phone_number": "503-867-5309",
      "description": "Steve's Palatial Pickleball Resort is your destination for a luxury pickleball location. We have pools and spas and beaches and pickleball courts.",
      "number_indoor_courts": 147920,
      "number_outdoor_courts": 6,
      "surface": "Composite",
      "picture_url": "https://images.unsplash.com/photo-1528930200294-1f4373f99a5a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpY2tsZWJhbGx8ZW58MHx8MHx8fDA%3D",
      "locker_rooms": true,
      "restrooms": true,
      "water": true,
      "lighted_courts": true,
      "wheelchair_accessible": true
    },
    {
      "id": 13,
      "name": "A",
      "address": "5531 Billy Casper Drive Billings, MT 59106",
      "phone_number": "C",
      "description": "D",
      "number_indoor_courts": 3,
      "number_outdoor_courts": 4,
      "surface": "Hot Lava",
      "picture_url": "https://images.huffingtonpost.com/gen/130580/original.jpg",
      "locker_rooms": false,
      "restrooms": true,
      "water": false,
      "lighted_courts": false,
      "wheelchair_accessible": false
    },
    {
      "id": 14,
      "name": "Paul's Pickleball Palace",
      "address": "408 Hauser Ave S, Red Lodge, MT, 59068",
      "phone_number": "406-867-5309",
      "description": "Paul's Pickleball Palace has everything you need to host a tournamnet, a pickleball party, or to just come play",
      "number_indoor_courts": 12,
      "number_outdoor_courts": 4,
      "surface": "wood",
      "picture_url": "https://www.usa-shade.com/media/2857/61248_us-open-pickleball-championship-open-air-arena_fl_2016_00-21.jpg?anchor=center&mode=crop&width=360&height=270&rnd=132143363040000000",
      "locker_rooms": false,
      "restrooms": true,
      "water": true,
      "lighted_courts": true,
      "wheelchair_accessible": true
    }
  ]
}
```

### GET One Location

- Request:

```http
GET /api/locations/{location_id} HTTP/1.1
```

- Response: Details of a single location.

- Response Shape (JSON):

```jsonc
{
  "Location": {
    "id": 14,
    "name": "Paul's Pickleball Palace",
    "address": "408 Hauser Ave S, Red Lodge, MT, 59068",
    "phone_number": "406-867-5309",
    "description": "Paul's Pickleball Palace has everything you need to host a tournamnet, a pickleball party, or to just come play",
    "number_indoor_courts": 12,
    "number_outdoor_courts": 4,
    "surface": "wood",
    "picture_url": "https://www.usa-shade.com/media/2857/61248_us-open-pickleball-championship-open-air-arena_fl_2016_00-21.jpg?anchor=center&mode=crop&width=360&height=270&rnd=132143363040000000",
    "locker_rooms": false,
    "restrooms": true,
    "water": true,
    "lighted_courts": true,
    "wheelchair_accessible": true
  }
}
```

### DELETE location

- Request:

```http
DELETE /api/locations/{location_id} HTTP/1.1
method: DELETE
Headers:
  Authorization: Bearer {token}
```

- Response Shape: (JSON)

```jsonc
{
  "deleted": true
}
```

### PUT Update Location

- Request:

```http
PUT /api/locations/{location_id} HTTP/1.1
Headers:
  Authorization: Bearer {token}

{
  "name": "Peter's Pickleball Palace",
  "address": "408 Hauser Ave S, Red Lodge, MT, 59068",
  "phone_number": "406-867-5309",
  "description": "Peter's Pickleball Palace has everything you need to host a tournamnet, a pickleball party, or to just come play",
  "number_indoor_courts": 12,
  "number_outdoor_courts": 4,
  "surface": "wood",
  "picture_url": "https://www.usa-shade.com/media/2857/61248_us-open-pickleball-championship-open-air-arena_fl_2016_00-21.jpg?anchor=center&mode=crop&width=360&height=270&rnd=132143363040000000",
  "locker_rooms": false,
  "restrooms": true,
  "water": true,
  "lighted_courts": true,
  "wheelchair_accessible": true
} 
```
- Response Shape:
```jsonc
"location": {
  "name": "Peter's Pickleball Palace",
  "address": "408 Hauser Ave S, Red Lodge, MT, 59068",
  "phone_number": "406-867-5309",
  "description": "Peter's Pickleball Palace has everything you need to host a tournamnet, a pickleball party, or to just come play",
  "number_indoor_courts": 12,
  "number_outdoor_courts": 4,
  "surface": "wood",
  "picture_url": "https://www.usa-shade.com/media/2857/61248_us-open-pickleball-championship-open-air-arena_fl_2016_00-21.jpg?anchor=center&mode=crop&width=360&height=270&rnd=132143363040000000",
  "locker_rooms": false,
  "restrooms": true,
  "water": true,
  "lighted_courts": true,
  "wheelchair_accessible": true
}
```

## Tournaments

### POST Create Tournament

- Request:

```http
POST /api/locations/ HTTP/1.1

{
  "name": "Paul Newman Memorial",
  "start_date": "2023-11-27",
  "end_date": "2023-10-31",
  "category": "Mixed Doubles",
  "location_id": 1,
  "description": "Paul Newman was great. Let's memorialize him with some pickleball.",
  "max_teams": 32,
  "reached_max": false
}
```

- Response Shape (JSON):
```jsonc
"tournament": {
  "id": 3,
  "name": "Paul Newman Memorial",
  "start_date": "2023-11-27",
  "end_date": "2023-10-31",
  "category": "Mixed Doubles",
  "location_id": 1,
  "description": "Paul Newman was great. Let's memorialize him with some pickleball.",
  "max_teams": 32,
  "reached_max": false
}
```

### GET All Tournaments

- Request:

```http
GET /api/tournaments HTTP/1.1
```

- Response: This will fetch all tournaments in the database.

- Response shape:
```json c
{
  "tournaments": [
    {
      "id": 3,
      "name": "Paul Newman Memorial",
      "start_date": "2023-11-27",
      "end_date": "2023-10-31",
      "category": "Mixed Doubles",
      "location": {
        "id": 1,
        "name": "Steve's Palatial Pickleball Resort for Champions",
        "address": "900 State Street, Salem, OR, 97301",
        "picture_url": "https://images.unsplash.com/photo-1528930200294-1f4373f99a5a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpY2tsZWJhbGx8ZW58MHx8MHx8fDA%3D"
      },
      "description": "Paul Newman was great. Let's memorialize him with some pickleball.",
      "max_teams": 32,
      "reached_max": false
    },
    {
      "id": 4,
      "name": "Bob's Birthday Bash Pickleball Tournament",
      "start_date": "1848-05-27",
      "end_date": "1848-10-27",
      "category": "Mixed Singles",
      "location": {
        "id": 1,
        "name": "Steve's Palatial Pickleball Resort for Champions",
        "address": "900 State Street, Salem, OR, 97301",
        "picture_url": "https://images.unsplash.com/photo-1528930200294-1f4373f99a5a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpY2tsZWJhbGx8ZW58MHx8MHx8fDA%3D"
      },
      "description": "Bob wants to celebrate his birthday with a pickleball tourney.",
      "max_teams": 128,
      "reached_max": true
    }
  ]
}
```

### GET One Tournament

- Request: 

```http
GET /api/tournaments/{tournament_id} HTTP/1.1
```

- Response: Details of a single tournament.

- Response Shape (JSON):

```jsonc
{
  {
    "id": 4,
    "name": "Bob's Birthday Bash Pickleball Tournament",
    "start_date": "1848-05-27",
    "end_date": "1848-10-27",
    "category": "Mixed Singles",
    "location": {
      "id": 1,
      "name": "Steve's Palatial Pickleball Resort for Champions",
      "address": "900 State Street, Salem, OR, 97301",
      "picture_url": "https://images.unsplash.com/photo-1528930200294-1f4373f99a5a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpY2tsZWJhbGx8ZW58MHx8MHx8fDA%3D"
    },
    "description": "Bob wants to celebrate his birthday with a pickleball tourney.",
    "max_teams": 128,
    "reached_max": true
  }
}
```

### DELETE Delete Tournament

- Request:

```http
DELETE /api/tournaments/{tournament_id} HTTP/1.1
method: DELETE
Headers:
  Authorization: Bearer {token}
```

- Response Shape: (JSON)

```jsonc
{
  "deleted": true
}
```

### PUT Update Tournament

- Request: 

```http
PUT api/locations/{location_id} HTTP/1.1
Headers:
  Authorization: Bearer {token}

{
  "name": "Robert Redford Remembrance",
  "start_date": "2023-11-27",
  "end_date": "2023-10-31",
  "category": "Mixed Doubles",
  "location_id": 1,
  "description": "Robert Redford is great. Let's celebrate him with some pickleball.",
  "max_teams": 32,
  "reached_max": false
}
```
- Response: Updated details of the tournament.

- Response Shape:

```jsonc
"tournament": {
  "name": "Robert Redford Remembrance",
  "start_date": "2023-11-27",
  "end_date": "2023-10-31",
  "category": "Mixed Doubles",
  "location_id": {
      "id": 1,
      "name": "Steve's Palatial Pickleball Resort for Champions",
      "address": "900 State Street, Salem, OR, 97301",
      "picture_url": "https://images.unsplash.com/photo-1528930200294-1f4373f99a5a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpY2tsZWJhbGx8ZW58MHx8MHx8fDA%3D"
    },
  "description": "Robert Redford is great. Let's celebrate him with some pickleball.",
  "max_teams": 32,
  "reached_max": false
}
```

## Teams

### POST Create Team

- Request: 

```http
POST /api/players HTTP/1.1

{
  "category": "Doubles",
  "age_bracket": "Adult",
  "team_name": "Kool Kats",
  "number_of_players": 2,
  "player_id_1": 2,
  "player_id_2": 3,
  "tournament_id": 1
}
```
- Response Shape: (JSON):

```jsonc
{
  "id": 3,
  "category": "Doubles",
  "age_bracket": "Adult",
  "team_name": "Kool Kats",
  "number_of_players": 2,
  "player_id_1": 2,
  "player_id_2": 3,
  "tournament_id": 1
}
```

### GET All teams

- Request: 

```http
GET /api/players HTTP/1.1
```

- Response: This will fetch all teams in the database.

- Response shape:

```jsonc
{
  "teams": [
    {
      "id": 3,
      "category": "Mens",
      "age_bracket": "Adult (19-49)",
      "team_name": "Kool Kats",
      "tournament_id": 3
    },
    {
      "id": 4,
      "category": "Mens",
      "age_bracket": "Adult (19-49)",
      "team_name": "Grand Pickleball Poobahs",
      "tournament_id": 3
    }
  ]
}
```

### GET One Team

- Request:

```http
GET /api/teams/{team_id} HTTP/1.1
```

- Response: Details of a single team.

- Response Shape (JSON):

```jsonc
{
  "team": {
    "id": 3,
    "category": "Mens",
    "age_bracket": "Adult (19-49)",
    "team_name": "Kool Kats",
    "number_of_players": 2,
    "player_id_1": {
      "id": 6,
      "first_name": "Nicola",
      "last_name": "Jokic",
      "birthdate": "1995-05-01",
      "gender": null,
      "skill_level_singles": null,
      "skill_level_doubles": null
    },
    "player_id_2": {
      "id": 3,
      "first_name": "Derek",
      "last_name": "Snediker",
      "birthdate": "1995-03-25",
      "gender": "Male",
      "skill_level_singles": 4,
      "skill_level_doubles": 4
    },
    "tournament_id": {
      "id": 3,
      "name": "Milwaukee Mixed Pickleball Championships"
    }
  }
}
```

### DELETE Delete Team

- Request: 

```http
DELETE /api/teams/{team_id} HTTP/1.1
method: DELETE
Headers:
  Authorization: Bearer {token}
```

- Response Shape: (JSON)

```jsonc
{
  "deleted": true
}
```

### PUT Update Team

- Request:

```http
PUT /api/teams/{team_id} HTTP/1.1
Headers:
  Authorization: Bearer {token}
{
  "category": "Mens",
  "age_bracket": "Adult (19-49)",
  "team_name": "Even Kooler Kats",
  "number_of_players": 2,
  "player_id_1": 2,
  "player_id_2": 1,
  "tournament_id": 1
}
```

- Response: Updated details of the team.

- Response Shape:

```jsonc
"team": {
  "id": 4,
  "category": "Mens",
  "age_bracket": "Adult (19-49)",
  "team_name": "Even Kooler Kats",
  "number_of_players": 2,
  "player_id_1": {
    "id": 1,
    "first_name": "John",
    "last_name": "Gordon",
    "birthdate": "1997-12-25",
    "gender": "Male",
    "skill_level_singles": 5,
    "skill_level_doubles": 5
  },
  "player_id_2": {
    "id": 2,
    "first_name": "Christopher",
    "last_name": "Bush",
    "birthdate": "1987-10-14",
    "gender": "male",
    "skill_level_singles": 2.5,
    "skill_level_doubles": 2.5
  },
  "tournament_id": {
    "id": 3,
    "name": "Milwaukee Mixed Pickleball Championships"
  }
}
```







