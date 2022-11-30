package ccfit.nsu.ru.spi.mapper.templates;

import ccfit.nsu.ru.spi.model.dto.response.templates.SpringTemplateResponse;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateResponse;
import ccfit.nsu.ru.spi.model.entity.templates.SpringTemplateEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateType;
import ccfit.nsu.ru.spi.model.entity.templates_configs.SpringTemplateConfigEntity;
import ccfit.nsu.ru.spi.model.entity.templates_configs.TemplateConfigEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.time.ZonedDateTime;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.ERROR,
        imports = ZonedDateTime.class)
public interface TemplateResponseMapper {


    default TemplateResponse map(TemplateEntity templateEntity, TemplateConfigEntity config) {
        if (templateEntity == null) {
            return null;
        }
        TemplateType templateType = templateEntity.getType();
        switch (templateType) {
            case SPRING -> {
                SpringTemplateEntity springTemplate = (SpringTemplateEntity) templateEntity;
                SpringTemplateResponse response = map(springTemplate);
                if (config instanceof SpringTemplateConfigEntity springConfig) {
                    response.setAvailableVersions(springConfig.getAvailableVersions().stream().toList());
                    response.setSpringBootVersions(springConfig.getSpringBootVersions().stream().toList());
                }
                return response;
            }
            default -> {
                throw new IllegalArgumentException();
            }
        }
    }

    @Mapping(source = "id", target = "id")
    @Mapping(source = "type", target = "type")
    @Mapping(source = "title", target = "title")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "springVersion", target = "springBootVersion")
    @Mapping(target = "availableVersions", ignore = true)
    @Mapping(target = "springBootVersions", ignore = true)
    SpringTemplateResponse map(SpringTemplateEntity entity);
}
