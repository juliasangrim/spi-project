package ccfit.nsu.ru.spi.model.dto.request.config;

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
    @JsonSubTypes.Type(value = UpdateSpringTemplateConfigRequest.class, name = "SPRING")
})
public class UpdateTemplateConfigRequest {

    private Long id;

    @Schema(description = "Тип шаблона", example = "SPRING", required = true)
    private TemplateType type;

}
