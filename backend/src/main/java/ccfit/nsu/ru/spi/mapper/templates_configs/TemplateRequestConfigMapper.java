package ccfit.nsu.ru.spi.mapper.templates_configs;

import ccfit.nsu.ru.spi.mapper.dependencies.SpringDependencyMapper;
import ccfit.nsu.ru.spi.model.dto.request.config.UpdateSpringTemplateConfigRequest;
import ccfit.nsu.ru.spi.model.dto.request.config.UpdateTemplateConfigRequest;
import ccfit.nsu.ru.spi.model.entity.dependencies.SpringDependencyEntity;
import ccfit.nsu.ru.spi.model.entity.templates_configs.SpringTemplateConfigEntity;
import ccfit.nsu.ru.spi.model.entity.templates_configs.TemplateConfigEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateType;
import java.time.ZonedDateTime;
import java.util.List;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
    unmappedTargetPolicy = ReportingPolicy.ERROR,
    imports = ZonedDateTime.class,
    uses = SpringDependencyMapper.class)
public abstract class TemplateRequestConfigMapper {

    public TemplateConfigEntity map(UpdateTemplateConfigRequest request) {
        if (request == null) {
            return null;
        }

        TemplateType type = request.getType();
        switch (type) {
            case SPRING -> {
                SpringTemplateConfigEntity springConfig = map((UpdateSpringTemplateConfigRequest) request);
                springConfig.setLastUpdateTime(ZonedDateTime.now());
                return springConfig;
            }
            default -> throw new IllegalArgumentException();
        }
    }

    @Mapping(target = "id", source = "id")
    @Mapping(target = "type", source = "type")
    @Mapping(target = "lastUpdateTime", ignore = true)
    protected abstract SpringTemplateConfigEntity map(UpdateSpringTemplateConfigRequest request);

    @AfterMapping
    protected void mapDependencies(@MappingTarget SpringTemplateConfigEntity config) {
        List<SpringDependencyEntity> dependencies = config.getDefaultDependencies();
        dependencies.forEach(d -> d.setTemplateConfig(config));
    }

}
