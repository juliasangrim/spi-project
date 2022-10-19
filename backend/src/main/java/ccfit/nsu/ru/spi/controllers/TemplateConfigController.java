package ccfit.nsu.ru.spi.controllers;

import static ccfit.nsu.ru.spi.security.UserRole.UserAuthority;

import ccfit.nsu.ru.spi.model.dto.request.config.UpdateTemplateConfigRequest;
import ccfit.nsu.ru.spi.model.dto.response.UserInfoResponse;
import ccfit.nsu.ru.spi.model.dto.response.common.ResponseWrapper;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigInfoResponse;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigResponse;
import ccfit.nsu.ru.spi.model.entity.TemplateType;
import ccfit.nsu.ru.spi.service.TemplateConfigService;
import ccfit.nsu.ru.spi.service.UserInfoService;
import io.swagger.v3.oas.annotations.Operation;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/v1/api/templates/configs")
public class TemplateConfigController {

    private final TemplateConfigService templateConfigService;

    @Operation(summary = "Available template configs")
    @GetMapping
    @Secured(UserAuthority.ROLE_ADMIN)
    public ResponseWrapper<List<TemplateConfigInfoResponse>> getTemplateConfigs() {
        List<TemplateConfigInfoResponse> templateConfigs = templateConfigService.getTemplateConfigs();
        return new ResponseWrapper<>(templateConfigs);
    }

    @Operation(summary = "Get template config by type")
    @GetMapping("/{type}")
    @Secured(UserAuthority.ROLE_ADMIN)
    public ResponseWrapper<TemplateConfigResponse> getTemplateConfig(@PathVariable(name = "type") TemplateType type) {
        TemplateConfigResponse templateConfig = templateConfigService.getTemplateConfig(type);
        return new ResponseWrapper<>(templateConfig);
    }

    @Operation(summary = "Update template config")
    @PutMapping("/{type}")
    @Secured(UserAuthority.ROLE_ADMIN)
    public ResponseWrapper<TemplateConfigResponse> updateTemplateConfigs(
        @RequestBody UpdateTemplateConfigRequest request
    ) {
        TemplateConfigResponse templateConfig = templateConfigService.updateTemplateConfig(request);
        return new ResponseWrapper<>(templateConfig);
    }

}
