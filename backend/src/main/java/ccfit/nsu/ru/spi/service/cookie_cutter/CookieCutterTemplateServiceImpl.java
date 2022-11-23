package ccfit.nsu.ru.spi.service.cookie_cutter;

import ccfit.nsu.ru.spi.model.inner.SpringTemplateParams;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.apache.commons.io.FileUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;

import static org.springframework.util.ResourceUtils.CLASSPATH_URL_PREFIX;
import static org.springframework.util.ResourceUtils.getFile;

public class CookieCutterTemplateServiceImpl implements CookieCutterTemplateService {

    private static final ObjectMapper OBJECT_MAPPER = objectMapper();
    private static final String TEMPLATES_SPRING_RESOURCE_LOCATION = "templates/spring";

    private static ObjectMapper objectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
        return objectMapper;
    }

    @Override
    public Path generateTemplateProjectFiles(SpringTemplateParams templateParams) throws IOException {
        Path rootDirectory = Paths.get("./backend");
        Path tempDirectory = Files.createTempDirectory(rootDirectory, null);

        String projectPackageDirectoriesStructure = tempDirectory.toString() + "/" + templateParams.getPackageName().replace("\\.", "/");
//        FileSystemUtils.deleteRecursively(targetTmpDirectory);
        Path targetDirectory = Files.createDirectories(Path.of(projectPackageDirectoriesStructure));

        Path templateDirectory = getFile(CLASSPATH_URL_PREFIX + TEMPLATES_SPRING_RESOURCE_LOCATION).toPath();

        FileUtils.copyDirectory(templateDirectory.toFile(), targetDirectory.toFile());

        Path cookiecutterJsonPath = Paths.get(tempDirectory.toString(), "cookiecutter.json");
        if (!Files.exists(cookiecutterJsonPath)) {
            Files.createFile(cookiecutterJsonPath);
        }

        Map<String, String> projectParams = Map.of(
                "project_name", templateParams.getProjectName(),
                "application_name", templateParams.getApplicationName(),
                "package_name", templateParams.getPackageName(),
                "java_version", templateParams.getJavaVersion(),
                "spring_boot_version", templateParams.getSpringBootVersion()
        );
        OBJECT_MAPPER.writeValue(cookiecutterJsonPath.toFile(), projectParams);

        return tempDirectory;
    }

}
