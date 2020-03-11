package com.synchro.hotel.models;

public class Location {
    private String city;

    private String country;

    public Location(String city, String country) {
        System.out.println(city + " " + country);
        this.city = city;
        this.country = country;
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

    @Override
    public String toString() {
        return "Location [city=" + city + ", country=" + country + "]";
    }
}
