package ccfit.nsu.ru.spi.mapper.templates_configs;

import ccfit.nsu.ru.spi.model.dto.response.config.TemplateConfigInfoResponse;
import ccfit.nsu.ru.spi.model.entity.templates_configs.TemplateConfigEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.time.ZonedDateTime;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.ERROR,
        imports = ZonedDateTime.class)
public interface TemplateResponseConfigInfoMapper {

    @Mapping(target = "typeName", source = "type.name")
    @Mapping(target = "lastUpdateTime", defaultExpression = "java(ZonedDateTime.now())")
    TemplateConfigInfoResponse map(TemplateConfigEntity entity);

}
