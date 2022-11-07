package ccfit.nsu.ru.spi.mapper.templates;

import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateInfoResponse;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.time.ZonedDateTime;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.ERROR,
        imports = ZonedDateTime.class)
public interface TemplateResponseInfoMapper {

    @Mapping(target = "type", source = "type")
    @Mapping(target = "description", source = "description")
    @Mapping(target = "title", source = "title")
    @Mapping(target = "lastUpdateTime", defaultExpression = "java(ZonedDateTime.now())")
    TemplateInfoResponse map(TemplateEntity entity);

}
