package ccfit.nsu.ru.spi.controllers;

import ccfit.nsu.ru.spi.model.dto.request.AuthRequest;
import ccfit.nsu.ru.spi.model.dto.request.RegistrationRequest;
import ccfit.nsu.ru.spi.model.dto.response.TokenResponse;
import ccfit.nsu.ru.spi.model.dto.response.common.ResponseWrapper;
import ccfit.nsu.ru.spi.model.dto.response.SupportInfoResponse;
import ccfit.nsu.ru.spi.service.auth.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
@RequestMapping("/v1/api/auth")
public class AuthController {

    private final AuthService authService;

    @Operation(summary = "Request to get an authentication token")
    @PostMapping("/signIn")
    public ResponseWrapper<TokenResponse> signIn(@Valid @RequestBody AuthRequest request) {
        TokenResponse response = authService.login(request);
        return new ResponseWrapper<>(response);
    }

    @Operation(summary = "Registration request")
    @PostMapping("/signup")
    public ResponseWrapper<ResponseWrapper.OkStatus> signup(@Valid @RequestBody RegistrationRequest request) {
        authService.signup(request);
        return ResponseWrapper.okResponse();
    }

    @Operation(summary = "Support request")
    @GetMapping("/supportInfo")
    public ResponseWrapper<SupportInfoResponse> supportInfo() {
        SupportInfoResponse response = authService.getSupportInfo();
        return new ResponseWrapper<>(response);
    }

}
