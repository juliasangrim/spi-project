package ccfit.nsu.ru.spi.client;

import ccfit.nsu.ru.spi.model.dto.response.dependecies.search.mavenresponse.SpringDependencySearchResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(value = "search.maven.org", url = "https://search.maven.org/solrsearch/")
interface SearchMavenOrgClient {

    @RequestMapping(value = "select", method = RequestMethod.GET)
    SpringDependencySearchResponse getDependency(
            @RequestParam("q")
            String searchTerm,
            @RequestParam(value = "core")
            String coreParam,
            @RequestParam(value = "start", defaultValue = "0")
            int startRowId,
            @RequestParam(value = "rows", defaultValue = "20")
            int numRows);

}