package com.synchro.hotel.models;

import java.util.List;

public class Hotel {
    private String name;

    private Location location;

    private Viability[] viability;

    private Integer price;

    public Hotel(String name, Location location, Integer price, Viability[] viability) {
        this.name = name;
        this.location = location;
        this.price = price;
        this.viability = viability;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Viability[] getViability() {
        return viability;
    }

    public void setViability(Viability[] viability) {
        this.viability = viability;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

}