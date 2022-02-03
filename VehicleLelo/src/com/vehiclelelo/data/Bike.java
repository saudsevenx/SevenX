package com.vehiclelelo.data;
public class Bike extends Vehicle {
    //properties
    boolean powerShockup;
    boolean discBreak ;
    //methods
    public boolean isPowerShockup() {
        return powerShockup;
    }
    public void setPowerShockup(boolean powerShockup) {
        this.powerShockup = powerShockup;
    }
    public boolean isDiscBreak() {
        return discBreak;
    }
    public void setDiscBreak(boolean discBreak) {
        this.discBreak = discBreak;
    }
    
}
