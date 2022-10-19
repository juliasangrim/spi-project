package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.model.dto.request.templates.CreateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigResponse;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateInfoResponse;
import java.util.List;

public interface TemplateService {

    void createTemplate(CreateTemplateRequest request);

    List<TemplateInfoResponse> getTemplatesInfo();

}
