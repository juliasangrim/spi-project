package ccfit.nsu.ru.spi.service.cookie_cutter;

import ccfit.nsu.ru.spi.model.inner.SpringTemplateParams;

import java.io.IOException;
import java.nio.file.Path;

public interface CookieCutterTemplateService {

    Path instantiateTemplate(SpringTemplateParams templateParams) throws IOException;

}
