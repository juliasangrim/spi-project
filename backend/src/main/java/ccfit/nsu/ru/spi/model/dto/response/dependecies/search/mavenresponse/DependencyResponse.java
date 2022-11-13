package ccfit.nsu.ru.spi.model.dto.response.dependecies.search.mavenresponse;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class DependencyResponse {
    @JsonProperty("docs")
    private List<DependencyInfo> dependencyInfoList;
}
