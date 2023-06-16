create table link
(
    id              int auto_increment
        primary key,
    short_link      text       not null,
    long_link       text       not null,
    status          tinyint(1) not null,
    generation_time datetime   not null,
    expiration_time datetime   not null,
    request_times   int        not null
);

INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (1, '0', '0', 0, '2023-05-27 14:23:50', '2023-05-27 14:22:34', 14);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (2, 'cdn', 'https://cdn.antx.cc/', 1, '2023-04-29 15:43:37', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (3, 'api', 'https://api.antx.cc/', 1, '2023-04-29 15:43:51', '2099-12-31 23:59:59', 2);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (4, 'login', 'https://passport.antx.cc/login/', 1, '2023-04-29 15:44:25', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (5, 'register', 'https://passport.antx.cc/register/', 1, '2023-04-29 15:44:55', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (6, 'VVvaIo', 'http://antx.cc', 1, '2023-05-28 14:55:15', '2099-12-31 23:59:59', 2);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (7, 'stPHIm', 'https://hjkhjk.fg', 1, '2023-05-28 14:55:49', '2099-12-31 23:59:59', 1);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (8, 'ay90aJ', 'http://antx.cc', 1, '2023-05-28 14:59:49', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (9, 'QoG5SE', 'http://antx.cc', 1, '2023-05-28 15:00:51', '2099-12-31 23:59:59', 1);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (10, 'foXZ2J', 'https://antx.cc', 1, '2023-05-28 15:01:12', '2099-12-31 23:59:59', 1);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (11, 'tftws5', 'http://antx.cc', 1, '2023-05-28 15:04:52', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (12, 'mcaImn', 'http://antx.cc', 1, '2023-05-28 15:07:55', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (13, 'xr4RsI', 'http://hjkhjk.fg', 1, '2023-05-28 15:09:27', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (14, 'RFrVCj', 'http://antx.cc', 1, '2023-05-28 15:10:34', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (15, 'IUQPYv', 'http://hjkhjk.fg', 1, '2023-05-28 15:10:46', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (16, 'ab5dS8', 'https://antx.cc', 1, '2023-05-28 15:14:44', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (17, '508dnk', 'https://antx.cc', 1, '2023-05-28 15:15:38', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (18, 'JqCQDV', 'https://antx.cc', 1, '2023-05-28 15:20:03', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (19, '6JA2jt', 'https://antx.cc', 1, '2023-05-28 15:22:49', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (20, 'UzSaCA', 'https://url.antx.cc', 1, '2023-05-28 15:23:20', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (21, 'PVQ4cl', 'https://www.antx.cc', 1, '2023-05-28 15:24:01', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (22, 'ob53gq', 'http://antx.cc', 1, '2023-05-28 18:28:36', '2099-12-31 23:59:59', 1);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (23, 'VurmbS', 'http://ugc.c', 1, '2023-05-28 20:21:29', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (24, 'FyGkk5', 'http://antx.cc', 1, '2023-05-28 20:31:20', '2099-12-31 23:59:59', 1);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (25, 'ALS4.j', 'https://5201314.space', 1, '2023-05-30 19:31:24', '2099-12-31 23:59:59', 1);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (26, '8dESrJ', 'https://antx.cc', 1, '2023-05-31 19:03:08', '2099-12-31 23:59:59', 1);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (27, '520', '5201314.space', 1, '2023-06-02 20:48:05', '2099-12-31 23:59:59', 1);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (28, '5201314', '5201314.space', 1, '2023-06-02 20:48:30', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (29, '520zjh', 'https://5201314.space', 1, '2023-06-02 20:49:25', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (30, 'SWyRV.', 'http://antx.cc', 1, '2023-06-03 19:52:02', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (31, 'itMhmY', 'https://antx.cc', 1, '2023-06-03 19:52:11', '2099-12-31 23:59:59', 1);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (32, 'qYd7WI', 'http://antx.cc', 1, '2023-06-03 20:04:19', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (33, '2tIl2W', 'http://antx.cc', 1, '2023-06-03 20:05:26', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (34, 'iUbKbh', 'https://hjkhjk.df/到上方', 1, '2023-06-04 11:24:47', '2099-12-31 23:59:59', 0);
INSERT INTO antx.link (id, short_link, long_link, status, generation_time, expiration_time, request_times) VALUES (35, 'mYmeuU', 'https://antx.cc', 1, '2023-06-11 14:50:44', '2099-12-31 23:59:59', 1);
