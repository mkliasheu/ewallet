CREATE TABLE IF NOT EXISTS users
(
    id BIGSERIAL NOT NULL,
    username VARCHAR,
    password VARCHAR,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
