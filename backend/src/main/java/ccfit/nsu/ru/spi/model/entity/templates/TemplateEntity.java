package ccfit.nsu.ru.spi.model.entity.templates;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Getter
@Setter
@ToString
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type")
public class TemplateEntity {
    @Id
    @SequenceGenerator(name = "template_sequence", sequenceName = "template_id_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "template_sequence")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(updatable = false, insertable = false)
    private TemplateType type;

    private String description;
    private String title;

    private ZonedDateTime lastUpdateTime;
}
