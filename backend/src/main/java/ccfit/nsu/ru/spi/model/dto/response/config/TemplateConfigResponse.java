package ccfit.nsu.ru.spi.model.dto.response.config;

import ccfit.nsu.ru.spi.model.entity.TemplateType;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.ZonedDateTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(subTypes = {
    SpringTemplateConfigResponse.class
})
public class TemplateConfigResponse {

    @Schema(description = "Тип шаблона", example = "SPRING", nullable = true)
    private TemplateType type;

    @Schema(description = "Название типа шаблона", example = "Spring", nullable = true)
    private String typeName;

    @Schema(description = "Дата последнего изменения конфигурации", nullable = true)
    private ZonedDateTime lastUpdateTime;

}
