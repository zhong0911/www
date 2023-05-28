create table privacy
(
    uid            int                  not null
        primary key,
    username       text                 not null,
    gender         tinyint(1) default 1 null,
    birthday       tinyint(1) default 1 null,
    job            tinyint(1) default 1 null,
    primary_school tinyint(1) default 1 null,
    middle_school  tinyint(1) default 1 null,
    university     tinyint(1) default 1 null,
    company        tinyint(1) default 1 null,
    location       tinyint(1) default 1 null,
    hometown       tinyint(1) default 1 null,
    email          tinyint(1) default 1 null,
    phone          tinyint(1) default 1 null
);

INSERT INTO antx.privacy (uid, username, gender, birthday, job, primary_school, middle_school, university, company, location, hometown, email, phone) VALUES (10000, 'zhong', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
