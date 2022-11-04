package ccfit.nsu.ru.spi.model.dto.request.dependecies;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SpringDependencySearchRequest {

    @Schema(description = "Терм для поиска", example = "Spring Data", required = true)
    private String searchTerm;

}
