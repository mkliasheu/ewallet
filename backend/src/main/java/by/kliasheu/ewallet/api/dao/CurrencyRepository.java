package by.kliasheu.ewallet.api.dao;

import by.kliasheu.ewallet.api.model.Currency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrencyRepository extends JpaRepository<Currency, String> {
}
