# Data Models

## Players

| Field                         | Type     | Unique | Optional |
| -----------                   | -------- | ------ | -------- |
| id                            | integer  | yes    | no       |
| username                      | varchar  | yes    | no       |
| hashed_password               | varchar  | yes    | no       |
| email                         | varchar  | yes    | no       |
| birthdate                     | date     | no     | no       |
| first_name                    | varchar  | no     | yes      |
| last_name                     | varchar  | no     | yes      |
| phone_number                  | varchar  | no     | yes      |
| profile_picture               | varchar  | no     | yes      |
| gender                        | varchar  | no     | yes      |
| skill_level_singles           | float    | no     | yes      |
| skill_level_doubles           | float    | no     | yes      |
| is_admin                      | boolean  | no     | yes      |
| emergency_contact_fullname    | varchar  | no     | yes      |
| emergency_contact_phone_number| varchar  | no     | yes      |

The `Players` table represents user players.

## Locations

| Field                         | Type     | Unique | Optional |
| -----------                   | -------- | ------ | -------- |
| id                            | integer  | yes    | no       |
| name                          | varchar  | no     | no       |
| address                       | varchar  | no     | no       |
| phone_number                  | varchar  | no     | no       |
| description                   | text     | no     | no       |
| number_indoor_courts          | integer  | no     | no       |
| number_outdoor_courts         | integer  | no     | no       |
| surface                       | varchar  | no     | no       |
| picture_url                   | varchar  | no     | no       |
| locker_rooms                  | boolean  | no     | no       |
| restrooms                     | boolean  | no     | no       |
| water                         | boolean  | no     | no       |
| lighted_courts                | boolean  | no     | no       |
| wheelchair_accessible         | boolean  | no     | no       |

The `Locations` table represents locations where players can play Pickleball, or where tournaments are being held.

## Tournaments

| Field                         | Type     | Unique | Optional |
| -----------                   | -------- | ------ | -------- |
| id                            | integer  | yes    | no       |
| name                          | varchar  | no     | no       |
| start_date                    | date     | no     | no       |
| end_date                      | date     | no     | no       |
| category                      | varchar  | no     | no       |
| location_id                   | integer  | no     | no       |
| description                   | text     | no     | no       |
| max_teams                     | integer  | no     | no       |
| reached_max                   | boolean  | no     | no       |

The `Tournaments` table represents tournaments that teams can sign up for.

## Teams

| Field                         | Type     | Unique | Optional |
| -----------                   | -------- | ------ | -------- |
| id                            | integer  | yes    | no       |
| category                      | varchar  | no     | no       |
| age_bracket                   | varchar  | no     | no       |
| team_name                     | varchar  | no     | no       |
| number_of_players             | integer  | no     | no       |
| player_id_1                   | integer  | no     | no       |
| player_id_2                   | integer  | no     | yes      |
| tournament_id                 | integer  | no     | yes      |

The `Teams` table represents teams that players can create to then sign up for tournaments.
