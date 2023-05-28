create table status
(
    uid      int                  not null
        primary key,
    username text                 not null,
    status   tinyint(1) default 1 null,
    reason   text                 null,
    ip_1     text                 null,
    ip_2     text                 null,
    ip_3     text                 null,
    ip_4     text                 null,
    ip_5     text                 null,
    ip_6     text                 null,
    ip_7     text                 null,
    ip_8     text                 null,
    ip_9     text                 null,
    ip_10    text                 null
);

INSERT INTO antx.status (uid, username, status, reason, ip_1, ip_2, ip_3, ip_4, ip_5, ip_6, ip_7, ip_8, ip_9, ip_10) VALUES (10000, 'zhong', 1, null, null, null, null, null, null, null, null, null, null, null);
