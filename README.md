![GitHub language count](https://img.shields.io/github/languages/count/souzafcharles/Spring-Boot-React-MySQL)
![GitHub top language](https://img.shields.io/github/languages/top/souzafcharles/Spring-Boot-React-MySQL)
![GitHub](https://img.shields.io/github/license/souzafcharles/Spring-Boot-React-MySQL)
![GitHub last commit](https://img.shields.io/github/last-commit/souzafcharles/Spring-Boot-React-MySQL)

# Spring Boot, React, and MySQL | Product API

---

▶️ Presented by Ralf Lima [Treinamentos em TI](https://ralflima.com/treinamentos/spring_boot_e_react/spring_modulo2_introducao.php)

---

## System Overview:

<p align="justify">
This document outlines the development of a comprehensive product management system, integrating a <code>Spring Boot</code> backend with a <code>ReactJS</code> frontend. The system is designed to facilitate the creation, retrieval, modification, and deletion of product data, providing a robust solution for managing product inventories. The backend component, developed using <code>Java Spring</code>, establishes a <code>RESTful</code> API to handle data operations, while the frontend, built with <code>ReactJS</code>, offers a dynamic user interface for interacting with the API. The system leverages a <code>MySQL</code> database for persistent data storage, ensuring data integrity and reliability.
</p>

<p align="justify">
The <code>Spring Boot</code> backend is structured to include a repository layer, utilizing <code>CrudRepository</code> for database interactions, and a service layer to implement business logic and data validation. Controllers are implemented to define <code>RESTful</code> endpoints, supporting <code>GET</code>, <code>POST</code>, <code>PUT</code>, and <code>DELETE</code> requests. The system addresses Cross-Origin Resource Sharing (CORS) to enable seamless communication between the frontend and backend. The <code>ReactJS</code> frontend is designed with reusable components for forms and tables, employing <code>useState</code> and <code>useEffect</code> hooks to manage component state and lifecycle. The frontend interacts with the backend API using the <code>fetch</code> API, enabling asynchronous data retrieval and manipulation.
</p>

<p align="justify">
The development of this system emphasizes modularity and maintainability. The <code>Spring Boot</code> backend utilizes dependency injection and annotations such as <code>@RestController</code>, <code>@GetMapping</code>, <code>@PostMapping</code>, <code>@PutMapping</code>, and <code>@DeleteMapping</code> to define API endpoints and manage request mappings. The <code>ReactJS</code> frontend leverages component-based architecture and state management to provide a responsive user experience. The integration of <code>Bootstrap</code> enhances the user interface with consistent styling. The system is designed to support efficient data management, providing a foundation for scalable product inventory solutions.
</p>

---

## Backend Project Stack:

| Technology            | Version  | Description                                           |
| --------------------- | ---------| ------------------------------------------------------|
| 📐 Visual Studio Code | `1.98`   | Integrated Development Environment (IDE)              |
| ☕ Java               | `21`     | Backend programming language                          |
| 🌱 Spring Boot        | `3.4.3`  | Framework for creating Spring applications            |
| 🐦 Maven              | `3.9.9`  | Build automation and dependency management tool       |
| 🐬 MySQL              | `9.2.0`  | Open-source relational database management system     |
| ⚡ Thunder Client     | `2.34.0` | Hand-crafted lightweight Rest Client for testing APIs |

---

## Backend Dependencies:

| Dependency              | Category        | Description                                                                                            |
| ----------------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| 🛠️ Spring Boot DevTools | Developer Tools | Provides fast application restarts, LiveReload, and configurations for enhanced development experience |
| 🌐 Spring Web           | Web             | Build web, including RESTful, applications using Spring MVC                                            |
| 💾 Spring Data JPA      | SQL             | Simplifies database interactions using JPA with Spring Data and Hibernate                              |
| 🐘 MySQL Driver         | SQL             | Provides connectivity between Java applications and MySQL databases                                    |
| 🌶️ Lombok               | Developer Tools | A Java annotation library that minimises boilerplate code                                              |
| 🗝️ dotenv-java          | Configuration   | Loads environment variables from a `.env` file, aiding secure configuration management                 |

---

## Contents:

- [x] Introduction;
- [x] Java Spring Project Creation;
- [X] Table Generation;
- [X] Project Structuring;
- [X] Repository Configuration;
- [X] Controller Configuration;
- [X] Request Validation Model;
- [X] Product Listing Service;
- [X] Product Listing Route;
- [X] Product Registration Service;
- [X] Product Registration Route;
- [X] Product Modification Service;
- [X] Product Modification Route;
- [X] Product Removal Service;
- [X] Product Removal Route;
- [X] CORS;
- [X] React Project Creation;
- [X] React Component Creation;
- [X] React Form Structure;
- [X] React Table Structure;
- [X] Component Styling;
- [X] Button Visibility;
- [X] Products Response;
- [X] Products Display in Table;
- [ ] Product Object;
- [ ] Product useState;
- [ ] Form Data Retrieval;
- [ ] Product Registration;
- [ ] Form Clearing;
- [ ] Product Selection;
- [ ] Modification and Deletion Cancellation;
- [ ] Product Removal;
- [ ] Product Modification;
- [ ] Final Considerations.
