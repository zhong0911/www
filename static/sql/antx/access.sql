create table access
(
    id                int auto_increment
        primary key,
    access_key_id     text       null,
    access_key_secret text       null,
    purpose           text       null,
    status            tinyint(1) null
);

INSERT INTO antx.access (id, access_key_id, access_key_secret, purpose, status) VALUES (1, 'sF7bX7gL5lO6gS6u', 'uY9uQ0gI0zQ0jL3hP7dL', 'all', 1);
