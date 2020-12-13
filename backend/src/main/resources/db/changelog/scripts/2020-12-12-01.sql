CREATE TABLE currency
(
    symbols VARCHAR PRIMARY KEY
);

CREATE UNIQUE INDEX currency_symbols
    ON currency (symbols);

INSERT INTO currency VALUES ('USD'), ('EUR'), ('GBP');

CREATE TABLE wallet
(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR,
    balance NUMERIC,
    currency VARCHAR REFERENCES currency(symbols)
);

CREATE TABLE transaction
(
    id              BIGSERIAL PRIMARY KEY,
    wallet_id       BIGINT REFERENCES wallet(id),
    amount          NUMERIC,
    type            VARCHAR
);