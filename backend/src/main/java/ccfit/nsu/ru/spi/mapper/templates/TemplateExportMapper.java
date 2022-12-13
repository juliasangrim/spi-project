package ccfit.nsu.ru.spi.mapper.templates;

import ccfit.nsu.ru.spi.model.dto.request.templates.ExportSpringTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.request.templates.ExportTemplateRequest;
import ccfit.nsu.ru.spi.model.entity.templates.SpringTemplateEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateType;
import ccfit.nsu.ru.spi.model.inner.SpringTemplateParams;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.time.ZonedDateTime;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.ERROR,
        imports = ZonedDateTime.class)
public interface TemplateExportMapper {

    default SpringTemplateParams map(ExportTemplateRequest request, TemplateEntity entity) {
        if (request == null || entity == null) {
            return null;
        }
        TemplateType templateType = request.getType();
        switch (templateType) {
            case SPRING -> {
                var exportSpringTemplateRequest = (ExportSpringTemplateRequest) request;
                var springTemplateEntity = (SpringTemplateEntity) entity;
                return mapSpringData(exportSpringTemplateRequest, springTemplateEntity);
            }
            default -> {
                throw new IllegalArgumentException();
            }
        }
    }

    @Mapping(target = "projectName", source = "request.projectName")
    @Mapping(target = "applicationName", source = "request.applicationName")
    @Mapping(target = "packageName", source = "request.packageName")
    @Mapping(target = "javaVersion", source = "entity.javaVersion")
    @Mapping(target = "springBootVersion", source = "entity.springVersion")
    SpringTemplateParams mapSpringData(ExportSpringTemplateRequest request, SpringTemplateEntity entity);
}
