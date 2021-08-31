// Add your Circle class here

let pi = Math.PI;

class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    get circumferance(){
        return (this.radius * 2) * pi;
    }

    get area(){
        return (this.radius * this.radius) * pi;
    }

    set diameter(diameter){
        this.radius = diameter / 2;
    }

    set circumferance(circumferance){
        this.radius = (circumferance / pi) / 2;
    }

    set area(area){
        this.radius = Math.sqrt(area / pi);
    }
}


