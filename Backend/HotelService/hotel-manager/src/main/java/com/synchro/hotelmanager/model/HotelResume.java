package com.synchro.hotelmanager.model;

public class HotelResume {
    private final String HOTEL_TITLE;
    private long views;
    private String hotelCity;
    private String geographicData;
    private int hotelPrice;

    public HotelResume(String hOTEL_TITLE, long views, String hotelCity, String geographicData, int hotelPrice) {
        HOTEL_TITLE = hOTEL_TITLE;
        this.views = views;
        this.hotelCity = hotelCity;
        this.geographicData = geographicData;
        this.hotelPrice = hotelPrice;
    }

    public String getHOTEL_TITLE() {
        return HOTEL_TITLE;
    }

    public long getViews() {
        return views;
    }

    public void setViews(long views) {
        this.views = views;
    }

    public String getHotelCity() {
        return hotelCity;
    }

    public void setHotelCity(String hotelCity) {
        this.hotelCity = hotelCity;
    }

    public String getGeographicData() {
        return geographicData;
    }

    public void setGeographicData(String geographicData) {
        this.geographicData = geographicData;
    }

    public int getHotelPrice() {
        return hotelPrice;
    }

    public void setHotelPrice(int hotelPrice) {
        this.hotelPrice = hotelPrice;
    }

}