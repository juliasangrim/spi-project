package ccfit.nsu.ru.spi.service.cookie_cutter;

import jep.Interpreter;
import jep.SharedInterpreter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Path;

@Service
@RequiredArgsConstructor
public class CookieCutterTemplateServiceImpl implements CookieCutterTemplateService {

    private static final String OUTPUT_DIR = "./instantiated_templates";

    @Override
    public Path instantiateTemplate(Path targetDirPath) throws IOException {
        String targetDir = String.valueOf(targetDirPath.toRealPath()).replace('\\', '/');
        Path outputPath = Path.of(OUTPUT_DIR).toRealPath();
        String outputDir = String.valueOf(outputPath).replace('\\', '/');
        try (Interpreter interpreter = new SharedInterpreter()) {
            interpreter.exec("from cookiecutter.main import cookiecutter");
            interpreter.exec("cookiecutter('" + targetDir + "'," +
                    " no_input=True, output_dir='" + outputDir +"')");
        }

        File[] resultFiles = outputPath.toFile().listFiles();
        if (resultFiles == null){
            throw new FileNotFoundException("Output directory is empty");
        }
        return resultFiles[0].toPath();
    }
}
