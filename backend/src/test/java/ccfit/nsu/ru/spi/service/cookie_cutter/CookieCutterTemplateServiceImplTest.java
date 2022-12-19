package ccfit.nsu.ru.spi.service.cookie_cutter;

import ccfit.nsu.ru.spi.model.inner.SpringDependencyTemplateParams;
import ccfit.nsu.ru.spi.model.inner.SpringTemplateParams;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Map;
import java.util.Objects;

class CookieCutterTemplateServiceImplTest {

    private final CookieCutterTemplateServiceImpl cookieCutterTemplateService = new CookieCutterTemplateServiceImpl();

    @Test
    void generateTemplateProjectFiles() throws IOException {

        SpringTemplateParams templateParams = new SpringTemplateParams();
        templateParams.setProjectName("demoProject");
        templateParams.setApplicationName("Demo");
        templateParams.setPackageName("ccfit.nsu.ru.kotelnikova.check");
        templateParams.setJavaVersion("17");
        templateParams.setSpringBootVersion("2.7.1");

        Map<String, SpringDependencyTemplateParams> dependencies = Map.of(
                "MapStruct",
                SpringDependencyTemplateParams.builder()
                        .artifactId("mapstruct")
                        .groupId("org.mapstruct")
                        .version("+")
                        .build(),
                "Java JWT",
                SpringDependencyTemplateParams.builder()
                        .artifactId("jjwt")
                        .groupId("io.jsonwebtoken")
                        .version("")
                        .build(),
                "Jackson Databind", SpringDependencyTemplateParams.builder()
                        .artifactId("jackson-databind")
                        .groupId("com.fasterxml.jackson.core")
                        .version("2.12.6.1")
                        .build()
        );

        templateParams.setDependencies(dependencies);

        var tempDirectory = cookieCutterTemplateService.generateTemplateProjectFiles(templateParams);
        Files.walk(tempDirectory).forEach(file -> System.out.println(file.getFileName()));
        System.out.println();
        printDirectoryTree(1, tempDirectory.toFile());

    }

    static void printDirectoryTree(int indent, File file) {
        for (int i = 0; i < indent; i++) {
            System.out.print('-');
        }

        System.out.println(file.getName());

        if (file.isDirectory()) {
            for (File value : Objects.requireNonNull(file.listFiles())) printDirectoryTree(indent + 4, value);
        }
    }
}