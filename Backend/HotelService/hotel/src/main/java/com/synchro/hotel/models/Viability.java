package com.synchro.hotel.models;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

public class Viability {
    private String Name;

    private int month;

    private int viability_flag;

    public Viability(String name, int month, int viability_flag) {
        Name = name;
        this.month = month;
        this.viability_flag = viability_flag;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getViability_flag() {
        return viability_flag;
    }

    public void setViability_flag(int viability_flag) {
        this.viability_flag = viability_flag;
    }

    @Override
    public String toString() {
        return "Viability [Name=" + Name + ", month=" + month + ", viability_flag=" + viability_flag + "]";
    }

}
