package com.souza.charles.product.controllers;

import com.souza.charles.product.models.Product;
import com.souza.charles.product.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @Autowired
    private ProductService service;


    @GetMapping("list")
    public Iterable<Product> readAll(){
        return service.reaAll();
    }

    @GetMapping("/")
    public String route() {
        return "Product API is working!";
    }
}
