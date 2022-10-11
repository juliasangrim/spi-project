package ccfit.nsu.ru.spi.controllers;

import ccfit.nsu.ru.spi.model.dto.request.AuthRequest;
import ccfit.nsu.ru.spi.service.AuthService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class AuthRestControllerIntegrationTest {

    @MockBean
    private AuthService authService;

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void whenEmailAndPasswordValidSignIn_theReturns200AndEmptyError() throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail("example@gmail.com");
        validAuthRequest.setPassword("example");

        mvc.perform(post("/v1/api/auth/signIn")
                        .content(objectMapper.writeValueAsString(validAuthRequest))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.apiError").isEmpty());
    }

    @Test
    public void whenEmailNullSignIn_theReturns200AndNotEmptyError() throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail("");
        validAuthRequest.setPassword("qwerty");

        mvc.perform(post("/v1/api/auth/signIn")
                .content(objectMapper.writeValueAsString(validAuthRequest))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.apiError").isNotEmpty());
    }

    @Test
    public void whenEmailWhiteSpacesSignIn_theReturns200AndNotEmptyError() throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail("    ");
        validAuthRequest.setPassword("example");

        mvc.perform(post("/v1/api/auth/signIn")
                        .content(objectMapper.writeValueAsString(validAuthRequest))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.apiError").isNotEmpty());
    }

    @Test
    public void whenPasswordNullSignIn_theReturns200AndNotEmptyError() throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail("example@gmail.com");
        validAuthRequest.setPassword("");

        mvc.perform(post("/v1/api/auth/signIn")
                        .content(objectMapper.writeValueAsString(validAuthRequest))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.apiError").isNotEmpty());
    }

    @Test
    public void whenEmailAndPasswordWhiteSpacesSignIn_theReturns200AndNotEmptyError() throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail("   ");
        validAuthRequest.setPassword("   ");

        mvc.perform(post("/v1/api/auth/signIn")
                        .content(objectMapper.writeValueAsString(validAuthRequest))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.apiError").isNotEmpty());
    }

    @Test
    public void whenEmailAndPasswordValidSignUp_theReturns200AndEmptyError() throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail("example@gmail.com");
        validAuthRequest.setPassword("Example1");

        mvc.perform(post("/v1/api/auth/signup")
                        .content(objectMapper.writeValueAsString(validAuthRequest))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.apiError").isEmpty());
    }

    @Test
    public void whenEmailNotValidSignUp_theReturns200AndNotEmptyError() throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail("example@@gmail.com");
        validAuthRequest.setPassword("Example1");

        mvc.perform(post("/v1/api/auth/signup")
                        .content(objectMapper.writeValueAsString(validAuthRequest))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.apiError").isNotEmpty());
    }

    @Test
    public void whenPasswordMinLengthNSignUp_theReturns200AndNotEmptyError() throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail("example@gmail.com");
        validAuthRequest.setPassword("Xample1");

        mvc.perform(post("/v1/api/auth/signup")
                        .content(objectMapper.writeValueAsString(validAuthRequest))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.apiError").isNotEmpty());
    }

    @Test
    public void whenPasswordMaxLengthSignUp_theReturns200AndNotEmptyError() throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail("example@gmail.com");
        validAuthRequest.setPassword("Example1Example1Example1Example1Example1");

        mvc.perform(post("/v1/api/auth/signup")
                        .content(objectMapper.writeValueAsString(validAuthRequest))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.apiError").isNotEmpty());
    }

    @Test
    public void whenPasswordNotLatinSignUp_theReturns200AndNotEmptyError() throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail("example@gmail.com");
        validAuthRequest.setPassword("*******");

        mvc.perform(post("/v1/api/auth/signup")
                        .content(objectMapper.writeValueAsString(validAuthRequest))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.apiError").isNotEmpty());
    }

    @Test
    public void whenPasswordNoUpperCaseSignUp_theReturns200AndNotEmptyError() throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail("example@gmail.com");
        validAuthRequest.setPassword("example1");

        mvc.perform(post("/v1/api/auth/signup")
                        .content(objectMapper.writeValueAsString(validAuthRequest))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.apiError").isNotEmpty());
    }

    @Test
    public void whenPasswordNoNumberSignUp_theReturns200AndNotEmptyError() throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail("example@gmail.com");
        validAuthRequest.setPassword("Exxample");

        mvc.perform(post("/v1/api/auth/signup")
                        .content(objectMapper.writeValueAsString(validAuthRequest))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.apiError").isNotEmpty());
    }
}
