package ccfit.nsu.ru.spi.model.dto.request.templates;

import ccfit.nsu.ru.spi.model.entity.dependencies.SpringDependencyVersionType;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SpringDependencyUpdateRequest {

    @Schema(description = "Идентификатор. Null если зависимость новая", example = "1000L")
    private Long id;

    @Schema(description = "Group ID", example = "org.mapstruct", required = true)
    private String artifactId;

    @Schema(description = "Artifact ID", example = "mapstruct", required = true)
    private String groupId;

    @Schema(description = "Version type", example = "COMMON", required = true)
    private SpringDependencyVersionType versionType;

    @Schema(description = "Version number", example = "1.5.2.Final", nullable = true)
    private String version;

}
