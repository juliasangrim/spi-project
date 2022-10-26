package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.mapper.TemplateResponseConfigInfoMapper;
import ccfit.nsu.ru.spi.mapper.TemplateResponseConfigMapper;
import ccfit.nsu.ru.spi.mapper.TemplateRequestConfigMapper;
import ccfit.nsu.ru.spi.model.dto.request.config.UpdateTemplateConfigRequest;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigInfoResponse;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigResponse;
import ccfit.nsu.ru.spi.model.entity.TemplateConfigEntity;
import ccfit.nsu.ru.spi.model.entity.TemplateType;
import ccfit.nsu.ru.spi.repository.TemplateConfigRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
