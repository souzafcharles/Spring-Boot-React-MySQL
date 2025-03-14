package com.souza.charles.product.services;

import com.souza.charles.product.models.Product;
import com.souza.charles.product.models.ResponseProduct;
import com.souza.charles.product.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    @Autowired
    private ResponseProduct response;

    @Transactional(readOnly = true)
    public Iterable<Product> reaAll() {
        return repository.findAll();
    }

    @Transactional
    public ResponseEntity<?> createUpdate(Product product, String action) {
        if (product.getName() == null || product.getName().trim().isEmpty()) {
            response.setMessage("Product name is a mandatory field.");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        } else if (product.getBrand() == null || product.getBrand().trim().isEmpty()) {
            response.setMessage("Product brand is a mandatory field.");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        } else {
            if (action.equals("register")) {
                return new ResponseEntity<>(repository.save(product), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(repository.save(product), HttpStatus.OK);
            }
        }
    }
}