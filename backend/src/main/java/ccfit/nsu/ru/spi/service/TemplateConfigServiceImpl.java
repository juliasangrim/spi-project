package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.model.dto.request.config.UpdateTemplateConfigRequest;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigInfoResponse;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigResponse;
import ccfit.nsu.ru.spi.model.entity.TemplateType;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TemplateConfigServiceImpl implements TemplateConfigService {

    @Override
    public List<TemplateConfigInfoResponse> getTemplateConfigs() {
        // TODO to implement
        return null;
    }

    @Override
    public TemplateConfigResponse getTemplateConfig(TemplateType type) {
        // TODO to implement
        return null;
    }

    @Override
    public TemplateConfigResponse updateTemplateConfig(UpdateTemplateConfigRequest request) {
        // TODO to implement
        return null;
    }

}
