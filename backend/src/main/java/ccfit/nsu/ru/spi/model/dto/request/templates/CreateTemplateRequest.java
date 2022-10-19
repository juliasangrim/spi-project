package ccfit.nsu.ru.spi.model.dto.request.templates;

import ccfit.nsu.ru.spi.model.dto.request.config.UpdateSpringTemplateConfigRequest;
import ccfit.nsu.ru.spi.model.dto.response.config.SpringTemplateConfigResponse;
import ccfit.nsu.ru.spi.model.entity.TemplateType;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.ZonedDateTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonTypeInfo(
    use = JsonTypeInfo.Id.NAME,
    include = JsonTypeInfo.As.EXISTING_PROPERTY,
    property = "type",
    visible = true
)
@JsonSubTypes({
    @JsonSubTypes.Type(value = CreateSpringTemplateRequest.class, name = "SPRING")
})
public class CreateTemplateRequest {

    @Schema(description = "Тип шаблона", example = "SPRING", nullable = true)
    private TemplateType type;

    @Schema(description = "Пользовательское название шаблона",
        example = "Шаблона МС-а проекта SPI", nullable = true)
    private String title;

    @Schema(description = "Пользовательское описание шаблона",
        example = "Шаблон с java 17, spring 2.4.9")
    private String description;

}
