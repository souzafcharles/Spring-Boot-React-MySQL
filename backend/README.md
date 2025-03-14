# Project Requirements and Configurations:

## Entity Diagram:

![Model Diagram](https://github.com/souzafcharles/Spring-Boot-React-MySQL/blob/main/account-service/src/main/resources/static/images/product-entity.png)

Spring-Boot-React-MySQL
***

## Project Logic Layered Architecture:

![Layered Architecture](https://github.com/souzafcharles/Spring-Boot-React-MySQL/blob/main/account-service/src/main/resources/static/images/logic-layered-architecture.png)

***

## Requirements for Spring Initializr Setup:

- **Project Metadata:**
    - Use `Maven` as the build tool.
    - Set the Java version to `21`.
    - Use Spring Boot version `3.4.3`.
    - Artifact name: account-service.
    - Define the Artifact name as `backend`.

- **Dependencies:**
    - Include the following dependencies:
        - **Spring Web**: To enable RESTful API development.
        - **Spring Data JPA**: For database interactions.
        - **MySQL Driver**: For connecting to the MySQL database.
        - **Lombok**: To reduce boilerplate code.
        - **Spring Boot DevTools**: Provides fast application restarts, LiveReload, and configurations for enhanced development experience.
        - **Dotenv Java**: To load environment variables dynamically from a `.env` file for secure and flexible
          configuration.

---

## Requirements for `application.properties` Configuration File:

- **Database Configuration:**
    - Configure the `datasource` properties using placeholders for sensitive information:
        - `url`: Use `${DATASOURCE_URL}` to dynamically load the database URL.
        - `username`: Use `${DATASOURCE_USERNAME}` for the database username.
        - `password`: Use `${DATASOURCE_PASSWORD}` for the database password.
    - Set the database driver class name to `com.mysql.cj.jdbc.Driver`.

- **JPA and Hibernate Configuration:**
    - Enable automatic schema updates by setting `spring.jpa.hibernate.ddl-auto` to `update`.
    - Enable SQL logging for debugging by setting `spring.jpa.show-sql` to `true`.
    - Configure Hibernate properties:
        - Set the SQL dialect to `org.hibernate.dialect.MySQLDialect` for MySQL compatibility.
        - Enable formatted SQL output by setting `hibernate.format_sql` to `true`.
        - Ensure that SQL statements are displayed in logs by setting `hibernate.show_sql` to `true`.

- **Server Configuration:**
    - Set the server port to `8000` using `server.port`.

---

## Creation of the `.env` File:

- At the root of the project, create a file named `.env` to declare the environment variables required for the
  `MySQL` database connection.

***

## Requirements for LoadEnvironment Class:

- **Class Purpose:**
    - Create the `LoadEnvironment` class to load environment variables from a `.env` file and set them as system
      properties.

- **Load Environment Method:**
    - **Method:** `loadEnv`
    - **Purpose:** Loads environment variables from a `.env` file and sets them as system properties.
    - **Implementation Details:**
        - Use the `Dotenv.configure().load()` method from the `io.github.cdimascio.dotenv` library to load the
          environment variables.
        - Iterate over the entries using
          `dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()))` to set each
          environment variable as a system property.

- **External Library:**
    - **Library:** `io.github.cdimascio.dotenv`
    - **Purpose:** Used to load environment variables from a `.env` file. Ensure this library is included as a
      dependency in your project's build configuration.

- **Purpose:**
    - Ensure that environment variables defined in a `.env` file are loaded and accessible as system properties
      throughout the application.

***