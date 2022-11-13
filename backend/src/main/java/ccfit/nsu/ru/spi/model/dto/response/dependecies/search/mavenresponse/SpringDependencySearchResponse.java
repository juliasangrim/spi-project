package ccfit.nsu.ru.spi.model.dto.response.dependecies.search.mavenresponse;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SpringDependencySearchResponse {
    @JsonProperty("response")
    private DependencyResponse response;
}
