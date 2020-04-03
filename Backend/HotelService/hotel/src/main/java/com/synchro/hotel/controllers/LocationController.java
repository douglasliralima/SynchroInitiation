package com.synchro.hotel.controllers;

import java.util.HashMap;
import java.util.List;

import com.synchro.hotel.db.DAOLocation;
import com.synchro.hotel.models.Location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LocationController {

    @Autowired
    @Qualifier("beanLocation")
    private DAOLocation daoLocation = new DAOLocation();

    
    @GetMapping(path = "/")
    public @ResponseBody String  helloWorld(){
        System.out.println("Olá vocês o/");
        return "Hello World";
    }

    @GetMapping(path = "/teste")
    public @ResponseBody String teste(){
        //Location teste = daoLocation.load("João Pessoa");
        try {
            return daoLocation.load("Natal").toString();
        } catch (Exception e) {
            e.printStackTrace();
            return "Location error";
        }
    }

    @GetMapping(path = "/locations")
    @CrossOrigin(origins = "http://localhost:3000")
    public @ResponseBody HashMap<Integer, HashMap<String, String>> locations(){
        //Location teste = daoLocation.load("João Pessoa");
        List<Location> location = daoLocation.findAllLocations();

        final HashMap<Integer, HashMap<String, String>> jsonAllLocations = new HashMap<>();
        HashMap<String, String> jsonLocations;

        for (int i = 0; i < location.size(); i++){
            jsonLocations = new HashMap<>();

            jsonLocations.put("city", location.get(i).getCity());
            jsonLocations.put("country", location.get(i).getCountry());
            
            jsonAllLocations.put(i, jsonLocations);
        }
        return jsonAllLocations;
        // } catch (Exception e) {
        //     e.printStackTrace();
        //     return "Location error";
        // }
    }
}