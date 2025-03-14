package com.souza.charles.product.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Component
@Getter
@Setter
public class ResponseProduct implements Serializable {

    private String message;

}