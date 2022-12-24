FROM openjdk:17-jdk-slim

EXPOSE 9000

ARG ENVIRONMENT
ENV V_ENVIRONMENT=$ENVIRONMENT

ARG POSTGRES_PASS
ENV V_POSTGRES_PASS=$POSTGRES_PASS

RUN echo $V_POSTGRES_PASS

COPY /build/libs/spi.jar app.jar

COPY --from=python:3.10 / /
RUN pip3 install jep
RUN pip3 install cookiecutter
RUN pip3 show jep

COPY . .

ENTRYPOINT ["java", \
"-Djava.library.path=/usr/local/lib/python3.10/site-packages/jep", \
"-Dspring.profiles.active=${V_ENVIRONMENT}", \
"-DPOSTGRES_PASS=${V_POSTGRES_PASS}", \
"-XX:MinRAMPercentage=50.0", \
"-XX:MaxRAMPercentage=75.0", \
"-XX:MaxHeapFreeRatio=75", \
"-jar", "/app.jar"]