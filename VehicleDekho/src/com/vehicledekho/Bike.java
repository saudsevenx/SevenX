package com.vehicledekho;

public class Bike extends Vehicle{
    Bike(String brand, int plate, boolean Break){
        super(brand, plate);
        this.discBreak = Break;
    }
//Properties
    boolean discBreak;
    String shockUpType;
    
//Methods
    public boolean isDiscBreak(){
        return this.discBreak;
    }

    public void stateShockUp(String type){
        this.shockUpType = type;
    }
    public String shockUpType(){
        return this.shockUpType;
    }

}
