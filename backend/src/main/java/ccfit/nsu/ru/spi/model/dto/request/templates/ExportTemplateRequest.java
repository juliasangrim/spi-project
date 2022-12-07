package ccfit.nsu.ru.spi.model.dto.request.templates;

import ccfit.nsu.ru.spi.model.entity.templates.TemplateType;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.swagger.v3.oas.annotations.media.Schema;
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
    @JsonSubTypes.Type(value = ExportSpringTemplateRequest.class, name = "SPRING")
})
public class ExportTemplateRequest {

    @Schema(description = "Идентификатор", example = "1000L", required = true)
    private Long id;

    @Schema(description = "Тип шаблона", example = "SPRING", required = true)
    private TemplateType type;

}
