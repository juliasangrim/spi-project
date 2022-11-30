package ccfit.nsu.ru.spi.service.templates_export;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.util.ReflectionUtils;

import java.io.IOException;
import java.nio.file.Paths;

@ExtendWith(MockitoExtension.class)
class ExportTemplateServiceImplTest {

    @InjectMocks
    private ExportTemplateServiceImpl uut;

    @BeforeEach
    void setUp() throws NoSuchFieldException {
        ReflectionUtils.setField(ExportTemplateServiceImpl.class.getDeclaredField("buffer_size"), uut, 4096);
    }

    @Test
    void exportTemplate() throws IOException {
        uut.exportTemplate(Paths.get("a"));
    }
}