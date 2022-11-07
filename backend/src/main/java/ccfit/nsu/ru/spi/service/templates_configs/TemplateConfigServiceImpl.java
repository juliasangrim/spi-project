package ccfit.nsu.ru.spi.service.templates_configs;

import ccfit.nsu.ru.spi.mapper.templates_configs.TemplateRequestConfigMapper;
import ccfit.nsu.ru.spi.mapper.templates_configs.TemplateResponseConfigInfoMapper;
import ccfit.nsu.ru.spi.mapper.templates_configs.TemplateResponseConfigMapper;
import ccfit.nsu.ru.spi.model.dto.request.config.UpdateTemplateConfigRequest;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigInfoResponse;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigResponse;
import ccfit.nsu.ru.spi.model.entity.templates_configs.TemplateConfigEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateType;
import ccfit.nsu.ru.spi.repository.TemplateConfigRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TemplateConfigServiceImpl implements TemplateConfigService {

    private final TemplateConfigRepository templateConfigRepository;

    private final TemplateRequestConfigMapper templateRequestConfigMapper;
    private final TemplateResponseConfigMapper templateResponseConfigMapper;
    private final TemplateResponseConfigInfoMapper templateResponseConfigInfoMapper;

    @Override
    public List<TemplateConfigInfoResponse> getTemplateConfigs() {
        List<TemplateConfigEntity> templateConfigEntities = templateConfigRepository.findAll();

        if (templateConfigEntities.isEmpty()) {
            throw new NoSuchElementException("There is no any template's configs in repository");
        }

        List<TemplateConfigInfoResponse> templateConfigInfoResponses = new ArrayList<>();
        for (TemplateConfigEntity entity : templateConfigEntities) {
            TemplateConfigInfoResponse infoResponse = templateResponseConfigInfoMapper.map(entity);
            templateConfigInfoResponses.add(infoResponse);
        }

        return templateConfigInfoResponses;
    }

    @Override
    public TemplateConfigResponse getTemplateConfig(TemplateType type) {
        Optional<TemplateConfigEntity> entity = templateConfigRepository.findByType(type);

        if (entity.isEmpty()) {
            throw new NoSuchElementException("No element has type <" + type.getName() + ">");
        }

        return templateResponseConfigMapper.map(entity.get());
    }

    @Override
    public TemplateConfigResponse updateTemplateConfig(UpdateTemplateConfigRequest request) {
        TemplateConfigEntity entity = templateRequestConfigMapper.map(request);
        TemplateConfigEntity updatedTemplate = templateConfigRepository.save(entity);
        return templateResponseConfigMapper.map(updatedTemplate);
    }

}
