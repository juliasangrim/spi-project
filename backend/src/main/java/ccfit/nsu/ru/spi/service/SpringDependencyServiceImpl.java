package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.model.dto.request.dependecies.SpringDependencyDTO;
import ccfit.nsu.ru.spi.model.dto.request.dependecies.SpringDependencySearchRequest;
import ccfit.nsu.ru.spi.model.dto.request.dependecies.SpringDependencyVersionSearchRequest;
import ccfit.nsu.ru.spi.model.dto.request.dependecies.SpringDependencyVersionResponse;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class SpringDependencyServiceImpl implements SpringDependencyService {

    @Override
    public List<SpringDependencyDTO> getDependencies(SpringDependencySearchRequest request) {
        //TODO to implement
        return null;
    }

    @Override
    public List<SpringDependencyVersionResponse> getVersions(SpringDependencyVersionSearchRequest request) {
        //TODO to implement
        return null;
    }

}
