package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.model.dto.request.AuthRequest;
import ccfit.nsu.ru.spi.model.dto.request.RegistrationRequest;
import ccfit.nsu.ru.spi.model.dto.response.SupportInfoResponse;
import ccfit.nsu.ru.spi.model.dto.response.TokenResponse;

public interface AuthService {

    TokenResponse login(AuthRequest request);

    void signup(RegistrationRequest request);

    SupportInfoResponse getSupportInfo();

}
