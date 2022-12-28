package ccfit.nsu.ru.spi.model.entity.dependencies;

import ccfit.nsu.ru.spi.model.entity.templates.SpringTemplateEntity;
import ccfit.nsu.ru.spi.model.entity.templates_configs.SpringTemplateConfigEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class SpringDependencyEntity {
    @Id
    @SequenceGenerator(name = "spring_dependency_sequence", sequenceName = "spring_dependency_id_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "spring_dependency_sequence")
    private Long id;

    private String artifactId;
    private String groupId;

    @Enumerated(EnumType.STRING)
    private SpringDependencyVersionType versionType;

    private String version;

    @ManyToOne(fetch = FetchType.LAZY)
    private SpringTemplateConfigEntity templateConfig;

    @ManyToOne(fetch = FetchType.LAZY)
    private SpringTemplateEntity template;

    public String getName() {
        return artifactId + "." + groupId + buildVersion();
    }

    private String buildVersion() {
        if (versionType == null) {
            return "";
        }

        switch (versionType) {

            case COMMON -> {
                return "." + version;
            }
            case LATEST -> {
                return "+";
            }
            case INHERITED -> {
                return "";
            }
            default -> throw new IllegalArgumentException("Unknown version type " + versionType);
        }
    }

}
