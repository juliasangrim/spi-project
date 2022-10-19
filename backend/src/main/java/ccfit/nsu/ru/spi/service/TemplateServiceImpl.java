package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.model.dto.request.templates.CreateTemplateRequest;
import ccfit.nsu.ru.spi.model.dto.response.templates.TemplateInfoResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TemplateServiceImpl implements TemplateService {

    @Override
    public void createTemplate(CreateTemplateRequest request) {
        // TODO to implement
    }

    @Override
    public List<TemplateInfoResponse> getTemplatesInfo() {
        // TODO to implement
        return null;
    }

}
