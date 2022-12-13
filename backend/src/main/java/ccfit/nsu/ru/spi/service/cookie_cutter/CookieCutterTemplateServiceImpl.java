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
import jep.Interpreter;
import jep.SharedInterpreter;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;

import static org.springframework.util.ResourceUtils.CLASSPATH_URL_PREFIX;
import static org.springframework.util.ResourceUtils.getFile;

@Service
public class CookieCutterTemplateServiceImpl implements CookieCutterTemplateService {

    private static final ObjectMapper OBJECT_MAPPER = objectMapper();
    private static final String TEMPLATES_SPRING_RESOURCE_LOCATION = "templates/spring";
    private static final String ROOT_DIRECTORY_RELATIVE_PATH = "";

    private static ObjectMapper objectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
        return objectMapper;
    }

    public Path generateTemplateProjectFiles(SpringTemplateParams templateParams) throws IOException {
        Path rootDirectory = Paths.get(ROOT_DIRECTORY_RELATIVE_PATH);
        Path tempDirectory = Files.createTempDirectory(rootDirectory, null);

        String projectPackageDirectoriesStructure = tempDirectory.toString();
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

    @Override
    public Path instantiateTemplate(SpringTemplateParams templateParams) throws IOException {
        Path targetDirPath = generateTemplateProjectFiles(templateParams);
        String targetDir = String.valueOf(targetDirPath.toRealPath()).replace('\\', '/');
        Path rootDirectory = Paths.get(ROOT_DIRECTORY_RELATIVE_PATH);
        Path outputPath = Files.createTempDirectory(rootDirectory, null).toRealPath();
        String outputDir = String.valueOf(outputPath).replace('\\', '/');
        try (Interpreter interpreter = new SharedInterpreter()) {
            interpreter.exec("from cookiecutter.main import cookiecutter");
            interpreter.exec("cookiecutter('" + targetDir + "'," +
                    " no_input=True, output_dir='" + outputDir +"')");
        }

        FileSystemUtils.deleteRecursively(targetDirPath);
        return outputPath;
    }
}
