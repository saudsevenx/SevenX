package com.vehicledekho;

public abstract class Vehicle {

    Vehicle(String brand, int plate){
        this.brand = brand;
        this.plate = plate;
        this.forSale = true;
    }

//properties of vehicle
    String brand;
    int plate;
    boolean forSale;
    int topspeed;
    long price;
    int mileage;
    int stars;

//Actions
    public int topSpeed(){
        return this.topspeed;
    }
    public void setMileage(int mileage){
        this.mileage = mileage;
    }
    public int getMileage(){
        return this.mileage;
    }
    public void setPrice(int price){
        this.price = price;
    }
    public long getPrice(){
       return this.price; 
    }
    public void sold(){
        this.forSale = false;
    }
    public int getRating(){
        return this.stars;
    }
    public int setRating(int stars){
        return this.stars = stars;
    }
}
