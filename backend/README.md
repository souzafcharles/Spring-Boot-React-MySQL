# Project Requirements and Configurations:

## Entity Diagram:

![Model Diagram](https://github.com/souzafcharles/Spring-Boot-React-MySQL/blob/main/backend/src/main/resources/static/images/product-entity.png)

---

## Project Logic Layered Architecture:

![Layered Architecture](https://github.com/souzafcharles/Spring-Boot-React-MySQL/blob/main/backend/src/main/resources/static/images/logic-layered-architecture.png)

---

## Requirements for Spring Initializr Setup:

- **Project Metadata:**

  - Use `Maven` as the build tool.
  - Set the Java version to `21`.
  - Use Spring Boot version `3.4.3`.
  - Artifact name: account-service.
  - Define the Artifact name as `product`.

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

---

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

---

# Backend Requirements Specification:

## Requirements for `ProductApplication` Class:

- **Spring Boot Application Configuration:**

  - Annotate the class with `@SpringBootApplication` to enable component scanning and auto-configuration.

- **Main Method:**

  - Define the `main` method as the entry point of the application.
  - Call `LoadEnvironment.loadEnv()` to load environment variables before starting the Spring application context.
  - Use `SpringApplication.run(ProductApplication.class, args)` to launch the application.

- **Dependency Management:**
  - Ensure that the project dependencies include the necessary libraries for environment variable loading.

## Requirements for `Product` Entity Class:

- **Entity Mapping:**

  - Define the `Product` class as an entity to represent a database table.
  - Annotate the class with `@Entity` to designate it as a persistent entity.
  - Use `@Table(name = "tb_product")` to map the entity to the database table named `tb_product`.

- **Attributes and Annotations:**

  - Declare attributes `code`, `name`, and `brand` to represent the respective database columns.
  - Annotate the `code` field with `@Id` and `@GeneratedValue(strategy = GenerationType.IDENTITY)` to specify it as the primary key with an automatically generated value.

- **Accessors, Mutators, and Constructor:**

  - Implement `getters` and `setters` for all attributes to facilitate data manipulation.
  - Ensure the class has an all-arguments constructor using `@AllArgsConstructor` to ease instantiation.

- **Serializable Interface:**

  - Ensure the entity implements the `Serializable` interface to enable object serialisation for transmission or storage.

- **Database Constraints:**
  - Enforce that the `code` column is unique and automatically generated.
  - Ensure that `name` and `brand` columns cannot have null values to maintain data integrity.