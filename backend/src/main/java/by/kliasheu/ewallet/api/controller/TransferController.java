package by.kliasheu.ewallet.api.controller;


import by.kliasheu.ewallet.api.dto.transaction.NewP2PTransactionRequest;
import by.kliasheu.ewallet.api.dto.transaction.NewTransactionRequest;
import by.kliasheu.ewallet.api.dto.transaction.TransactionDto;
import by.kliasheu.ewallet.api.service.TransferGateway;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.data.util.Pair;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TransferController {

    TransferGateway transferGateway;

    @GetMapping("/transfers")
    public ResponseEntity<List<TransactionDto>> findByWalletId(@RequestParam(required = false) Integer walletId) {
        return ResponseEntity.ok(transferGateway.findByWalletId(walletId));
    }

    @PostMapping("/transfers/withdrawal")
    public ResponseEntity<TransactionDto> withdraw(@RequestBody NewTransactionRequest newTransactionRequest) {
        return ResponseEntity.ok(transferGateway.withdraw(newTransactionRequest));
    }

    @PostMapping("/transfers/deposit")
    public ResponseEntity<TransactionDto> deposit(@RequestBody NewTransactionRequest newTransactionRequest) {
        return ResponseEntity.ok(transferGateway.deposit(newTransactionRequest));
    }

    @PostMapping("/transfers/p2p")
    public ResponseEntity<Pair<TransactionDto, TransactionDto>> p2p(@RequestBody NewP2PTransactionRequest newP2PTransactionRequest) {
        return ResponseEntity.ok(transferGateway.transfer(newP2PTransactionRequest));
    }

}
