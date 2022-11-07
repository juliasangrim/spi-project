package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.exception.NotFoundException;
import ccfit.nsu.ru.spi.model.entity.users.UserEntity;
import ccfit.nsu.ru.spi.repository.UserRepository;
import ccfit.nsu.ru.spi.security.UserRole;
import ccfit.nsu.ru.spi.service.users.CustomUserDetailsService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class CustomUserDetailsServiceTest {
    @Mock
    UserRepository userRepository;

    CustomUserDetailsService customUserDetailsService;

    @Test
    public void loadUserByUsernameSuccessTest() {
        final String userEmail = "user@right_test.com";
        final String userPassword = "password";
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(userEmail);
        userEntity.setPassword(userPassword);
        userEntity.setRoles(List.of(UserRole.CLIENT));

        Mockito.when(userRepository.findByEmail(userEmail)).thenReturn(Optional.of(userEntity));
        customUserDetailsService = new CustomUserDetailsService(userRepository);
        Assertions.assertEquals(userEntity, customUserDetailsService.loadUserByUsername(userEmail));
    }

    @Test
    public void loadUserByUsernameFailureTest() {
        final String userEmail = "user@failure_test.com";
        Mockito.when(userRepository.findByEmail(userEmail)).thenThrow(NotFoundException.class);
        customUserDetailsService = new CustomUserDetailsService(userRepository);
        Assertions.assertThrows(NotFoundException.class, () -> customUserDetailsService.loadUserByUsername(userEmail));
    }
}
