CREATE TABLE GameSessions (
	GameSessionId INTEGER,
	Game varchar(255),
    Name varchar(255),
    Size INTEGER,
	Time DateTime,
    Summary varchar(255),
	PRIMARY KEY (GameSessionId)
);

INSERT INTO GameSessions VALUES
(1,'Mario Sunshine','luigi55',2,'2008-11-11','Test'),
(2,'League of Legends','MikeEagle',5,'2008-11-11','Gold rank or higher only'),
(3,'Mario Sunshine','luigi55',3,'2008-11-11','late night casuals')

ALTER TABLE GameSessions
	ADD Region varchar(255);

UPDATE GameSessions
SET Region = 'NA'
WHERE GameSessionId = 1;

UPDATE GameSessions
SET Region = 'EU'
WHERE GameSessionId = 2;

UPDATE GameSessions
SET Region = 'Asia'
WHERE GameSessionId = 3;