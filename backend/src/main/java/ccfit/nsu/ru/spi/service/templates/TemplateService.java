package ccfit.nsu.ru.spi.service.templates;

import ccfit.nsu.ru.spi.model.dto.request.templates.CreateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateInfoResponse;
import java.util.List;

public interface TemplateService {

    void createTemplate(CreateTemplateRequest request);

    List<TemplateInfoResponse> getTemplatesInfo();

}
