package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.model.dto.request.AuthRequest;
import ccfit.nsu.ru.spi.model.dto.request.RegistrationRequest;
import ccfit.nsu.ru.spi.model.dto.response.SupportInfoResponse;
import com.nimbusds.oauth2.sdk.TokenResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;



    @Override
    public TokenResponse login(AuthRequest request) {
        //TODO to implement
        return null;
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
