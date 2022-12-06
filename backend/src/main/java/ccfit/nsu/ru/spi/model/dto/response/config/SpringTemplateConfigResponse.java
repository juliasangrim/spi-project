package ccfit.nsu.ru.spi.model.dto.response.config;

import ccfit.nsu.ru.spi.model.dto.response.templates.SpringTemplateDependencyResponse;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SpringTemplateConfigResponse extends TemplateConfigResponse {

    @Schema(description = "Версия Java по умолчанию", example = "17", required = true)
    private Integer defaultJavaVersion;

    @Schema(description = "Список доступных версий Java", required = true)
    private List<Integer> availableVersions;

    @Schema(description = "Версия Spring Boot по умолчанию", example = "3.0.0", required = true)
    private String defaultSpringBootVersion;

    @Schema(description = "Список доступных версий Spring Boot", required = true)
    private List<String> springBootVersions;

    @Schema(description = "Список дефолтных зависимостей шаблона", required = true)
    private List<SpringTemplateDependencyResponse> defaultDependencies;

}
