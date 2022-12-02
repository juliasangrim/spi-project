package ccfit.nsu.ru.spi.service.templates_export;

import ccfit.nsu.ru.spi.model.inner.FileResource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Slf4j
@Service
public class ExportTemplateServiceImpl implements ExportTemplateService {
    @Value("${app.zip.buffer.size}")
    private Integer buffer_size;

    @Override
    public ResponseEntity<Resource> exportTemplate(Path targetDirPath) throws IOException {
        List<String> filesListInDir = new ArrayList<>();
        File[] zipFiles = targetDirPath.toFile().listFiles();
        if (zipFiles == null){
            throw new FileNotFoundException("Directory is empty: " + targetDirPath);
        }
        File zipDir = zipFiles[0];
        populateFilesList(zipDir, filesListInDir);
        File zippedFile = zipDirectory(zipDir, filesListInDir, zipDir.getAbsolutePath());
        FileSystemUtils.deleteRecursively(targetDirPath);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Filename", zippedFile.getName());
        return ResponseEntity.ok()
                .headers(httpHeaders)
                .body(new FileResource(zippedFile.getName(),
                Files.readAllBytes(zippedFile.toPath())
        ));
    }

    private File zipDirectory(File dir, List<String> filesInDir, String zipDirPath) throws IOException {
        File tempZipFile = File.createTempFile(zipDirPath, ".zip");
        try (ZipOutputStream zipOut = new ZipOutputStream(new FileOutputStream(tempZipFile))) {
            for (String filePath : filesInDir) {
                log.info("Zipping file: {}", filePath);
                ZipEntry ze = new ZipEntry(filePath.substring(dir.getAbsolutePath().length()+1));
                zipOut.putNextEntry(ze);
                try(FileInputStream fis = new FileInputStream(filePath)) {
                    byte[] buffer = new byte[buffer_size];
                    int len;
                    while ((len = fis.read(buffer)) > 0) {
                        zipOut.write(buffer, 0, len);
                    }
                    zipOut.closeEntry();
                }
            }
        } catch (IOException e) {
            log.error("Error in export file: {}", zipDirPath, e);
            throw e;
        }
        return tempZipFile;
    }

    private void populateFilesList(File dir, List<String> filesListInDir) {
        File[] files = dir.listFiles();
        if (files == null) {
            return;
        }
        for (File file : files) {
            if (file.isFile()) {
                filesListInDir.add(file.getAbsolutePath());
            } else {
                populateFilesList(file, filesListInDir);
            }
        }
    }
}
