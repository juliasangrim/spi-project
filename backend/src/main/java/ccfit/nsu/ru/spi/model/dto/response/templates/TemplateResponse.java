package ccfit.nsu.ru.spi.model.dto.response.templates;

import ccfit.nsu.ru.spi.model.entity.templates.TemplateType;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(subTypes = {
    SpringTemplateResponse.class
})
public class TemplateResponse {

    @Schema(description = "Идентификатор", example = "100", required = true)
    private Long id;

    @Schema(description = "Тип шаблона", example = "SPRING", required = true)
    private TemplateType type;

    @Schema(description = "Пользовательское название шаблона",
        example = "Шаблона МС-а проекта SPI", required = true)
    private String title;

    @Schema(description = "Пользовательское описание шаблона",
        example = "Шаблон с java 17, spring 2.4.9")
    private String description;

}
