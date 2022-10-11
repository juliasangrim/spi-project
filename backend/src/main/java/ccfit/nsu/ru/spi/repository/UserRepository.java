package ccfit.nsu.ru.spi.repository;

import ccfit.nsu.ru.spi.model.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
    
}