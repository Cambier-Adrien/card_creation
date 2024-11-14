package com.restApi.javaspringAPI;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Card {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private String image;
    private int attack;
    private int defense;

    public Card(String title, String description, String image, int attack, int defense) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.attack = attack;
        this.defense = defense;
    }
}
