package ccfit.nsu.ru.spi.service;

import ccfit.nsu.ru.spi.model.dto.request.dependecies.SpringDependencyDTO;
import ccfit.nsu.ru.spi.model.dto.request.dependecies.SpringDependencySearchRequest;
import ccfit.nsu.ru.spi.model.dto.request.dependecies.SpringDependencyVersionSearchRequest;
import ccfit.nsu.ru.spi.model.dto.request.dependecies.SpringDependencyVersionResponse;
import java.util.List;

public interface SpringDependencyService {

    List<SpringDependencyDTO> getDependencies(SpringDependencySearchRequest request);

    List<SpringDependencyVersionResponse> getVersions(SpringDependencyVersionSearchRequest request);

}
