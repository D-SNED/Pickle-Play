steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE players (
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(100) NOT NULL UNIQUE,
            hashed_password VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            birthdate DATE NOT NULL,
            first_name VARCHAR(100),
            last_name VARCHAR(100),
            phone_number VARCHAR(100),
            profile_picture VARCHAR(300),
            gender VARCHAR(50),
            skill_level_singles FLOAT,
            skill_level_doubles FLOAT,
            is_admin BOOLEAN,
            emergency_contact_fullname VARCHAR(100),
            emergency_contact_phone_number VARCHAR(100)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE players;
        """,
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE locations (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(100) NOT NULL,
            address VARCHAR(300) NOT NULL,
            phone_number VARCHAR(100) NOT NULL,
            description TEXT NOT NULL,
            number_indoor_courts INT NOT NULL,
            number_outdoor_courts INT NOT NULL,
            surface VARCHAR(100) NOT NULL,
            picture_url VARCHAR(500) NOT NULL,
            locker_rooms BOOLEAN NOT NULL,
            restrooms BOOLEAN NOT NULL,
            water BOOLEAN NOT NULL,
            lighted_courts BOOLEAN NOT NULL,
            wheelchair_accessible BOOLEAN NOT NULL

        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE locations;
        """,
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE tournaments (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(100) NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE NOT NULL,
            category VARCHAR(100) NOT NULL,
            location_id INT NOT NULL,
            description TEXT NOT NULL,
            max_teams INT NOT NULL,
            reached_max BOOLEAN NOT NULL,
            FOREIGN KEY (location_id) REFERENCES locations(id) ON DELETE CASCADE

        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE tournaments;
        """,
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE teams (
            id SERIAL PRIMARY KEY NOT NULL,
            category VARCHAR(100) NOT NULL,
            age_bracket VARCHAR(100) NOT NULL,
            team_name VARCHAR(100) NOT NULL,
            number_of_players INT NOT NULL,
            player_id_1 INT NOT NULL,
            player_id_2 INT,
            tournament_id BIGINT,
            FOREIGN KEY (player_id_1) REFERENCES players(id) ON DELETE CASCADE,
            FOREIGN KEY (player_id_2) REFERENCES players(id) ON DELETE CASCADE,
            FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE teams;
        """,
    ],
]
