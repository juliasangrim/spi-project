package ccfit.nsu.ru.spi.mapper;


import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencyDTO;
import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencyVersionResponse;
import ccfit.nsu.ru.spi.model.dto.response.dependencies.search.mavenresponse.DependencyInfo;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.ERROR)
public interface DependencyInfoMapper {

    SpringDependencyVersionResponse mapToSpringDependencyVersion(DependencyInfo dependencyInfo);

    @Mapping(source = "latestVersion", target = "version")
    SpringDependencyDTO mapToSpringDependency(DependencyInfo dependencyInfo);

}
