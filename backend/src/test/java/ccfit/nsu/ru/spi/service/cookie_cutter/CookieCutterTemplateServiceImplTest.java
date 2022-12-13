package ccfit.nsu.ru.spi.service.cookie_cutter;

import ccfit.nsu.ru.spi.model.inner.SpringTemplateParams;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Objects;

class CookieCutterTemplateServiceImplTest {

    private final CookieCutterTemplateServiceImpl cookieCutterTemplateService = new CookieCutterTemplateServiceImpl();

    @Test
    void generateTemplateProjectFiles() throws IOException {

        SpringTemplateParams templateParams = new SpringTemplateParams();
        templateParams.setProjectName("demoProject");
        templateParams.setApplicationName("Demo");
        templateParams.setPackageName("ccfit.nsu.ru.kotelnikova");
        templateParams.setJavaVersion("17");
        templateParams.setSpringBootVersion("2.7.1");

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