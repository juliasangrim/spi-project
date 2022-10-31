package ccfit.nsu.ru.spi.mapper;

import ccfit.nsu.ru.spi.model.dto.request.config.UpdateSpringTemplateConfigRequest;
import ccfit.nsu.ru.spi.model.dto.request.config.UpdateTemplateConfigRequest;
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
public abstract class TemplateRequestConfigMapper {

    public TemplateConfigEntity map(UpdateTemplateConfigRequest request) {
        if (request == null) {
            return null;
        }

        TemplateType type = request.getType();
        switch (type) {
            case SPRING -> {
                return map((UpdateSpringTemplateConfigRequest) request);
            }
            default -> throw new IllegalArgumentException();
        }
    }

    @Mapping(target = "id", source = "id")
    @Mapping(target = "type", source = "type")
    @Mapping(target = "lastUpdateTime", ignore = true)
    protected abstract SpringTemplateConfigEntity map(UpdateSpringTemplateConfigRequest request);

}
