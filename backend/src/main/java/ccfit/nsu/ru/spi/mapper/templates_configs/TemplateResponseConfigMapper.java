package ccfit.nsu.ru.spi.mapper.templates_configs;

import ccfit.nsu.ru.spi.model.dto.response.config.SpringTemplateConfigResponse;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigResponse;
import ccfit.nsu.ru.spi.model.entity.templates_configs.SpringTemplateConfigEntity;
import ccfit.nsu.ru.spi.model.entity.templates_configs.TemplateConfigEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateType;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.time.ZonedDateTime;

@Mapper(componentModel = "spring",
    unmappedTargetPolicy = ReportingPolicy.ERROR,
    imports = ZonedDateTime.class)
public abstract class TemplateResponseConfigMapper {

    public TemplateConfigResponse map(TemplateConfigEntity entity) {
        if (entity == null) {
            return null;
        }

        TemplateType type = entity.getType();
        switch (type) {
            case SPRING -> {
                return map((SpringTemplateConfigEntity) entity);
            }
            default -> throw new IllegalArgumentException();
        }
    }

    @Mapping(target = "typeName", source = "type.name")
    @Mapping(target = "defaultDependencies", ignore = true) //TODO to implement
    protected abstract SpringTemplateConfigResponse map(SpringTemplateConfigEntity entity);

}
