package ccfit.nsu.ru.spi.service.templates_export;

import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.nio.file.Path;

public interface ExportTemplateService {
    ResponseEntity<Resource> exportTemplate(Path zipDirPath) throws IOException;
}
