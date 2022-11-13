package ccfit.nsu.ru.spi.model.dto.response.templates;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SpringTemplateResponse {

    @Schema(description = "Выбранная версия Java", example = "17", required = true)
    private Integer javaVersion;

    @Schema(description = "Список доступных версий Java", required = true)
    private List<Integer> availableVersions;

    @Schema(description = "Выбранная версия Spring Boot", example = "3.0.0", required = true)
    private String springBootVersion;

    @Schema(description = "Список доступных версий Spring Boot", required = true)
    private List<String> springBootVersions;

    @Schema(description = "Список зависимостей", required = true)
    private List<SpringTemplateDependencyResponse> dependencies;

}
