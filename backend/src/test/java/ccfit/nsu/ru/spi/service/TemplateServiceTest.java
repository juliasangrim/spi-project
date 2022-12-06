package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.mapper.templates.TemplateCreateRequestMapper;
import ccfit.nsu.ru.spi.mapper.templates.TemplateResponseInfoMapper;
import ccfit.nsu.ru.spi.model.dto.request.templates.CreateSpringTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateInfoResponse;
import ccfit.nsu.ru.spi.model.entity.templates.SpringTemplateEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateType;
import ccfit.nsu.ru.spi.model.entity.templates_configs.TemplateConfigEntity;
import ccfit.nsu.ru.spi.repository.TemplateConfigRepository;
import ccfit.nsu.ru.spi.repository.TemplateRepository;
import ccfit.nsu.ru.spi.service.templates.TemplateServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TemplateServiceTest {

    @Mock
    private TemplateConfigRepository templateConfigRepository;
    @Mock
    private TemplateRepository templateRepository;
    @Mock
    private TemplateResponseInfoMapper templateResponseInfoMapper;
    @Mock
    private TemplateCreateRequestMapper templateCreateRequestMapper;
    @InjectMocks
    private TemplateServiceImpl uut;

    @Test
    public void createSpringTemplate_configFound_templateSaved() {
        var createSpringTemplateRequest = new CreateSpringTemplateRequest();
        createSpringTemplateRequest.setType(TemplateType.SPRING);
        var springConfig = new TemplateConfigEntity();
        var springTemplate = new SpringTemplateEntity();

        when(templateConfigRepository.findByType(createSpringTemplateRequest.getType()))
                .thenReturn(Optional.of(springConfig));
        when(templateCreateRequestMapper.map(createSpringTemplateRequest, springConfig))
                .thenReturn(springTemplate);
        when(templateRepository.save(springTemplate)).thenReturn(springTemplate);

        uut.createTemplate(createSpringTemplateRequest);

        verify(templateConfigRepository).findByType(createSpringTemplateRequest.getType());
        verify(templateCreateRequestMapper).map(createSpringTemplateRequest, springConfig);
        verify(templateRepository).save(springTemplate);
        verifyNoMoreInteractions(templateConfigRepository, templateCreateRequestMapper, templateRepository);
    }

    @Test
    public void showTemplates_listNotEmpty_templatesListReturned() {
        var springTemplates = List.of(new TemplateEntity());
        var springTemplatesInfo = List.of(new TemplateInfoResponse());

        when(templateRepository.findAll()).thenReturn(springTemplates);
        when(templateResponseInfoMapper.map(springTemplates.get(0))).thenReturn(springTemplatesInfo.get(0));

        uut.getTemplatesInfo();

        verify(templateRepository).findAll();
        verify(templateResponseInfoMapper).map(springTemplates.get(0));
        verifyNoMoreInteractions(templateConfigRepository, templateCreateRequestMapper, templateRepository);
    }

}
