package ccfit.nsu.ru.spi.client;

import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencySearchRequest;
import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencyVersionSearchRequest;
import ccfit.nsu.ru.spi.model.dto.response.dependencies.search.mavenresponse.SpringDependencySearchResponse;

public interface SearchMavenOrgService {
    SpringDependencySearchResponse getDependencies(SpringDependencySearchRequest searchRequest);

    SpringDependencySearchResponse getDependencyVersions(SpringDependencyVersionSearchRequest searchRequest);
}
