package ccfit.nsu.ru.spi.controllers;

import ccfit.nsu.ru.spi.model.dto.response.UserInfoResponse;
import ccfit.nsu.ru.spi.model.dto.response.common.ResponseWrapper;
import ccfit.nsu.ru.spi.service.users.UserInfoService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static ccfit.nsu.ru.spi.security.UserRole.UserAuthority;

@RequiredArgsConstructor
@RestController
@RequestMapping("/v1/api/user")
public class UserController {

    private final UserInfoService userInfoService;

    @Operation(summary = "User info request")
    @GetMapping
    @Secured({UserAuthority.ROLE_CLIENT, UserAuthority.ROLE_ADMIN})
    public ResponseWrapper<UserInfoResponse> getCurrentUser
            (@CurrentSecurityContext(expression = "authentication") UsernamePasswordAuthenticationToken token) {
        UserInfoResponse response = userInfoService.getUser(token);
        return new ResponseWrapper<>(response);
    }

}
