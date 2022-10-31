package ccfit.nsu.ru.spi.model.dto.request.config;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UpdateSpringTemplateConfigRequest extends UpdateTemplateConfigRequest {

    @Schema(description = "Версия Java по умолчанию", example = "17", nullable = true)
    private Integer defaultJavaVersion;

    @Schema(description = "Список доступных версий Java", nullable = true)
    private List<Integer> availableVersions;

    @Schema(description = "Версия Spring Boot по умолчанию", example = "3.0.0", nullable = true)
    private String defaultSpringBootVersion;

    @Schema(description = "Список доступных версий Spring Boot", nullable = true)
    private List<String> springBootVersions;

}
