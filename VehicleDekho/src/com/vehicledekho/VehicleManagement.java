package com.vehicledekho;

public class VehicleManagement {
    public static void main(String [] args){
       Car swift = new Car("Suzuki", 1234, false);
       swift.setPrice(500000);
       swift.setMileage(20);
       swift.setRating(3);
       swift.setSeatingCapacity(5);

       System.err.println("Price: " + swift.getPrice());
       System.err.println("Mileage: " + swift.getMileage());
       System.err.println("No.of seaters: " + swift.getSeatingCapacity());
       System.err.println("Rating: " + swift.getRating());

       Bike pulsar = new Bike("Hero", 4567, true);
       pulsar.setPrice(120000);
       pulsar.setMileage(45);
       pulsar.setRating(4);

       System.err.println("Price: " + pulsar.getPrice());
       System.err.println("Mileage: " + pulsar.getMileage());
       System.err.println("Disc Break: " + pulsar.isDiscBreak());
       System.err.println("Rating: " + pulsar.getRating());





    }
}
