package com.synchro.hotel.controllers;

import java.util.List;

import com.synchro.hotel.db.DAOLocation;
import com.synchro.hotel.models.Location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TesterController {

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

    @GetMapping(path = "/teste2")
    public @ResponseBody String teste2(){
        //Location teste = daoLocation.load("João Pessoa");
        try {
            List<Location> location = daoLocation.findAllLocations();
            for (int i = 0; i < location.size(); i++){
                System.out.println(location.get(i));
            }
            return "Executou";
        } catch (Exception e) {
            e.printStackTrace();
            return "Location error";
        }
    }
}