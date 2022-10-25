package ccfit.nsu.ru.spi.controllers;

import static ccfit.nsu.ru.spi.security.UserRole.UserAuthority;

import ccfit.nsu.ru.spi.model.dto.request.templates.CreateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.response.common.ResponseWrapper;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateInfoResponse;
import ccfit.nsu.ru.spi.service.TemplateService;
import io.swagger.v3.oas.annotations.Operation;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/v1/api/templates")
public class TemplateController {

    private final TemplateService templateService;

    @Operation(summary = "Create template")
    @PostMapping
    @Secured(value = {UserAuthority.ROLE_CLIENT, UserAuthority.ROLE_ADMIN})
    public ResponseWrapper<ResponseWrapper.OkStatus> createTemplate(@RequestBody CreateTemplateRequest request) {
        templateService.createTemplate(request);
        return ResponseWrapper.okResponse();
    }

    @Operation(summary = "Get info about existing templates")
    @GetMapping
    @Secured(value = {UserAuthority.ROLE_CLIENT, UserAuthority.ROLE_ADMIN})
    public ResponseWrapper<List<TemplateInfoResponse>> getTemplates() {
        List<TemplateInfoResponse> templatesInfo = templateService.getTemplatesInfo();
        return new ResponseWrapper<>(templatesInfo);
    }

}
