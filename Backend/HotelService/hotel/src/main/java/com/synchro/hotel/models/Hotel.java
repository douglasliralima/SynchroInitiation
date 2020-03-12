package com.synchro.hotel.models;

public class Hotel {
    private String name;

    private Location location;

    private Viability[] viability;

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

    public Viability[] getViability() {
        return viability;
    }

    public void setViability(final Viability[] viability) {
        this.viability = viability;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(final Integer price) {
        this.price = price;
    }

}