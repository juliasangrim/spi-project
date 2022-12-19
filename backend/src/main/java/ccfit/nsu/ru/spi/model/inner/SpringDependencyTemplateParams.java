package ccfit.nsu.ru.spi.model.inner;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpringDependencyTemplateParams {

    @Setter(onMethod = @__({@JsonSetter(value = "artifact_id")}))
    @Getter(onMethod = @__({@JsonGetter(value = "artifact_id")}))
    private String artifactId;

    @Setter(onMethod = @__({@JsonSetter(value = "group_id")}))
    @Getter(onMethod = @__({@JsonGetter(value = "group_id")}))
    private String groupId;

    @Setter(onMethod = @__({@JsonSetter(value = "version")}))
    @Getter(onMethod = @__({@JsonGetter(value = "version")}))
    private String version;

}
