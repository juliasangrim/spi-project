package ccfit.nsu.ru.spi.model.dto.response.dependencies.search.mavenresponse;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
public class DependencyInfo {
    @JsonProperty("a")
    private String artifactId;

    @JsonProperty("g")
    private String groupId;

    private String latestVersion;

    @JsonProperty("v")
    private String version;

    private Date timestamp;
}