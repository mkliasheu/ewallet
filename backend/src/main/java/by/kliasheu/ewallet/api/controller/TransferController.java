package by.kliasheu.ewallet.api.controller;


import by.kliasheu.ewallet.api.dto.NewP2PTransactionRequest;
import by.kliasheu.ewallet.api.dto.NewTransactionRequest;
import by.kliasheu.ewallet.api.dto.TransactionDto;
import by.kliasheu.ewallet.api.service.TransferGateway;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.data.util.Pair;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TransferController {

    TransferGateway transferGateway;

    @GetMapping("/transfers")
    public ResponseEntity<List<TransactionDto>> findAll() {
        return ResponseEntity.ok(transferGateway.findAll());
    }

    @PostMapping("/transfers/withdrawal")
    public ResponseEntity<TransactionDto> withdraw(NewTransactionRequest newTransactionRequest) {
        return ResponseEntity.ok(transferGateway.withdraw(newTransactionRequest));
    }

    @PostMapping("/transfers/deposit")
    public ResponseEntity<TransactionDto> deposit(NewTransactionRequest newTransactionRequest) {
        return ResponseEntity.ok(transferGateway.deposit(newTransactionRequest));
    }

    @PostMapping("/transfers/p2p")
    public ResponseEntity<Pair<TransactionDto, TransactionDto>> p2p(NewP2PTransactionRequest newP2PTransactionRequest) {
        return ResponseEntity.ok(transferGateway.transfer(newP2PTransactionRequest));
    }

}
