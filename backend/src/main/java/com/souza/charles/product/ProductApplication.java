package com.souza.charles.product;

import com.souza.charles.product.environments.LoadEnvironment;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProductApplication {

    public static void main(String[] args) {
        LoadEnvironment.loadEnv();
        SpringApplication.run(ProductApplication.class, args);
    }

}