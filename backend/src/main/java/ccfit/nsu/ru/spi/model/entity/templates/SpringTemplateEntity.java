package ccfit.nsu.ru.spi.model.entity.templates;

import ccfit.nsu.ru.spi.model.entity.dependencies.SpringDependencyEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@DiscriminatorValue(TemplateType.Values.SPRING)
public class SpringTemplateEntity extends TemplateEntity {
    private Integer javaVersion;
    private String springVersion;

    @OneToMany(mappedBy = "template", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SpringDependencyEntity> dependencies;
}
