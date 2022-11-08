package ccfit.nsu.ru.spi.model.entity.templates_configs;

import ccfit.nsu.ru.spi.model.entity.templates.TemplateType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Getter
@Setter
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type")
public class TemplateConfigEntity {

    @Id
    @SequenceGenerator(name = "template_config_sequence",
            sequenceName = "template_config_id_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "template_config_sequence")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(updatable = false, insertable = false)
    private TemplateType type;

    private ZonedDateTime lastUpdateTime;
}
