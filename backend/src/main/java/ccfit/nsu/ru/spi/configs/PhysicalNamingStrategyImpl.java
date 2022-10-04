package ccfit.nsu.ru.spi.configs;

import org.hibernate.boot.model.naming.Identifier;
import org.hibernate.engine.jdbc.env.spi.JdbcEnvironment;
import org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy;

public class PhysicalNamingStrategyImpl extends SpringPhysicalNamingStrategy {

    private static final String ENTITY_POSTFIX = "Entity";

    @Override
    public Identifier toPhysicalCatalogName(Identifier name, JdbcEnvironment jdbcEnvironment) {
        return name;
    }

    @Override
    public Identifier toPhysicalSchemaName(Identifier name, JdbcEnvironment jdbcEnvironment) {
        return name;
    }

    @Override
    public Identifier toPhysicalTableName(Identifier name, JdbcEnvironment jdbcEnvironment) {

        Identifier identifier = super.toPhysicalTableName(
                Identifier.toIdentifier(name.getText().replace(ENTITY_POSTFIX, "")), jdbcEnvironment);
        return Identifier.toIdentifier(identifier.getText());
    }

    @Override
    public Identifier toPhysicalSequenceName(Identifier name, JdbcEnvironment jdbcEnvironment) {
        return name;
    }

}