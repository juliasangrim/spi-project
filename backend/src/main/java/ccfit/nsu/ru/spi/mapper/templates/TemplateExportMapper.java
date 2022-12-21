package ccfit.nsu.ru.spi.mapper.templates;

import ccfit.nsu.ru.spi.model.dto.request.templates.ExportSpringTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.request.templates.ExportTemplateRequest;
import ccfit.nsu.ru.spi.model.entity.dependencies.SpringDependencyEntity;
import ccfit.nsu.ru.spi.model.entity.dependencies.SpringDependencyVersionType;
import ccfit.nsu.ru.spi.model.entity.templates.SpringTemplateEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateEntity;
import ccfit.nsu.ru.spi.model.entity.templates.TemplateType;
import ccfit.nsu.ru.spi.model.inner.SpringDependencyTemplateParams;
import ccfit.nsu.ru.spi.model.inner.SpringTemplateParams;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.time.ZonedDateTime;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.ERROR,
        imports = ZonedDateTime.class)
public interface TemplateExportMapper {

    default SpringTemplateParams map(ExportTemplateRequest request, TemplateEntity entity) {
        if (request == null || entity == null) {
            return null;
        }
        TemplateType templateType = request.getType();
        switch (templateType) {
            case SPRING -> {
                var exportSpringTemplateRequest = (ExportSpringTemplateRequest) request;
                var springTemplateEntity = (SpringTemplateEntity) entity;
                var springTemplateParams = mapSpringData(exportSpringTemplateRequest, springTemplateEntity);
                springTemplateEntity.getDependencies().forEach(
                        springDependency -> springTemplateParams.getDependencies()
                                .put(springDependency.getArtifactId(), mapSpringDependency(springDependency))
                );
                return springTemplateParams;
            }
            default -> {
                throw new IllegalArgumentException();
            }
        }
    }

    @Mapping(target = "projectName", source = "request.projectName")
    @Mapping(target = "applicationName", source = "request.applicationName")
    @Mapping(target = "packageName", source = "request.packageName")
    @Mapping(target = "javaVersion", source = "entity.javaVersion")
    @Mapping(target = "springBootVersion", source = "entity.springVersion")
    @Mapping(target = "dependencies", ignore = true)
    SpringTemplateParams mapSpringData(ExportSpringTemplateRequest request, SpringTemplateEntity entity);

    default SpringDependencyTemplateParams mapSpringDependency(SpringDependencyEntity entity){
        if(entity == null){
            return null;
        }

        SpringDependencyTemplateParams dependenciesTemplateParams = mapSpringDependencySimple(entity);
        SpringDependencyVersionType versionType = entity.getVersionType();
        switch (versionType){
            case COMMON -> dependenciesTemplateParams.setVersion(entity.getVersion());
            case LATEST -> dependenciesTemplateParams.setVersion("+");
            case INHERITED -> dependenciesTemplateParams.setVersion("");
        }

        return dependenciesTemplateParams;
    }

    @Mapping(target = "artifactId", source = "artifactId")
    @Mapping(target = "groupId", source = "groupId")
    @Mapping(target = "version", ignore = true)
    SpringDependencyTemplateParams mapSpringDependencySimple(SpringDependencyEntity entity);
}
