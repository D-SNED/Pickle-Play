steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE players (
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            first_name VARCHAR(100),
            last_name VARCHAR(100),
            phone_number VARCHAR(100),
            profile_picture VARCHAR(300),
            birthdate DATE NOT NULL,
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
        """
    ],
]
