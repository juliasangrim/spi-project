package ccfit.nsu.ru.spi.service.users;

import ccfit.nsu.ru.spi.exception.NotFoundException;
import ccfit.nsu.ru.spi.mapper.users.UserMapper;
import ccfit.nsu.ru.spi.model.dto.response.UserInfoResponse;
import ccfit.nsu.ru.spi.model.entity.users.UserEntity;
import ccfit.nsu.ru.spi.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserInfoServiceImpl implements UserInfoService {

    private final UserRepository userRepository;

    private final UserMapper userMapper;

    @Override
    public UserInfoResponse getUser(UsernamePasswordAuthenticationToken token) {
        UserEntity userEntity = userRepository.findByEmail(token.getName())
            .orElseThrow(NotFoundException::new);
        return userMapper.map(userEntity);
    }

}