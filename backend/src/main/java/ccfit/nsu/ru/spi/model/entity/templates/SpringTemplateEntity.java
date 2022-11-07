package ccfit.nsu.ru.spi.model.entity.templates;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@Getter
@Setter
@ToString
@DiscriminatorValue(TemplateType.Values.SPRING)
public class SpringTemplateEntity extends TemplateEntity {
    private Integer javaVersion;
    private String springVersion;
}
