package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.mapper.TemplateConfigConfigMapper;
import ccfit.nsu.ru.spi.mapper.TemplateRequestConfigMapper;
import ccfit.nsu.ru.spi.model.dto.request.config.UpdateTemplateConfigRequest;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigInfoResponse;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigResponse;
import ccfit.nsu.ru.spi.model.entity.TemplateConfigEntity;
import ccfit.nsu.ru.spi.model.entity.TemplateType;
import ccfit.nsu.ru.spi.repository.TemplateConfigRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TemplateConfigServiceImpl implements TemplateConfigService {

    private final TemplateConfigRepository templateConfigRepository;

    private final TemplateRequestConfigMapper templateRequestConfigMapper;
    private final TemplateConfigConfigMapper templateConfigConfigMapper;


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
        TemplateConfigEntity entity = templateRequestConfigMapper.map(request);
        TemplateConfigEntity updatedTemplate = templateConfigRepository.save(entity);
        return templateConfigConfigMapper.map(updatedTemplate);
    }

}
