package by.kliasheu.ewallet.api.controller;

import by.kliasheu.ewallet.api.dto.wallet.NewWalletRequest;
import by.kliasheu.ewallet.api.dto.wallet.UpdateWalletRequest;
import by.kliasheu.ewallet.api.dto.wallet.WalletDto;
import by.kliasheu.ewallet.api.service.WalletService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class WalletController {

    WalletService walletService;

    @GetMapping("/wallets")
    public ResponseEntity<List<WalletDto>> findAll() {
        return ResponseEntity.ok(walletService.findAll());
    }

    @GetMapping("/wallets/{id}")
    public ResponseEntity<WalletDto> findById(@PathVariable long id) {
        return ResponseEntity.ok(walletService.findById(id));
    }

    @PostMapping("/wallets")
    public ResponseEntity<WalletDto> create(@RequestBody NewWalletRequest newWalletRequest) {
        return ResponseEntity.ok(walletService.create(newWalletRequest));
    }

    @PatchMapping("/wallets/{id}")
    public ResponseEntity<WalletDto> update(@RequestBody UpdateWalletRequest updateWalletRequest, @PathVariable long id) {
        return ResponseEntity.ok(walletService.update(updateWalletRequest, id));
    }
}
