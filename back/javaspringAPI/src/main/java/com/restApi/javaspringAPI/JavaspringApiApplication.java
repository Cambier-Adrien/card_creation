package com.restApi.javaspringAPI;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class JavaspringApiApplication {

	@Autowired
	private CardRepository repository;

	@PostConstruct
	public void init(){
		repository.saveAll(Stream.of(
						new Card("Blue Dragon","A fierce dragon with water-breathing abilities.","http://example.com/image.jpg",55,100),
						new Card("Red Dragon","A fierce dragon with fire-breathing abilities.","http://example.com/image.jpg",200,100)
				).collect(Collectors.toList())
		);

	}
	public static void main(String[] args) {
		SpringApplication.run(JavaspringApiApplication.class, args);

	}

}