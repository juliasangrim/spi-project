package ccfit.nsu.ru.spi.model.entity;

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

    @ElementCollection
    @CollectionTable(
            name = "available_java_version",
            joinColumns = @JoinColumn(name = "template_config")
    )
    @Column(name = "version")
    private Set<Integer> availableVersions;

    private String defaultSpringBootVersion;

    @ElementCollection
    @CollectionTable(
            name = "spring_boot_version",
            joinColumns = @JoinColumn(name = "template_config")
    )
    @Column(name = "version")
    private Set<String> springBootVersions;
}
