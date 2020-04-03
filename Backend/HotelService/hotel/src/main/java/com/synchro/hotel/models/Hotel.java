package com.synchro.hotel.models;

import java.util.List;

public class Hotel {
    private String name;

    private Location location;

    private List<Viability> viability;

    private Integer price;

    public Hotel(final String name, final Location location, final int price) {
        this.name = name;
        this.location = location;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(final Location location) {
        this.location = location;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(final Integer price) {
        this.price = price;
    }

    public List<Viability> getViability() {
        return viability;
    }

    public void setViability(List<Viability> viability) {
        this.viability = viability;
    }

}