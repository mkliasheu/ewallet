package by.kliasheu.ewallet.api;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@Testcontainers
class EwalletApiApplicationTests {

    @Container
    private final PostgreSQLContainer<?> POSTGRESQL_CONTAINER =
            new PostgreSQLContainer<>("postgres:11")
                    .withPassword("test")
                    .withUsername("test")
                    .withDatabaseName("test");

    @Test
    void contextLoads() {
    }

    @Test
    void test() {
        assertTrue(POSTGRESQL_CONTAINER.isRunning());
        assertTrue(POSTGRESQL_CONTAINER.isRunning());
    }

}
