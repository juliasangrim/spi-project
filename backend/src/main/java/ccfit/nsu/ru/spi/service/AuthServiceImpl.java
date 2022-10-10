package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.model.dto.request.AuthRequest;
import ccfit.nsu.ru.spi.model.dto.request.RegistrationRequest;
import ccfit.nsu.ru.spi.model.dto.response.SupportInfoResponse;
import ccfit.nsu.ru.spi.model.entity.UserEntity;
import ccfit.nsu.ru.spi.repository.UserRepository;
import ccfit.nsu.ru.spi.security.UserRole;
import com.nimbusds.oauth2.sdk.TokenResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;

    @Override
    public TokenResponse login(AuthRequest request) {
        //TODO to implement
        return null;
    }

    @Override
    public void signup(RegistrationRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("User already exists.");
        }

        UserEntity user = new UserEntity();
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setRoles(List.of(UserRole.CLIENT));

        userRepository.save(user);
    }

    @Override
    public SupportInfoResponse getSupportInfo() {
        //TODO to implement
        return null;
    }

}
