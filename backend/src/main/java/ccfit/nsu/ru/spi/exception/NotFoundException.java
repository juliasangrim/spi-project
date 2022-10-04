package ccfit.nsu.ru.spi.exception;

import ccfit.nsu.ru.spi.model.dto.response.common.ApiErrors;

public class NotFoundException extends BusinessException {

    public NotFoundException() {
        super(ApiErrors.VALIDATION_ERROR.createError());
    }

    public NotFoundException(String message) {
        super(ApiErrors.VALIDATION_ERROR.createError(message));
    }

}
