package by.kliasheu.ewallet.api.service.impl;

import by.kliasheu.ewallet.api.dao.CurrencyRepository;
import by.kliasheu.ewallet.api.dao.WalletRepository;
import by.kliasheu.ewallet.api.dto.wallet.NewWalletRequest;
import by.kliasheu.ewallet.api.dto.wallet.UpdateWalletRequest;
import by.kliasheu.ewallet.api.dto.wallet.WalletDto;
import by.kliasheu.ewallet.api.mapper.WalletMapper;
import by.kliasheu.ewallet.api.model.Currency;
import by.kliasheu.ewallet.api.model.Wallet;
import by.kliasheu.ewallet.api.service.WalletService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class DefaultWalletService implements WalletService {

    WalletRepository walletRepository;
    WalletMapper walletMapper;
    CurrencyRepository currencyRepository;

    @Override
    public List<WalletDto> findAll() {
        return walletRepository.findAll(Sort.by("id").ascending()).stream()
                .map(walletMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public WalletDto findById(long walletId) {
        return walletMapper.toDto(walletRepository.findById(walletId)
                .orElseThrow(EntityNotFoundException::new));
    }

    @Override
    public WalletDto create(NewWalletRequest newWalletRequest) {
        final Currency currency = currencyRepository.findById(newWalletRequest.getCurrency())
                .orElseThrow(() -> new EntityNotFoundException("Currency " + newWalletRequest.getCurrency() + " not supported"));
        final Wallet wallet = walletMapper.toEntity(newWalletRequest)
                .setBalance(BigDecimal.ZERO)
                .setCurrency(currency);
        return walletMapper.toDto(walletRepository.save(wallet));
    }

    @Override
    public WalletDto update(UpdateWalletRequest updateWalletRequest, long walletId) {
        final Wallet updatedWallet = walletRepository.findById(walletId)
                .map(wallet -> {
                    wallet.setName(updateWalletRequest.getName());
                    return walletRepository.save(wallet);
                })
                .orElseThrow(EntityNotFoundException::new);
        return walletMapper.toDto(updatedWallet);
    }

    @Override
    public Wallet findForUpdate(long walletId) {
        return walletRepository.findForUpdateById(walletId)
                .orElseThrow(() -> new EntityNotFoundException("Wallet with id " + walletId + " does not exists"));
    }

    @Override
    public WalletDto update(Wallet wallet) {
        return walletMapper.toDto(walletRepository.save(wallet));
    }
}
