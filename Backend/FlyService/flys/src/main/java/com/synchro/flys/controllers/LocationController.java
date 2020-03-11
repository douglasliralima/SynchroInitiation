package com.synchro.flys.controllers;

import com.synchro.flys.models.Location;
import com.synchro.flys.repositories.LocationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/location")
public class LocationController {
    @Autowired
    private LocationRepository locationRepository;

    @PostMapping(path = "")
    public @ResponseBody Void NewLocation (@RequestParam String city, @RequestParam String country){
        Location location = new Location(city, country);
        locationRepository.save(location);
        return null;
    }
}