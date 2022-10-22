-- liquibase formatted sql
--changeset y.trubitsyna:2022-10-23-insert-spring-boot-version
INSERT INTO spring_boot_version(id, version, template_config)
VALUES (1,'2.6.13', currval('template_config_id_sequence'));

INSERT INTO spring_boot_version(id, version, template_config)
VALUES (2, '2.6.14 (SNAPSHOT)', currval('template_config_id_sequence'));

INSERT INTO spring_boot_version(id, version, template_config)
VALUES (3, '2.7.5', currval('template_config_id_sequence'));

INSERT INTO spring_boot_version(id, version, template_config)
VALUES (4, '2.7.6 (SNAPSHOT)', currval('template_config_id_sequence'));

INSERT INTO spring_boot_version(id, version, template_config)
VALUES (5, '3.0.0 (RC1)', currval('template_config_id_sequence'));

INSERT INTO spring_boot_version(id, version, template_config)
VALUES (6, '3.0.0 (SNAPSHOT)', currval('template_config_id_sequence'));
