FROM openjdk:17-jdk-slim

EXPOSE 9000

ARG A_ENVIRONMENT=local-compose
ENV ENVIRONMENT=$A_ENVIRONMENT

ARG A_POSTGRES_PASS=password
ENV POSTGRES_PASS=$A_POSTGRES_PASS

COPY build/libs/spi-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", \
"-Dspring.profiles.active=${ENVIRONMENT}", \
"-DPOSTGRES_PASS = ${POSTGRES_PASS}", \
"-XX:MinRAMPercentage=50.0", \
"-XX:MaxRAMPercentage=75.0", \
"-jar", "/app.jar"]
