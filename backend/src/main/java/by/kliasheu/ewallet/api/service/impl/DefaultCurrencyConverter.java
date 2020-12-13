package by.kliasheu.ewallet.api.service.impl;

import by.kliasheu.ewallet.api.client.ExchangeRatesApiClient;
import by.kliasheu.ewallet.api.model.Currency;
import by.kliasheu.ewallet.api.service.CurrencyConverter;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class DefaultCurrencyConverter implements CurrencyConverter {

    ExchangeRatesApiClient exchangeRatesApiClient;

    @Override
    public BigDecimal getConversionRate(Currency from, Currency to) {
        return exchangeRatesApiClient.getConversionRate(from.getSymbols(), to.getSymbols())
                .getRates()
                .get(to.getSymbols());
    }
}
