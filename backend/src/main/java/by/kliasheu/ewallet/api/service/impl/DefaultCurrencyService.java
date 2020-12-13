package by.kliasheu.ewallet.api.service.impl;

import by.kliasheu.ewallet.api.dao.CurrencyRepository;
import by.kliasheu.ewallet.api.model.Currency;
import by.kliasheu.ewallet.api.service.CurrencyService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class DefaultCurrencyService implements CurrencyService {

    CurrencyRepository currencyRepository;

    @Override
    public Set<String> findAll() {
        return currencyRepository.findAll().stream()
                .map(Currency::getSymbols)
                .collect(Collectors.toSet());
    }
}
