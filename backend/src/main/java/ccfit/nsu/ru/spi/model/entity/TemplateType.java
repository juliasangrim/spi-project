package ccfit.nsu.ru.spi.model.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TemplateType {
    SPRING("Spring");

    private final String name;

}
