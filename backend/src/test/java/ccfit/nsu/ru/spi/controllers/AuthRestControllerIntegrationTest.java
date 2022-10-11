package ccfit.nsu.ru.spi.controllers;

import ccfit.nsu.ru.spi.configs.SecurityConfig;
import ccfit.nsu.ru.spi.exception.CustomExceptionHandler;
import ccfit.nsu.ru.spi.model.dto.request.AuthRequest;
import ccfit.nsu.ru.spi.service.AuthService;
import ccfit.nsu.ru.spi.service.CustomUserDetailsService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(classes =
        {LocalValidatorFactoryBean.class, JacksonAutoConfiguration.class,
        AuthController.class, CustomExceptionHandler.class})
@ContextConfiguration(classes = SecurityConfig.class)
@AutoConfigureMockMvc
@EnableWebMvc
public class AuthRestControllerIntegrationTest {

    @MockBean
    private AuthService authService;

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private CustomUserDetailsService customUserDetailsService;

    @ParameterizedTest
    @CsvSource({"example@example.com,example"})
    public void whenEmailAndPasswordValidSignIn_theReturns200AndEmptyError(String email, String password) throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail(email);
        validAuthRequest.setPassword(password);

        mvc.perform(post("/v1/api/auth/signIn").
                        content(objectMapper.writeValueAsString(validAuthRequest)).
                        contentType(MediaType.APPLICATION_JSON).
                        accept(MediaType.APPLICATION_JSON)).
                andExpect(status().isOk()).
                andExpect(jsonPath("$.apiError").isEmpty());
    }

    @ParameterizedTest
    @CsvSource({",example", "   ,example",
            "example@gmail.com,", "example@gmail.com,   "})
    public void whenEmailAndPasswordNotValid_theReturns200AndNotEmptyError(String email, String password) throws Exception {
        AuthRequest notValidAuthRequest = new AuthRequest();
        notValidAuthRequest.setEmail(email);
        notValidAuthRequest.setPassword(password);

        mvc.perform(post("/v1/api/auth/signIn").
                        content(objectMapper.writeValueAsString(notValidAuthRequest)).
                        contentType(MediaType.APPLICATION_JSON).
                        accept(MediaType.APPLICATION_JSON)).
                andExpect(status().isOk()).
                andExpect(jsonPath("$.apiError").isNotEmpty());

    }

    @ParameterizedTest
    @CsvSource({"example@gmail.com,Example1"})
    public void whenEmailAndPasswordValidSignUp_theReturns200AndEmptyError(String email, String password) throws Exception {
        AuthRequest validAuthRequest = new AuthRequest();
        validAuthRequest.setEmail(email);
        validAuthRequest.setPassword(password);

        mvc.perform(post("/v1/api/auth/signup").
                        content(objectMapper.writeValueAsString(validAuthRequest)).
                        contentType(MediaType.APPLICATION_JSON).
                        accept(MediaType.APPLICATION_JSON)).
                andExpect(status().isOk()).
                andExpect(jsonPath("$.apiError").isEmpty());
    }

    @ParameterizedTest
    @CsvSource({"example@@example.com,Example1",
            "example@gmail.com,Xample1",
            "example@gmail.com,Example1Example1Example1Example1Example1",
            "example@gmail.com,*******",
            "example@gmail.com,example1",
            "example@gmail.com,Exxample"
    })
    public void whenEmailNotValidSignUp_theReturns200AndNotEmptyError(String email, String password) throws Exception {
        AuthRequest notValidAuthRequest = new AuthRequest();
        notValidAuthRequest.setEmail(email);
        notValidAuthRequest.setPassword(password);

        mvc.perform(post("/v1/api/auth/signup").
                        content(objectMapper.writeValueAsString(notValidAuthRequest)).
                        contentType(MediaType.APPLICATION_JSON).
                        accept(MediaType.APPLICATION_JSON)).
                andExpect(status().isOk()).
                andExpect(jsonPath("$.apiError").isNotEmpty());
    }
}