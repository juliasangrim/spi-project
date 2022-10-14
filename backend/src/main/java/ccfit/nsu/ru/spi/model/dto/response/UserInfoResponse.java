package ccfit.nsu.ru.spi.model.dto.response;

import ccfit.nsu.ru.spi.security.UserRole;
import java.util.ArrayList;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserInfoResponse {

    private String email;

    private List<UserRole> roles;

}
