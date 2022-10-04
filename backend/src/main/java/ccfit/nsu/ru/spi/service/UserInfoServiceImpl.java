package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.model.dto.response.UserInfoResponse;
import ccfit.nsu.ru.spi.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserInfoServiceImpl implements UserInfoService {

    private final UserRepository userRepository;

    @Override
    public UserInfoResponse getUser(UsernamePasswordAuthenticationToken token) {
        //TODO to implement
        return null;
    }

}