package com.synchro.hotel.db;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import com.synchro.hotel.models.Hotel;
import com.synchro.hotel.models.Location;
import com.synchro.hotel.models.Viability;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component("beanHotel")
public class DAOHotel {
    
    @Autowired
    private JdbcTemplate jdbctemplate;

	public void save(Hotel hotel) {
        //new Hotel(name, location, price, viability);
        String sql = "INSERT INTO hotels(name, city, price) VALUES (?, ?, ?)";
        jdbctemplate.update(sql, hotel.getName(), hotel.getLocation().getCity(), hotel.getPrice());


        sql = "INSERT INTO viability(name, month, viability_flag) VALUES (?, ?, ?)";
        jdbctemplate.batchUpdate(sql,new BatchPreparedStatementSetter(){
        
            @Override
            public void setValues(PreparedStatement ps, int i) throws SQLException {
                ps.setString(1, hotel.getName());
                ps.setInt(2, hotel.getViability()[i].getMonth());
                ps.setInt(3, hotel.getViability()[i].getViability_flag());
            }
        
            @Override
            public int getBatchSize() {
                return hotel.getViability().length;
            }
        });

    }
    

	public Hotel load(String name) {
        String sql = "SELECT * FROM location WHERE city IN (SELECT city FROM hotels WHERE name = ?)";

        Location location = jdbctemplate.queryForObject(sql, new Object[] { name },
                (rs, rowNum) -> new Location(rs.getString("city"), rs.getString("country")));

        sql = "SELECT * FROM viability WHERE name = ?";
        
        List<Viability> aux = jdbctemplate.query(sql,new Object[] { name },
        (rs, rowNum) -> new Viability(rs.getString("name"), rs.getInt("month"), rs.getInt("viability_flag")));
        Viability[] viabilities = new Viability[12];

        for(int i = 0; i < viabilities.length; i++){
            viabilities[i] = aux.get(i);
        }
        
        sql = "SELECT * FROM hotels WHERE name = ?";
        Hotel hotel = jdbctemplate.queryForObject(sql, new Object[] { name },
                (rs, rowNum) -> new Hotel(rs.getString("name"), location, rs.getInt("price"), viabilities));
        

        return hotel;
	}
    

}