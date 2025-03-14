package com.souza.charles.product.services;

import com.souza.charles.product.models.Product;
import com.souza.charles.product.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    @Transactional(readOnly = true)
    public Iterable<Product>reaAll(){
        return repository.findAll();
    }
}