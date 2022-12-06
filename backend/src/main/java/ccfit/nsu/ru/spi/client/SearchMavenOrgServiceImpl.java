package ccfit.nsu.ru.spi.client;

import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencySearchRequest;
import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencyVersionSearchRequest;
import ccfit.nsu.ru.spi.model.dto.response.dependencies.search.mavenresponse.SpringDependencySearchResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SearchMavenOrgServiceImpl implements SearchMavenOrgService {

    private final static int START_ROW = 0;
    private final static int NUM_ROWS = 20;
    private final static String CORE = "gav";
    private final SearchMavenOrgClient searchMavenOrgClient;

    @Override
    public SpringDependencySearchResponse getDependencies(SpringDependencySearchRequest searchRequest) {
        return searchMavenOrgClient.getDependency(searchRequest.getSearchTerm(), null, START_ROW, NUM_ROWS);
    }

    @Override
    public SpringDependencySearchResponse getDependencyVersions(SpringDependencyVersionSearchRequest searchRequest) {
        var searchTerm = String.format("g:%s AND a:%s", searchRequest.getGroupId(), searchRequest.getArtifactId());
        return searchMavenOrgClient.getDependency(searchTerm, CORE, START_ROW, NUM_ROWS);
    }
}
