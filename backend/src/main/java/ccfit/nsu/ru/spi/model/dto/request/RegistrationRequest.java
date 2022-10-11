package ccfit.nsu.ru.spi.model.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Pattern;

@Getter
@Setter
public class RegistrationRequest {
    public final static String emailRFC5322Regex = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$";
    public final static String passwordRegex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$";

    @Pattern(regexp = emailRFC5322Regex, message = "Email must conform to the standard RFC5322.")
    private String email;

    @Pattern(regexp = passwordRegex, message = "Password must be a minimum of 8 " +
            "and maximum of 32 characters long" +
            "and contain at least one uppercase and one lowercase letter (A, z), " +
            "one numeric character (0-9).")
    private String password;

}
