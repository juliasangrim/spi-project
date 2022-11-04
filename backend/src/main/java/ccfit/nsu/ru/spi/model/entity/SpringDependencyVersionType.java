package ccfit.nsu.ru.spi.model.entity;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = """
     Version type
     * `COMMON` - Contains the version number in a separate field
     * `LATEST` - Latest version = '+' instead of version
     * `INHERITED` - Inherited from parent POM = no version
    """,
    enumAsRef = true)
public enum SpringDependencyVersionType {
    COMMON,
    LATEST,
    INHERITED
}
