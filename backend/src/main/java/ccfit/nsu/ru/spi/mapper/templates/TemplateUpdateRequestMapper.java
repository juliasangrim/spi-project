package ccfit.nsu.ru.spi.mapper.templates;

import ccfit.nsu.ru.spi.model.dto.request.templates.SpringDependencyUpdateRequest;
import ccfit.nsu.ru.spi.model.dto.request.templates.SpringUpdateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.request.templates.UpdateTemplateRequest;
import ccfit.nsu.ru.spi.model.entity.dependencies.SpringDependencyEntity;
import ccfit.nsu.ru.spi.model.entity.templates.SpringTemplateEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateType;
import ccfit.nsu.ru.spi.model.entity.templates_configs.TemplateConfigEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.time.ZonedDateTime;
import java.util.ArrayList;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.ERROR,
        imports = ZonedDateTime.class)
public interface TemplateUpdateRequestMapper {


    default TemplateEntity map(UpdateTemplateRequest request, TemplateConfigEntity config) {
        if (request == null || config == null) {
            return null;
        }
        TemplateType templateType = request.getType();
        switch (templateType) {
            case SPRING -> {
                var springUpdateRequest = (SpringUpdateTemplateRequest) request;
                var entity = map(springUpdateRequest);
                entity.setLastUpdateTime(ZonedDateTime.now());

                if (springUpdateRequest.getDependencies() != null) {
                    entity.setDependencies(new ArrayList<>());
                    springUpdateRequest.getDependencies().forEach(
                            dependency -> entity.getDependencies()
                                    .add(mapDependency(dependency, entity))
                    );
                }
                return entity;
            }
            default -> {
                throw new IllegalArgumentException();
            }
        }
    }



    @Mapping(source = "dependency.id", target = "id")
    @Mapping(target = "templateConfig", ignore = true)
    @Mapping(source = "template", target = "template")
    SpringDependencyEntity mapDependency(SpringDependencyUpdateRequest dependency,
                                         SpringTemplateEntity template);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "type", target = "type")
    @Mapping(source = "title", target = "title")
    @Mapping(source = "description", target = "description")
    @Mapping(target = "lastUpdateTime", ignore = true)
    @Mapping(source = "springBootVersion", target = "springVersion")
    @Mapping(target = "dependencies", ignore = true)
    SpringTemplateEntity map(SpringUpdateTemplateRequest request);
}
