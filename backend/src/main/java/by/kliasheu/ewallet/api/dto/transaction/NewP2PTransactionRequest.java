package by.kliasheu.ewallet.api.dto.transaction;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class NewP2PTransactionRequest {
    long walletIdFrom;
    long walletIdTo;
    BigDecimal amount;
}
