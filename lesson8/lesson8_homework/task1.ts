interface Car {
    brand: string;
    year: number;
    speed: number;
}

interface Motorcycle {
    brand: string;
    year: number;
    speed: number;
}

interface Bicycle {
    brand: string;
    year: number;
}

function printVehicleInfo(vehicle: Car | Motorcycle | Bicycle) {
    console.log(`Brand: ${vehicle.brand}`);
    console.log(`Year: ${vehicle.year}`);

    if ('speed' in vehicle) {
        console.log(`Speed: ${vehicle.speed}`);
    }
}

const car: Car = {
    brand: 'Toyota',
    year: 2019,
    speed: 200
};

const motorcycle: Motorcycle = {
    brand: 'Honda',
    year: 2020,
    speed: 250
};

const bicycle: Bicycle = {
    brand: 'Giant',
    year: 2021
};

printVehicleInfo(car);
printVehicleInfo(motorcycle);
printVehicleInfo(bicycle);