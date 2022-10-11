package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.exception.NotFoundException;
import ccfit.nsu.ru.spi.model.dto.request.AuthRequest;
import ccfit.nsu.ru.spi.model.entity.UserEntity;
import ccfit.nsu.ru.spi.repository.UserRepository;
import ccfit.nsu.ru.spi.security.JwtTokenUtil;
import ccfit.nsu.ru.spi.security.UserRole;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.User;

import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class AuthServiceImplTest {

    @Mock
    AuthenticationManager authenticationManager;
    @Mock
    UserRepository userRepository;
    @Mock
    JwtTokenUtil jwtTokenUtil;
    @InjectMocks
    AuthServiceImpl authService;

    @Test
    public void rightDataLoginTest() {
        final String userEmail = "user@test.com";
        final String userPassword = "password";
        final String token = "test_token";
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(userEmail);
        userEntity.setPassword(userPassword);
        userEntity.setRoles(List.of(UserRole.CLIENT));
        User user = new User(userEmail, userPassword, userEntity.getAuthorities());
        Mockito.when(userRepository.findByEmail(userEmail)).thenReturn(Optional.of(user));
        Mockito.when(jwtTokenUtil.generateToken(user)).thenReturn(token);
        String testedToken = authService.login(new AuthRequest(userEmail, userPassword)).getToken();
        Assertions.assertEquals(token, testedToken);
    }

    @Test
    public void failedDataLoginTest() {
        final String userEmail = "user@test.com";
        final String userPassword = "password";
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(userEmail);
        userEntity.setPassword(userPassword);
        userEntity.setRoles(List.of(UserRole.CLIENT));
        Mockito.when(userRepository.findByEmail(userEmail)).thenThrow(NotFoundException.class);
        Assertions.assertThrows(NotFoundException.class, () -> authService.login(new AuthRequest(userEmail, userPassword)));
    }
}
