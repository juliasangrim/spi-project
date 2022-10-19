package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.model.dto.request.config.UpdateTemplateConfigRequest;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigInfoResponse;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigResponse;
import ccfit.nsu.ru.spi.model.entity.TemplateType;
import java.util.List;

public interface TemplateConfigService {

    List<TemplateConfigInfoResponse> getTemplateConfigs();

    TemplateConfigResponse getTemplateConfig(TemplateType type);

    TemplateConfigResponse updateTemplateConfig(UpdateTemplateConfigRequest request);

}
