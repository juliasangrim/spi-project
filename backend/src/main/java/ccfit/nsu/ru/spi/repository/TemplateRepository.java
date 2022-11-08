package ccfit.nsu.ru.spi.repository;

import ccfit.nsu.ru.spi.model.entity.templates.TemplateEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TemplateRepository extends JpaRepository<TemplateEntity, Double> {

    List<TemplateEntity> findAll();

}
