package ccfit.nsu.ru.spi.model.dto.response.common;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum ApiErrors {

    BAD_REQUEST(90001, "Bad request"),
    NOT_FOUND(90002, "Not found"),
    VALIDATION_ERROR(90003, "Validation error");

    private final int code;
    private final String message;


    public ApiError createError() {
        return new ApiError(code, message);
    }

    public ApiError createError(String message) {
        return new ApiError(code, message);
    }

}
