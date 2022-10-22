package ccfit.nsu.ru.spi.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Getter
@Setter
@Table(name = "templates_cfg")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class TemplateConfigEntity {

    @Id
    @SequenceGenerator(name = "templates_sequence", sequenceName = "templates_id_sequence", allocationSize = 1)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "templates_sequence")
    private Long id;

    @Enumerated(EnumType.STRING)
    private TemplateType type;

    private String typeName;

    private ZonedDateTime lastUpdateTime;
}
