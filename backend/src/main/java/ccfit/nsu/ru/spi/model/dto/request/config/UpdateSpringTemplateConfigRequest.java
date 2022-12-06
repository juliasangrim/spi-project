package ccfit.nsu.ru.spi.model.dto.request.config;

import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencyDTO;
import ccfit.nsu.ru.spi.model.dto.request.templates.SpringDependencyUpdateRequest;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UpdateSpringTemplateConfigRequest extends UpdateTemplateConfigRequest {

    @Schema(description = "Версия Java по умолчанию", example = "17", required = true)
    private Integer defaultJavaVersion;

    @Schema(description = "Список доступных версий Java", required = true)
    private List<Integer> availableVersions;

    @Schema(description = "Версия Spring Boot по умолчанию", example = "3.0.0", required = true)
    private String defaultSpringBootVersion;

    @Schema(description = "Список доступных версий Spring Boot", required = true)
    private List<String> springBootVersions;

    @Schema(description = "Список дефолтных зависимостей", required = true)
    private List<SpringDependencyUpdateRequest> defaultDependencies;

}
