package by.kliasheu.ewallet.api.controller;

import by.kliasheu.ewallet.api.service.CurrencyService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class CurrencyController {

    CurrencyService currencyService;

    @GetMapping("/currencies")
    public ResponseEntity<Set<String>> findAll() {
        return ResponseEntity.ok(currencyService.findAll());
    }

}
