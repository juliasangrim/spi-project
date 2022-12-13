package ccfit.nsu.ru.spi.service.templates;

import ccfit.nsu.ru.spi.model.dto.request.templates.CreateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.request.templates.ExportTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.request.templates.UpdateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateResponse;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateInfoResponse;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.util.List;

public interface TemplateService {

    void createTemplate(CreateTemplateRequest request);

    List<TemplateInfoResponse> getTemplatesInfo();

    TemplateResponse getTemplate(Long id);

    TemplateResponse updateTemplate(UpdateTemplateRequest request);

    ResponseEntity<Resource> exportTemplate(ExportTemplateRequest request) throws IOException;
}