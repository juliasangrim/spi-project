package ccfit.nsu.ru.spi.mapper.templates;

import ccfit.nsu.ru.spi.model.dto.request.templates.CreateSpringTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.request.templates.CreateTemplateRequest;
import ccfit.nsu.ru.spi.model.entity.templates.SpringTemplateEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateType;
import ccfit.nsu.ru.spi.model.entity.templates_configs.SpringTemplateConfigEntity;
import ccfit.nsu.ru.spi.model.entity.templates_configs.TemplateConfigEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.time.ZonedDateTime;
import java.util.Optional;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.ERROR,
        imports = ZonedDateTime.class)
public interface TemplateCreateRequestMapper {

    default TemplateEntity map(CreateTemplateRequest request, Optional<TemplateConfigEntity> config) {
        if (request == null) {
            return null;
        }

        TemplateType type = request.getType();
        switch (type) {
            case SPRING -> {
                var springTemplate = map((CreateSpringTemplateRequest) request);
                springTemplate.setLastUpdateTime(ZonedDateTime.now());
                if (config.isPresent() && config.get() instanceof SpringTemplateConfigEntity springConfig) {
                    springTemplate.setSpringVersion(springConfig.getDefaultSpringBootVersion());
                    springTemplate.setJavaVersion(springConfig.getDefaultJavaVersion());
                }
                return springTemplate;
            }
            default -> throw new IllegalArgumentException();
        }
    }

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "type", source = "type")
    @Mapping(target = "description", source = "description")
    @Mapping(target = "title", source = "title")
    @Mapping(target = "lastUpdateTime", ignore = true)
    @Mapping(target = "springVersion", ignore = true)
    @Mapping(target = "javaVersion", ignore = true)
    SpringTemplateEntity map(CreateSpringTemplateRequest request);

}
