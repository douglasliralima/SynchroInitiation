package com.synchro.hotel.db;

import java.util.List;

import com.synchro.hotel.models.Hotel;
import com.synchro.hotel.models.Location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component("beanLocation")
public class DAOLocation {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

	public Location load(final String city) {

		final String sql = "SELECT * FROM location WHERE city = ?";
		System.out.println(sql);

		return jdbcTemplate.queryForObject(sql, new Object[] { city },
				(rs, rowNum) -> new Location(rs.getString("city"), rs.getString("country")));
	}

	public String findCountryByCity() {
		final String city = "João Pessoa";
		final String sql = "SELECT country FROM location WHERE city = ?";
		return jdbcTemplate.queryForObject(sql, new Object[]{city}, String.class);

	}

	public List<Location> findAllLocations(){
		final String sql = "SELECT * FROM location";
		
		return jdbcTemplate.query(sql, (rs, rowNum) ->
			new Location(rs.getString("city"), rs.getString("country"))
		);
	}

}