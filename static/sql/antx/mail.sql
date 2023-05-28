create table mail
(
    id       int auto_increment
        primary key,
    email    text    not null,
    password text    not null,
    server   text    not null,
    port     int     null,
    status   tinyint not null
);

INSERT INTO antx.mail (id, email, password, server, port, status) VALUES (1, 'passport@antx.cc', 'zhong0911AntxMail', 'smtp.antx.cc', 25, 1);
INSERT INTO antx.mail (id, email, password, server, port, status) VALUES (2, 'adisaint@163.com', 'ZETWBSBHCWTOHBMC', 'smtp.163.com', 465, 1);
INSERT INTO antx.mail (id, email, password, server, port, status) VALUES (3, 'adisaint@qq.com', 'nwfheoidgkihbhjf', 'smtp.qq.com', 465, 1);
INSERT INTO antx.mail (id, email, password, server, port, status) VALUES (4, 'antxcc@163.com', 'XRBYGAZWRCMCAOMQ', 'smtp.163.com', 465, 1);
