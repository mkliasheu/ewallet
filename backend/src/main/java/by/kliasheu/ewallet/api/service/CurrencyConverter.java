package by.kliasheu.ewallet.api.service;

import by.kliasheu.ewallet.api.model.Currency;

import java.math.BigDecimal;

public interface CurrencyConverter {
    BigDecimal getConversionRate(Currency from, Currency to);

    default BigDecimal convert(Currency from, Currency to, BigDecimal amountFrom) {
        return amountFrom.multiply(getConversionRate(from, to));
    }
}
