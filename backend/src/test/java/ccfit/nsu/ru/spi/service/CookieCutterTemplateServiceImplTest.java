package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.model.inner.SpringTemplateParams;
import ccfit.nsu.ru.spi.service.cookie_cutter.CookieCutterTemplateService;
import ccfit.nsu.ru.spi.service.cookie_cutter.CookieCutterTemplateServiceImpl;
import org.junit.jupiter.api.Test;

import java.io.IOException;


class CookieCutterTemplateServiceImplTest {

    private final CookieCutterTemplateService cookieCutterTemplateService = new CookieCutterTemplateServiceImpl();

    @Test
    void generateTemplateProjectFiles() throws IOException {

        SpringTemplateParams templateParams = new SpringTemplateParams();
        templateParams.setProjectName("demoProject");
        templateParams.setApplicationName("Demo");
        templateParams.setPackageName("ccfit.nsu.ru.kotelnikova");
        templateParams.setJavaVersion("17");
        templateParams.setSpringBootVersion("2.7.1");

        cookieCutterTemplateService.generateTemplateProjectFiles(templateParams);

    }
}