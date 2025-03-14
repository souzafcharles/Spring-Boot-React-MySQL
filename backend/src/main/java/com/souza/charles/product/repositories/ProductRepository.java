package com.souza.charles.product.repositories;

import com.souza.charles.product.models.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
}