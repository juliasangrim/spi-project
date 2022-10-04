package ccfit.nsu.ru.spi.exception;

import ccfit.nsu.ru.spi.model.dto.response.common.ApiError;

public class BusinessException extends RuntimeException {

    private final ApiError error;

    public BusinessException(ApiError error) {
        super(error.getMessage());
        this.error = error;
    }

}
