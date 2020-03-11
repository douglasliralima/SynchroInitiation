package com.synchro.flys.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Fly {
    @Id 
    @GeneratedValue( strategy=GenerationType.AUTO )
    @ManyToOne
    private Fly from_city;

    @ManyToOne
    private Fly to_city;
    
    private String company;
    private String date;
    private String price;

    public Fly getFrom_city() {
        return from_city;
    }

    public void setFrom_city(Fly from_city) {
        this.from_city = from_city;
    }

    public Fly getTo_city() {
        return to_city;
    }

    public void setTo_city(Fly to_city) {
        this.to_city = to_city;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

}