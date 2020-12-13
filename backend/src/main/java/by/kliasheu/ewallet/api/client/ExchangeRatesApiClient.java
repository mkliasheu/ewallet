package by.kliasheu.ewallet.api.client;

import by.kliasheu.ewallet.api.client.model.GetConversionRateResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "exchangeRatesApiClient", url = "https://api.exchangeratesapi.io/")
public interface ExchangeRatesApiClient {

    @GetMapping(value = "/latest")
    GetConversionRateResponse getConversionRate(@RequestParam(value = "base") String currencyFrom, @RequestParam(value = "symbols") String currencyTo);
}
