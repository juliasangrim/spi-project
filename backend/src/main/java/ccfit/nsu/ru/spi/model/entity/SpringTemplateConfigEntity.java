package ccfit.nsu.ru.spi.model.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Getter
@Setter
@DiscriminatorValue(TemplateType.Values.SPRING)
public class SpringTemplateConfigEntity extends TemplateConfigEntity {

    private Integer defaultJavaVersion;

    @ElementCollection
    // TODO Переделать на @CollectionTable
//    @JoinTable(name = "template_java_version",
//        joinColumns = @JoinColumn(name = "java_version"),
//        foreignKey = @ForeignKey(name = "fk_java_version_id"),
//        inverseJoinColumns = @JoinColumn(name = "template"),
//        inverseForeignKey = @ForeignKey(name = "fk_template_java_version_template_config"))
    private Set<Integer> availableVersions;

    private String defaultSpringBootVersion;

    @ElementCollection
    // TODO Переделать на @CollectionTable
//    @JoinTable(name = "template_spring_boot_version",
//        joinColumns = @JoinColumn(name = "spring_boot_version"),
//        foreignKey = @ForeignKey(name = "fk_spring_boot_version_id"),
//        inverseJoinColumns = @JoinColumn(name = "template"),
//        inverseForeignKey = @ForeignKey(name = "fk_template_spring_boot_version_template_config"))
    private Set<String> springBootVersions;

}
