package ccfit.nsu.ru.spi.model.dto.response.common;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ResponseWrapper<T> {

    private ApiError apiError;

    private T data;

    public ResponseWrapper(ApiError siApiError) {
        this.apiError = siApiError;
    }

    public ResponseWrapper(T data) {
        this.data = data;
    }

    public static ResponseWrapper<OkStatus> okResponse() {
        return new ResponseWrapper<>(new OkStatus());
    }

    @Getter
    @Setter
    @EqualsAndHashCode
    public static class OkStatus {
        private String status = "OK";
    }

}
