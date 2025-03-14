package com.souza.charles.backend.environments;

import io.github.cdimascio.dotenv.Dotenv;

public class LoadEnvironment {
    public static void loadEnv() {
        Dotenv dotenv = Dotenv.configure().load();
        dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue())
        );
    }
}