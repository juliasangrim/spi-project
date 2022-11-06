package ccfit.nsu.ru.spi.service.dependencies;

import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencyDTO;
import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencySearchRequest;
import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencyVersionSearchRequest;
import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencyVersionResponse;
import java.util.List;

public interface SpringDependencyService {

    List<SpringDependencyDTO> getDependencies(SpringDependencySearchRequest request);

    List<SpringDependencyVersionResponse> getVersions(SpringDependencyVersionSearchRequest request);

}
