package com.vehicledekho;

public class Car extends Vehicle {
    Car(String brand, int plate, boolean convertible){
        super(brand, plate);
        this.convertible = convertible;
        this.powerSteering = true;
    }
//properties
    int seatingCapacity;
    boolean powerSteering;
    boolean convertible;
    
//methods
    public void setSeatingCapacity(int seaters){
        this.seatingCapacity = seaters;
    }
    public int getSeatingCapacity(){
        return this.seatingCapacity;
    }
    public boolean isConvertible(){
        return this.convertible;
    }
    public boolean isPowerSteering(){
        return this.powerSteering;
    }
}
