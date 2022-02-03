package com.vehiclelelo.ui;

import java.util.ArrayList;
import com.vehiclelelo.data.*;


public class VehicleDisplay {
    public static void displayVehicle(ArrayList <Vehicle> vehicles){
        for(Vehicle vehicle: vehicles){
            System.out.println("Brand: " +  vehicle.getBrand());
            System.out.println("Model: " + vehicle.getModel());
            System.out.println("Price: " + vehicle.getPrice());
            System.out.println("Mileage: " + vehicle.getMileage());

        if(vehicle instanceof Bike){
            Bike bike = (Bike) vehicle;
            System.out.println("Disc Break: " + bike.isDiscBreak());
        }
        if(vehicle instanceof Car){
            Car car = (Car) vehicle;
            System.out.println("Power Steering: " + car.isPowerSteering());
            System.out.println("Surround sound: " + car.isSurroundSound());
            System.out.println("convertible: " + car.isConvertible());

        }

        System.out.println("------------------------------------");

        }
    }
}
















