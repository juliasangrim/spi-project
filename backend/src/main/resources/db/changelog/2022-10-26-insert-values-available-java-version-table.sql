-- liquibase formatted sql
--changeset y.trubitsyna:2022-10-23-insert-available-java-version
INSERT INTO available_java_version(id, version, template_config)
VALUES (1, 8, currval('template_config_id_sequence'));

INSERT INTO available_java_version(id, version, template_config)
VALUES (2, 11, currval('template_config_id_sequence'));

INSERT INTO available_java_version(id, version, template_config)
VALUES (3, 17, currval('template_config_id_sequence'));

INSERT INTO available_java_version(id, version, template_config)
VALUES (4, 19, currval('template_config_id_sequence'));