package ccfit.nsu.ru.spi.model.entity.templates_configs;

import ccfit.nsu.ru.spi.model.entity.templates.TemplateType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@DiscriminatorValue(TemplateType.Values.SPRING)
public class SpringTemplateConfigEntity extends TemplateConfigEntity {

    private Integer defaultJavaVersion;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
            name = "available_java_version",
            joinColumns = @JoinColumn(name = "template_config")
    )
    @Column(name = "version")
    private Set<Integer> availableVersions;

    private String defaultSpringBootVersion;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
            name = "spring_boot_version",
            joinColumns = @JoinColumn(name = "template_config")
    )
    @Column(name = "version")
    private Set<String> springBootVersions;
}
