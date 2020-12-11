package by.kliasheu.ewallet.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class EwalletApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(EwalletApiApplication.class, args);
    }

}
