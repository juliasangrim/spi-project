package ccfit.nsu.ru.spi.exception;

import ccfit.nsu.ru.spi.model.dto.response.common.ApiErrors;
import ccfit.nsu.ru.spi.model.dto.response.common.ResponseWrapper;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@Slf4j
@Component
@RestControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers,
                                                                  HttpStatus status,
                                                                  WebRequest request) {
        List<ObjectError> errors = ex.getBindingResult().getAllErrors();

        Map<String, String> errorsMap = errors.stream()
            .map(e -> {
                String field = (e instanceof FieldError error)
                    ? error.getField()
                    : e.getObjectName();
                return Pair.of(field, StringUtils.defaultString(e.getDefaultMessage()));
            })
            .collect(Collectors.toMap(Pair::getFirst, Pair::getSecond));

        ResponseWrapper<Object> response = new ResponseWrapper<>(
            ApiErrors.BAD_REQUEST.createError(ex.getMessage()).with(errorsMap));

        return new ResponseEntity<>(response, headers, HttpStatus.OK);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.OK)
    public ResponseWrapper<Object> handle(IllegalArgumentException e) {
        log.error("Unexpected exception", e);
        return new ResponseWrapper<>(ApiErrors.BAD_REQUEST.createError(e.getMessage()));
    }

}
