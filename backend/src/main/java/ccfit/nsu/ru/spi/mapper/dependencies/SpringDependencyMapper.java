package ccfit.nsu.ru.spi.mapper.dependencies;

import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencyDTO;
import ccfit.nsu.ru.spi.model.dto.request.templates.SpringDependencyUpdateRequest;
import ccfit.nsu.ru.spi.model.entity.dependencies.SpringDependencyEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.ERROR)
public interface SpringDependencyMapper {

    @Mapping(target = "template", ignore = true)
    @Mapping(target = "templateConfig", ignore = true)
    SpringDependencyEntity map(SpringDependencyUpdateRequest dto);

}
