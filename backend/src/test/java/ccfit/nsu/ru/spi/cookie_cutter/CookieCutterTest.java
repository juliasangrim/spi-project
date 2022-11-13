package ccfit.nsu.ru.spi.cookie_cutter;

import static org.springframework.util.ResourceUtils.CLASSPATH_URL_PREFIX;
import static org.springframework.util.ResourceUtils.getFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;
import jep.Interpreter;
import jep.SharedInterpreter;
import org.apache.commons.io.FileUtils;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.util.FileSystemUtils;

@Disabled("For manual testing")
class CookieCutterTest {

    private static final ObjectMapper OBJECT_MAPPER = objectMapper();

    private static ObjectMapper objectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
        return objectMapper;
    }

    @Test
    void cookiecutterTest() throws IOException {
        Path targetDirPath = Path.of("./examples/spring");
        FileSystemUtils.deleteRecursively(targetDirPath);
        Path targetDir = Files.createDirectories(targetDirPath);

        Path templateDir = getFile(CLASSPATH_URL_PREFIX + "templates/spring").toPath();
        FileUtils.copyDirectory(templateDir.toFile(), targetDir.toFile());

        Path cookiecutterJsonPath = Paths.get(targetDir.toString(), "cookiecutter.json");
        if (!Files.exists(cookiecutterJsonPath)) {
            Files.createFile(cookiecutterJsonPath);
        }

        Map<String, String> templateParams = Map.of(
            "project_name", "demoProject",
            "application_name", "Demo",
            "package_name", "ccfit.nsu.ru.khudyakov",
            "java_version", "17",
            "spring_boot_version", "2.7.1"
        );
        OBJECT_MAPPER.writeValue(cookiecutterJsonPath.toFile(), templateParams);

        try (Interpreter interpreter = new SharedInterpreter()) {
            interpreter.exec("from cookiecutter.main import cookiecutter");
            interpreter.exec("cookiecutter('" + targetDirPath.toAbsolutePath() + "', no_input=True)");
        }
    }

}
