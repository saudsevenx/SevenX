package com.vehiclelelo.data;

public class Car extends Vehicle{
    //properties
    boolean powerSteering;
    boolean surroundSound;
    boolean convertible;
    public boolean isPowerSteering() {
        return powerSteering;
    }
    public void setPowerSteering(boolean powerSteering) {
        this.powerSteering = powerSteering;
    }
    public boolean isSurroundSound() {
        return surroundSound;
    }
    public void setSurroundSound(boolean surroundSound) {
        this.surroundSound = surroundSound;
    }
    public boolean isConvertible() {
        return convertible;
    }
    public void setConvertible(boolean convertible) {
        this.convertible = convertible;
    }
}
