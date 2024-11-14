package com.restApi.javaspringAPI;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "cards", path = "cards")
public interface CardRepository extends JpaRepository<Card, Long> {
    List<Card> findByTitle(@Param("title") String title);

}