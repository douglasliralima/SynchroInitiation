package com.synchro.flys.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Location {

    @Id 
    @GeneratedValue( strategy=GenerationType.AUTO)
    @Column(nullable = false, name = "city")
    private String city;
    @Column(nullable = false, name = "country")
    private String country;

    public Location(String city, String country) {
        this.city = city;
        this.country = country;
    }

    public Location(){
        super();
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}