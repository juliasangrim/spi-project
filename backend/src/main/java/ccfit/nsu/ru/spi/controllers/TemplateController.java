package ccfit.nsu.ru.spi.controllers;

import ccfit.nsu.ru.spi.model.dto.request.templates.CreateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.request.templates.ExportTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.request.templates.UpdateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.response.common.ResponseWrapper;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateInfoResponse;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateResponse;
import ccfit.nsu.ru.spi.service.templates.TemplateService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

import static ccfit.nsu.ru.spi.security.UserRole.UserAuthority;

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

    @Operation(summary = "Get template by id")
    @GetMapping("/{id}")
    @Secured(value = {UserAuthority.ROLE_CLIENT, UserAuthority.ROLE_ADMIN})
    public ResponseWrapper<TemplateResponse> getTemplate(@PathVariable Long id) {
        TemplateResponse template = templateService.getTemplate(id);
        return new ResponseWrapper<>(template);
    }

    @Operation(summary = "Update template")
    @PutMapping("/{id}")
    @Secured(value = {UserAuthority.ROLE_CLIENT, UserAuthority.ROLE_ADMIN})
    public ResponseWrapper<TemplateResponse> updateTemplate(@RequestBody UpdateTemplateRequest request) {
        TemplateResponse template = templateService.updateTemplate(request);
        return new ResponseWrapper<>(template);
    }

    @Operation(summary = "Export template")
    @PostMapping("/{id}/export")
    @Secured(value = {UserAuthority.ROLE_CLIENT, UserAuthority.ROLE_ADMIN})
    public ResponseEntity<Resource> exportTemplate(@RequestBody ExportTemplateRequest request) throws IOException {
        return templateService.exportTemplate(request);
    }

}
