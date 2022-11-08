package ccfit.nsu.ru.spi.service.templates;

import ccfit.nsu.ru.spi.mapper.templates.TemplateCreateRequestMapper;
import ccfit.nsu.ru.spi.mapper.templates.TemplateResponseInfoMapper;
import ccfit.nsu.ru.spi.model.dto.request.templates.CreateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateInfoResponse;
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

    @Override
    public void createTemplate(CreateTemplateRequest request) {
        var config = templateConfigRepository.findByType(request.getType());
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

}
