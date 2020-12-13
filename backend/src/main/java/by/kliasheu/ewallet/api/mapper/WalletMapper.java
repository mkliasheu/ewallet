package by.kliasheu.ewallet.api.mapper;

import by.kliasheu.ewallet.api.dto.wallet.NewWalletRequest;
import by.kliasheu.ewallet.api.dto.wallet.WalletDto;
import by.kliasheu.ewallet.api.model.Wallet;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface WalletMapper {

    @Mapping(target = "currency", source = "currency.symbols")
    WalletDto toDto(Wallet wallet);

    @Mapping(target = "currency", ignore = true)
    @Mapping(target = "id", ignore = true)
    Wallet toEntity(WalletDto walletDto);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "balance", ignore = true)
    @Mapping(target = "currency", ignore = true)
    Wallet toEntity(NewWalletRequest newWalletRequest);
}
