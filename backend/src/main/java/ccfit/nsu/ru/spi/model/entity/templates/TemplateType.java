package ccfit.nsu.ru.spi.model.entity.templates;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TemplateType {
    SPRING("Spring");

    private final String name;

    public static class Values {
        public static final String SPRING = "SPRING";
    }

}
