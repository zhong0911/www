create table info
(
    uid            int  not null,
    ranking        int auto_increment
        primary key,
    username       text not null,
    avatar         text null,
    signature      text null,
    nickname       text null,
    gender         text null,
    birthday       date null,
    job            text null,
    primary_school text null,
    middle_school  text null,
    university     text null,
    company        text null,
    location       text null,
    hometown       text null,
    email          text null
);

INSERT INTO antx.info (uid, ranking, username, avatar, signature, nickname, gender, birthday, job, primary_school, middle_school, university, company, location, hometown, email) VALUES (10000, 1, 'zhong', '1', 'Without personality, no signature', 'Adisaint', 'M', '2009-09-01', 'Develop', 'Quannan County Second Primary School', 'Quannan County Second Middle School', 'null', 'antx', 'china', 'china', 'zhong@antx.cc');
