package ccfit.nsu.ru.spi.mapper.templates;

import ccfit.nsu.ru.spi.model.dto.request.templates.CreateSpringTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.request.templates.CreateTemplateRequest;
import ccfit.nsu.ru.spi.model.entity.dependencies.SpringDependencyEntity;
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

    default TemplateEntity map(CreateTemplateRequest request, TemplateConfigEntity config) {
        if (request == null) {
            return null;
        }

        TemplateType type = request.getType();
        switch (type) {
            case SPRING -> {
                var springTemplate = map((CreateSpringTemplateRequest) request);
                springTemplate.setLastUpdateTime(ZonedDateTime.now());
                if (config instanceof SpringTemplateConfigEntity springConfig) {
                    springTemplate.setSpringVersion(springConfig.getDefaultSpringBootVersion());
                    springTemplate.setJavaVersion(springConfig.getDefaultJavaVersion());
                    springConfig.getDefaultDependencies().forEach(
                        d -> springTemplate.getDependencies().add(mapNewDependency(d, springTemplate))
                    );
                }
                return springTemplate;
            }
            default -> throw new IllegalArgumentException();
        }
    }

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "templateConfig", ignore = true)
    @Mapping(target = "template", source = "template")
    SpringDependencyEntity mapNewDependency(SpringDependencyEntity dependency, SpringTemplateEntity template);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "type", source = "type")
    @Mapping(target = "description", source = "description")
    @Mapping(target = "title", source = "title")
    @Mapping(target = "lastUpdateTime", ignore = true)
    @Mapping(target = "springVersion", ignore = true)
    @Mapping(target = "javaVersion", ignore = true)
    @Mapping(target = "dependencies", ignore = true)
    SpringTemplateEntity map(CreateSpringTemplateRequest request);

}
