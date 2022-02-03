package com.vehiclelelo.main;

import java.util.ArrayList;


import com.vehiclelelo.data.*;
import com.vehiclelelo.ui.*;

public class VehicleMain {

    public static void main(String [] args){
        Bike bike = new Bike();
        bike.setBrand("Hero");
        bike.setColor("Black");
        bike.setModel("pulsar");
        bike.setMileage(55);
        bike.setPrice(120000);
        bike.setPowerShockup(true);
        bike.setDiscBreak(true);

        Car car = new Car();
        car.setBrand("BMW");
        car.setColor("Black");
        car.setModel("S");
        car.setMileage(12);
        car.setPrice(6800000);
        car.setPowerSteering(true);
        car.setConvertible(false);
        car.setSurroundSound(true);


        ArrayList <Vehicle> vehicles = new ArrayList<>();
        vehicles.add(bike);
        vehicles.add(car);

        VehicleDisplay.displayVehicle(vehicles);

    }

}
