package ccfit.nsu.ru.spi.model.inner;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

@NoArgsConstructor
@AllArgsConstructor
public class SpringTemplateParams {

    @Setter(onMethod = @__({@JsonSetter(value = "project_name")}))
    @Getter(onMethod = @__({@JsonGetter(value = "project_name")}))
    private String projectName;

    @Setter(onMethod = @__({@JsonSetter(value = "application_name")}))
    @Getter(onMethod = @__({@JsonGetter(value = "application_name")}))
    private String applicationName;

    @Setter(onMethod = @__({@JsonSetter(value = "package_name")}))
    @Getter(onMethod = @__({@JsonGetter(value = "package_name")}))
    private String packageName;

    @Setter(onMethod = @__({@JsonSetter(value = "java_version")}))
    @Getter(onMethod = @__({@JsonGetter(value = "java_version")}))
    private String javaVersion;

    @Setter(onMethod = @__({@JsonSetter(value = "spring_boot_version")}))
    @Getter(onMethod = @__({@JsonGetter(value = "spring_boot_version")}))
    private String springBootVersion;

    @Setter(onMethod = @__({@JsonSetter(value = "dependencies")}))
    @Getter(onMethod = @__({@JsonGetter(value = "dependencies")}))
    private Map<String, SpringDependencyTemplateParams> dependencies;

}
