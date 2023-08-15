CREATE DATABASE to_dotasklist;


CREATE TABLE tasklist (
    "id" SERIAL PRIMARY KEY,
    "title" varchar(255),
    "start_date" date,
    "start_time" time,
    "due_date" date,
    "due_time" time,
    "repeatTask" varchar(64) ARRAY, 
    "notes" text,
    "url" text,
    "priority" integer,
    "list" integer,
    "icon" varchar(64)
)

CREATE TABLE lists (
    "id" SERIAL PRIMARY KEY,
    "title" varchar(255),
    "taskKeys" integer ARRAY
)


INSERT INTO tasklist (title, start_date, start_time, due_date, 
            due_time, "repeatTask", notes, url, priority, list, icon)
VALUES ('Buy more Candy', '20230814', '14:30:00-8:00', '20230814', 
        '16:45:00-8:00', '{M, T, W, Th, F}', 'LIST::Red licorice:Caramels:Jelly Beans',
        'www.moreCandy.com', '1', '1', '::heart::'
        )
VALUES ('Burn down the patriarchy', '20230814', '09:00:00-8:00','20240901',
        '16:00:00-8:00', '{M, T, W, Th, F, Sa, Su}', 'Use gasoline',
        'www.feminist.com', '1', '1', '::heart::'
        )

INSERT INTO lists (title, "taskKeys")
VALUES ('Candy List', '{1}')