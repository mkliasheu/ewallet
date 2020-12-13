package by.kliasheu.ewallet.api.dto.wallet;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class NewWalletRequest {
    String name;
    String currency;
}
