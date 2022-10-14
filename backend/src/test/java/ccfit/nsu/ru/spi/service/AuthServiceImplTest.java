package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.exception.NotFoundException;
import ccfit.nsu.ru.spi.model.dto.request.AuthRequest;
import ccfit.nsu.ru.spi.repository.UserRepository;
import ccfit.nsu.ru.spi.security.JwtTokenUtil;
import ccfit.nsu.ru.spi.model.dto.request.RegistrationRequest;
import ccfit.nsu.ru.spi.model.entity.UserEntity;
import ccfit.nsu.ru.spi.security.UserRole;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;

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

    @Mock
    PasswordEncoder passwordEncoder;

    @InjectMocks
    AuthServiceImpl authService;

    @Test
    void signup_new_user() {
        ArgumentCaptor<UserEntity> argumentCaptor = ArgumentCaptor.forClass(UserEntity.class);
        final String userEmail = "user@gmail.com";
        final String userPassword = "password";
        final String passwordHash = "123";
        var newUserRoles = List.of(UserRole.CLIENT);
        RegistrationRequest request = new RegistrationRequest();
        request.setEmail(userEmail);
        request.setPassword(userPassword);
        UserEntity savedUser = new UserEntity();
        savedUser.setEmail(userEmail);
        savedUser.setPassword(passwordHash);
        savedUser.setRoles(newUserRoles);
        Mockito.when(userRepository.existsByEmail(userEmail)).thenReturn(false);
        Mockito.when(passwordEncoder.encode(userPassword)).thenReturn(passwordHash);

        authService.signup(request);
        Mockito.verify(userRepository).save(argumentCaptor.capture());

        Assertions.assertEquals(userEmail, argumentCaptor.getValue().getEmail());
        Assertions.assertEquals(passwordHash, argumentCaptor.getValue().getPassword());
        Assertions.assertEquals(newUserRoles, argumentCaptor.getValue().getRoles());
    }

    @Test
    void signup_existed_user() {
        final String existedEmail = "user@gmail.com";
        RegistrationRequest existedUserRegistrationRequest = new RegistrationRequest();
        existedUserRegistrationRequest.setEmail(existedEmail);
        Mockito.when(userRepository.existsByEmail(existedEmail)).thenReturn(true);

        Assertions.assertThrows(IllegalArgumentException.class, () -> authService.signup(existedUserRegistrationRequest), "User already exists.");
    }

    @Test
    public void rightDataLoginTest() {
        final String userEmail = "user@test.com";
        final String userPassword = "password";
        final String token = "test_token";
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(userEmail);
        userEntity.setPassword(userPassword);
        userEntity.setRoles(List.of(UserRole.CLIENT));
        Mockito.when(userRepository.findByEmail(userEmail)).thenReturn(Optional.of(userEntity));
        Mockito.when(jwtTokenUtil.generateToken(userEntity)).thenReturn(token);
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