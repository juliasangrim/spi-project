package ccfit.nsu.ru.spi.model.dto.response.common;

import lombok.*;

import java.util.Map;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ApiError {
    private Integer code;
    private String message;

    private Map<String, String> data;

    public ApiError(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public ApiError with(Map<String, String> data) {
        return new ApiError(this.code, this.message, data);
    }

}
