FROM openjdk:latest
VOLUME /tmp
ARG DEPENDENCY=target/dependency
COPY ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY ${DEPENDENCY}/META-INF /app/META-INF
COPY ${DEPENDENCY}/BOOT-INF/classes /app

#TODO update config to allow remote debugging inside docker container

#ENV JPDA_ADDRESS="5005"
#ENV JPDA_TRANSPORT="dt_socket"
#
#EXPOSE 5005
#ENTRYPOINT ["java", "-agentlib:jdwp=transport=dt_socket,address=5005,suspend=n,server=y", "-cp", "app:app/lib/*","by.kliasheu.api.EwalletApiApplication"]
ENTRYPOINT ["java","-cp","app:app/lib/*","by.kliasheu.ewallet.api.EwalletApiApplication"]