package ccfit.nsu.ru.spi.mapper;

import ccfit.nsu.ru.spi.model.dto.response.config.SpringTemplateConfigResponse;
import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigResponse;
import ccfit.nsu.ru.spi.model.entity.SpringTemplateConfigEntity;
import ccfit.nsu.ru.spi.model.entity.TemplateConfigEntity;
import ccfit.nsu.ru.spi.model.entity.TemplateType;
import java.time.ZonedDateTime;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

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
    protected abstract SpringTemplateConfigResponse map(SpringTemplateConfigEntity entity);

}
