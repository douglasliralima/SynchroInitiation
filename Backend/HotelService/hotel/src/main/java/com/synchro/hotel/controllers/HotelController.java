package com.synchro.hotel.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.synchro.hotel.db.DAOHotel;
import com.synchro.hotel.db.DAOLocation;
import com.synchro.hotel.models.Hotel;
import com.synchro.hotel.models.Location;
import com.synchro.hotel.models.Viability;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping(path = "/hotel")
public class HotelController {
    
    @Autowired
    @Qualifier("beanHotel")
    private final DAOHotel daoHotel = new DAOHotel();

    @Autowired
    @Qualifier("beanLocation")
    private DAOLocation daoLocation = new DAOLocation();

    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody void addNewHotel(@RequestParam final String name, @RequestParam final String city,
            @RequestParam final Integer[] viabilities, @RequestParam final Integer price) {

        // Primeiramente vamos fazer a normalização do array de viabilidades em uma
        // tabela apropriada ao hotel
        final Viability[] viability = new Viability[12];

        for (int i = 0; i < viability.length; i++) {
            viability[i] = new Viability(name, i + 1, viabilities[i]);
        }

        final Location location = daoLocation.load(city);

        final Hotel hotel = new Hotel(name, location, price);
        hotel.setViability(viability);
        
        daoHotel.save(hotel);
    }

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody Map<String, String> getHotel(@RequestParam final String name) {

        final Hotel hotel = daoHotel.load(name);

        final HashMap<String, String> map = new HashMap<>();

        map.put("name", hotel.getName());
        map.put("city", hotel.getLocation().getCity());
        map.put("price", Integer.toString(hotel.getPrice()));

        /*
        String[] hotelViabilities = new String[hotel.getViability().length];
        for (int i = 0; i < hotelViabilities.length; i++){
            hotelViabilities[i] = Integer.toString(hotel.getViability()[i].getViability_flag());
        }

        map.put("viabilities", Arrays.toString(hotelViabilities));
        */
        return map;
    }

    
    @GetMapping("/hotels")
    public @ResponseBody HashMap<Integer, HashMap<String, String>> getHotels(@RequestParam final String city) {

        final List<Hotel> hotels = daoHotel.loadAll(city);

        final HashMap<Integer, HashMap<String, String>> mapHotels = new HashMap<>();
        
        HashMap<String, String> hotelMap;
        for(int i = 0; i < hotels.size(); i++){
            hotelMap = new HashMap<>();
            hotelMap.put("name", hotels.get(i).getName());
            hotelMap.put("city", hotels.get(i).getLocation().getCity());
            hotelMap.put("price", Integer.toString(hotels.get(i).getPrice()));
            mapHotels.put(i, hotelMap);
        }

        return mapHotels;
    }
}