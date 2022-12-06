package ccfit.nsu.ru.spi.model.dto.request.templates;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExportSpringTemplateRequest extends ExportTemplateRequest {

    @Schema(description = "Название проекта (rootProject.name в settings.gradle)",
        example = "test-project", required = true)
    private String projectName;

    @Schema(description = "Префикс названия класса с аннотацией SpringBootApplication (точка входа)",
        example = "Test", required = true)
    private String applicationName;

    @Schema(description = "Название пакета (group в build.gradle)\n",
        example = "ccfit.nsu.ru", required = true)
    private String packageName;

}
