package by.kliasheu.ewallet.api.dto.wallet;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class WalletDto {
    long id;
    String name;
    BigDecimal balance;
    String currency;
}
