package ccfit.nsu.ru.spi.model.dto.request.templates;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SpringUpdateTemplateRequest extends UpdateTemplateRequest {

    @Schema(description = "Выбранная версия Java", example = "17", required = true)
    private Integer javaVersion;

    @Schema(description = "Выбранная версия Spring Boot", example = "3.0.0", required = true)
    private String springBootVersion;

    @Schema(description = "Список зависимостей", required = true)
    private List<SpringDependencyUpdateRequest> dependencies;

}
