package ccfit.nsu.ru.spi.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import ccfit.nsu.ru.spi.exception.NotFoundException;
import ccfit.nsu.ru.spi.mapper.UserMapper;
import ccfit.nsu.ru.spi.model.dto.response.UserInfoResponse;
import ccfit.nsu.ru.spi.model.entity.UserEntity;
import ccfit.nsu.ru.spi.repository.UserRepository;
import ccfit.nsu.ru.spi.security.UserRole;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

@ExtendWith(MockitoExtension.class)
class UserInfoServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private UserMapper userMapper;

    @InjectMocks
    private UserInfoServiceImpl userInfoService;

    @Test
    void getUser() {
        String email = "test@test.com";

        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(email);
        userEntity.setId(1000L);
        userEntity.setRoles(List.of(UserRole.CLIENT));

        when(userRepository.findByEmail(email)).thenReturn(Optional.of(userEntity));

        UserInfoResponse userInfoResponse = new UserInfoResponse();
        userInfoResponse.setEmail(userEntity.getEmail());
        userInfoResponse.setRoles(userEntity.getRoles());
        when(userMapper.map(userEntity)).thenReturn(userInfoResponse);

        UserInfoResponse result = userInfoService
            .getUser(new UsernamePasswordAuthenticationToken(email, "1234"));

        assertEquals(userEntity.getEmail(), result.getEmail());
        assertEquals(userEntity.getRoles(), result.getRoles());
    }

    @Test
    void getUser_userNotFound_throwException() {
        String email = "test@test.com";

        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());
        var token = new UsernamePasswordAuthenticationToken(email, "1234");

        assertThrows(NotFoundException.class, () -> userInfoService.getUser(token));
    }

}