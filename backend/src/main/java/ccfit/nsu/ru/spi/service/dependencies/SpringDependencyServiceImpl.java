package ccfit.nsu.ru.spi.service.dependencies;

import ccfit.nsu.ru.spi.client.SearchMavenOrgService;
import ccfit.nsu.ru.spi.mapper.DependencyInfoMapper;
import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencyDTO;
import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencySearchRequest;
import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencyVersionResponse;
import ccfit.nsu.ru.spi.model.dto.request.dependencies.SpringDependencyVersionSearchRequest;
import ccfit.nsu.ru.spi.model.dto.response.dependencies.search.mavenresponse.DependencyInfo;
import ccfit.nsu.ru.spi.model.dto.response.dependencies.search.mavenresponse.SpringDependencySearchResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SpringDependencyServiceImpl implements SpringDependencyService {

    private final SearchMavenOrgService searchMavenOrgService;
    private final DependencyInfoMapper dependencyInfoMapper;

    @Override
    public List<SpringDependencyDTO> getDependencies(SpringDependencySearchRequest request) {
        SpringDependencySearchResponse dependencies = searchMavenOrgService.getDependencies(request);
        List<DependencyInfo> dependencyInfoList = dependencies.getResponse().getDependencyInfoList();
        return dependencyInfoList.stream()
                .map(dependencyInfoMapper::mapToSpringDependency).collect(Collectors.toList());
    }

    @Override
    public List<SpringDependencyVersionResponse> getVersions(SpringDependencyVersionSearchRequest request) {
        SpringDependencySearchResponse dependencyVersions = searchMavenOrgService.getDependencyVersions(request);
        List<DependencyInfo> dependencyInfoList = dependencyVersions.getResponse().getDependencyInfoList();
        return dependencyInfoList.stream()
                .map(dependencyInfoMapper::mapToSpringDependencyVersion).collect(Collectors.toList());
    }

}
