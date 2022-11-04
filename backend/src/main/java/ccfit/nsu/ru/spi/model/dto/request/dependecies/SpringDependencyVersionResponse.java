package ccfit.nsu.ru.spi.model.dto.request.dependecies;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SpringDependencyVersionResponse {

    @Schema(description = "Version name", example = "1.5.2.Final", required = true)
    private String version;

}
