FROM openjdk:17-jdk-slim

EXPOSE 9000

ARG ENVIRONMENT
ENV V_ENVIRONMENT=$ENVIRONMENT

ARG POSTGRES_PASS
ENV V_POSTGRES_PASS=$POSTGRES_PASS

COPY /build/libs/spi.jar app.jar
ENTRYPOINT ["java", \
"-Dspring.profiles.active=${V_ENVIRONMENT}", \
"-DPOSTGRES_PASS = ${V_POSTGRES_PASS}", \
"-XX:MinRAMPercentage=50.0", \
"-XX:MaxRAMPercentage=75.0", \
"-jar", "/app.jar"]
