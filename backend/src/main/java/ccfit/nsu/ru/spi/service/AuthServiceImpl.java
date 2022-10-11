package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.exception.NotFoundException;
import ccfit.nsu.ru.spi.model.dto.request.AuthRequest;
import ccfit.nsu.ru.spi.model.dto.request.RegistrationRequest;
import ccfit.nsu.ru.spi.model.dto.response.SupportInfoResponse;
import ccfit.nsu.ru.spi.model.dto.response.TokenResponse;
import ccfit.nsu.ru.spi.repository.UserRepository;
import ccfit.nsu.ru.spi.security.JwtTokenUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User;


@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;

    private final UserRepository userRepository;
    private final JwtTokenUtil jwtTokenUtil;


    @Override
    public TokenResponse login(AuthRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new NotFoundException("User doesn't exists"));
        String token = jwtTokenUtil.generateToken(user);
        return new TokenResponse(token);
    }

    @Override
    public void signup(RegistrationRequest request) {
        //TODO to implement
    }

    @Override
    public SupportInfoResponse getSupportInfo() {
        //TODO to implement
        return null;
    }

}
