package ccfit.nsu.ru.spi.model.inner;

import lombok.AllArgsConstructor;
import org.springframework.core.io.AbstractResource;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

@AllArgsConstructor
public class FileResource extends AbstractResource {
    private final String fileName;
    private final byte[] content;


    @Override
    public String getDescription() {
        return fileName;
    }

    @Override
    public InputStream getInputStream() {
        return new ByteArrayInputStream(content);
    }

    public byte[] getContent() {
        return content;
    }


}
