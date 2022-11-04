package ccfit.nsu.ru.spi.controllers;

import ccfit.nsu.ru.spi.model.dto.request.dependecies.SpringDependencyDTO;
import ccfit.nsu.ru.spi.model.dto.request.dependecies.SpringDependencyVersionSearchRequest;
import ccfit.nsu.ru.spi.model.dto.request.dependecies.SpringDependencyVersionResponse;
import ccfit.nsu.ru.spi.service.SpringDependencyService;
import ccfit.nsu.ru.spi.model.dto.request.dependecies.SpringDependencySearchRequest;
import ccfit.nsu.ru.spi.model.dto.response.common.ResponseWrapper;
import ccfit.nsu.ru.spi.security.UserRole;
import io.swagger.v3.oas.annotations.Operation;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/v1/api/dependencies/spring")
public class SpringDependencyController {

    private final SpringDependencyService springDependencyService;

    @Operation(summary = "Get list of dependencies by search query")
    @PostMapping("/")
    @Secured(value = {UserRole.UserAuthority.ROLE_CLIENT, UserRole.UserAuthority.ROLE_ADMIN})
    public ResponseWrapper<List<SpringDependencyDTO>> findDependencies(
        @RequestBody SpringDependencySearchRequest searchRequest
    ) {
        List<SpringDependencyDTO> dependencies = springDependencyService.getDependencies(searchRequest);
        return new ResponseWrapper<>(dependencies);
    }

    @Operation(summary = "Get versions list of dependency")
    @PostMapping("/versions")
    @Secured(value = {UserRole.UserAuthority.ROLE_CLIENT, UserRole.UserAuthority.ROLE_ADMIN})
    public ResponseWrapper<List<SpringDependencyVersionResponse>> findDependenciesVersions(
        @RequestBody SpringDependencyVersionSearchRequest searchRequest
    ) {
        List<SpringDependencyVersionResponse> versions = springDependencyService.getVersions(searchRequest);
        return new ResponseWrapper<>(versions);
    }

}
