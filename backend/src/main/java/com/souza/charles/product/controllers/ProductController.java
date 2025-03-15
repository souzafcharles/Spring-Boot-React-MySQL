package com.souza.charles.product.controllers;

import com.souza.charles.product.models.Product;
import com.souza.charles.product.models.ResponseProduct;
import com.souza.charles.product.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductService service;

    @PostMapping("/register")
    public ResponseEntity<?> create(@RequestBody Product product) {
        return service.createUpdate(product, "register");
    }

    @GetMapping("/list")
    public Iterable<Product> readAll() {
        return service.reaAll();
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Product product){
        return service.createUpdate(product, "update");
    }

    @DeleteMapping("/delete/{code}")
    public ResponseEntity<ResponseProduct> delete(@PathVariable Long code){
        return service.delete(code);
    }

    @GetMapping("/")
    public String route() {
        return "Product API is working!";
    }
}