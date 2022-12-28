package ccfit.nsu.ru.spi.service.templates;

import ccfit.nsu.ru.spi.exception.NotFoundException;
import ccfit.nsu.ru.spi.mapper.templates.*;
import ccfit.nsu.ru.spi.model.dto.request.templates.CreateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.request.templates.ExportTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.request.templates.UpdateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateInfoResponse;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateResponse;
import ccfit.nsu.ru.spi.repository.TemplateConfigRepository;
import ccfit.nsu.ru.spi.repository.TemplateRepository;
import ccfit.nsu.ru.spi.service.cookie_cutter.CookieCutterTemplateService;
import ccfit.nsu.ru.spi.service.templates_export.ExportTemplateService;
import java.util.Comparator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class TemplateServiceImpl implements TemplateService {

    private final TemplateConfigRepository templateConfigRepository;
    private final CookieCutterTemplateService cookieCutterTemplateService;
    private final ExportTemplateService exportTemplateService;
    private final TemplateRepository templateRepository;
    private final TemplateResponseInfoMapper templateResponseInfoMapper;
    private final TemplateCreateRequestMapper templateCreateRequestMapper;
    private final TemplateResponseMapper templateResponseMapper;
    private final TemplateUpdateRequestMapper templateUpdateRequestMapper;
    private final TemplateExportMapper templateExportMapper;


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
        return templateEntities.stream()
            .map(templateResponseInfoMapper::map)
            .sorted(Comparator.comparing(TemplateInfoResponse::getId))
            .collect(Collectors.toList());
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

    @Override
    public ResponseEntity<Resource> exportTemplate(ExportTemplateRequest request) throws IOException {
        var templateEntity = templateRepository.findById(request.getId())
                .orElseThrow(() -> new NotFoundException("Template doesn't exists"));
        var generatedTemplate = cookieCutterTemplateService.instantiateTemplate(templateExportMapper.map(request, templateEntity));
        return exportTemplateService.exportTemplate(generatedTemplate);
    }
}