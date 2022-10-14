package ccfit.nsu.ru.spi.mapper;

import ccfit.nsu.ru.spi.model.dto.response.UserInfoResponse;
import ccfit.nsu.ru.spi.model.entity.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.ERROR)
public interface UserMapper {

    UserInfoResponse map(UserEntity userEntity);

}
