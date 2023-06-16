create table account
(
    uid      int  not null
        primary key,
    username text not null,
    password text not null,
    email    text not null,
    phone    text null
);

INSERT INTO antx.account (uid, username, password, email, phone) VALUES (10000, 'zhong', '30b056a1f3e831ff3824a199bfa20d7ce2bb64f4ee2ce424f4e85bea1f069653489eeac668dd9867e71094e84af6f55c9ac5f6c885f2d8958cd2d83718564172', 'zhong@antx.cc', '18779737112');
INSERT INTO antx.account (uid, username, password, email, phone) VALUES (8426611, 'djdjd', '30b056a1f3e831ff3824a199bfa20d7ce2bb64f4ee2ce424f4e85bea1f069653489eeac668dd9867e71094e84af6f55c9ac5f6c885f2d8958cd2d83718564172', '257966051@qq.com', '');
