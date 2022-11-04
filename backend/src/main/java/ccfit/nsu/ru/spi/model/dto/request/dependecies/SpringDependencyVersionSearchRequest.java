package ccfit.nsu.ru.spi.model.dto.request.dependecies;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SpringDependencyVersionSearchRequest {

    @Schema(description = "Group ID", example = "org.mapstruct", required = true)
    private String groupId;

    @Schema(description = "Artifact ID", example = "mapstruct", required = true)
    private String artifactId;

}
