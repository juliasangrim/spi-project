package ccfit.nsu.ru.spi.model.entity;

import javax.persistence.DiscriminatorValue;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
@DiscriminatorValue(TemplateType.Values.SPRING)
public class SpringTemplateEntity extends TemplateEntity {
    private Integer javaVersion;
    private String springVersion;
}
