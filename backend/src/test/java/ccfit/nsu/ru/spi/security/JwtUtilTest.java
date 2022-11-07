package ccfit.nsu.ru.spi.security;

import ccfit.nsu.ru.spi.model.entity.users.UserEntity;
import ccfit.nsu.ru.spi.security.jwt.JwtTokenUtil;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Date;

@RunWith(MockitoJUnitRunner.class)
public class JwtUtilTest {

    private final JwtTokenUtil uut = new JwtTokenUtil("secret", 3L * 24 * 60 * 60 * 60 * 1000);
    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @Test
    public void generationAndValidationTokenTest() {
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail("mail@test.ru");
        userEntity.setPassword(bCryptPasswordEncoder.encode("password"));

        var token = uut.generateToken(userEntity);
        var validationResult = uut.validateToken(token);

        Assertions.assertTrue(validationResult);
        Assertions.assertEquals(uut.getUsernameFromToken(token), userEntity.getUsername());
        Assertions.assertTrue(
                uut.getExpirationDateFromToken(token).compareTo(new Date(System.currentTimeMillis())) > 0);
    }

}
