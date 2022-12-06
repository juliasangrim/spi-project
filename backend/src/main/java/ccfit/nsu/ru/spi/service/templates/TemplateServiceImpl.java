package ccfit.nsu.ru.spi.service.templates;

import ccfit.nsu.ru.spi.exception.NotFoundException;
import ccfit.nsu.ru.spi.mapper.templates.TemplateCreateRequestMapper;
import ccfit.nsu.ru.spi.mapper.templates.TemplateResponseInfoMapper;
import ccfit.nsu.ru.spi.mapper.templates.TemplateResponseMapper;
import ccfit.nsu.ru.spi.mapper.templates.TemplateUpdateRequestMapper;
import ccfit.nsu.ru.spi.model.dto.request.templates.CreateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.request.templates.UpdateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateInfoResponse;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateResponse;
import ccfit.nsu.ru.spi.repository.TemplateConfigRepository;
import ccfit.nsu.ru.spi.repository.TemplateRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class TemplateServiceImpl implements TemplateService {

    private final TemplateConfigRepository templateConfigRepository;
    private final TemplateRepository templateRepository;
    private final TemplateResponseInfoMapper templateResponseInfoMapper;
    private final TemplateCreateRequestMapper templateCreateRequestMapper;
    private final TemplateResponseMapper templateResponseMapper;

    private final TemplateUpdateRequestMapper templateUpdateRequestMapper;

    @Override
    public void createTemplate(CreateTemplateRequest request) {
        var config = templateConfigRepository.findByType(request.getType()).orElseThrow(
                () -> new IllegalStateException("Couldn't find template configuration for type " + request.getType()));

        var template = templateCreateRequestMapper.map(request, config);
        var savedTemplate = templateRepository.save(template);
        log.info("Template successfully created: {}", savedTemplate);
    }

    @Override
    public List<TemplateInfoResponse> getTemplatesInfo() {
        var templateEntities = templateRepository.findAll();
        if (templateEntities.isEmpty()) {
            log.info("There is no any created templates in repository");
        }
        return templateEntities.stream().map(templateResponseInfoMapper::map).collect(Collectors.toList());
    }

    @Override
    public TemplateResponse getTemplate(Long id) {
        var templateEntity = templateRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Template doesn't exists"));
        var config = templateConfigRepository.findByType(templateEntity.getType()).orElseThrow(
                () -> new IllegalStateException("Couldn't find template configuration for type " + templateEntity.getType()));
        return templateResponseMapper.map(templateEntity, config);
    }

    @Override
    public TemplateResponse updateTemplate(UpdateTemplateRequest request) {
        var config = templateConfigRepository.findByType(request.getType()).orElseThrow(
                () -> new IllegalStateException("Couldn't find template configuration for type " + request.getType()));
        var entity = templateUpdateRequestMapper.map(request, config);
        var templateEntity = templateRepository.save(entity);
        return templateResponseMapper.map(templateEntity, config);
    }

}
