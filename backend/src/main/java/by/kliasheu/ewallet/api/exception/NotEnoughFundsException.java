package by.kliasheu.ewallet.api.exception;

public class NotEnoughFundsException extends RuntimeException {
    public NotEnoughFundsException(String message) {
        super(message);
    }

    public NotEnoughFundsException(String message, Throwable cause) {
        super(message, cause);
    }
}
