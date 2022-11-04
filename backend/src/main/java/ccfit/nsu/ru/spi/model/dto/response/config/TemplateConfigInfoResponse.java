package ccfit.nsu.ru.spi.model.dto.response.config;

import ccfit.nsu.ru.spi.model.entity.TemplateType;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.ZonedDateTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TemplateConfigInfoResponse {

    @Schema(description = "Тип шаблона", example = "SPRING", required = true)
    private TemplateType type;

    @Schema(description = "Название типа шаблона", example = "Spring", required = true)
    private String typeName;

    @Schema(description = "Дата последнего изменения конфигурации", nullable = true)
    private ZonedDateTime lastUpdateTime;

}
