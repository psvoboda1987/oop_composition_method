function Car(brand) {

    return {
        brand: brand
    }

}

function setCarType(type) {

    let allowedTypes = [
        'truck',
        'suv',
        'crossover',
        'van',
    ]

    if (! allowedTypes.includes(type)) return this.type = 'undefined'

    return this.type = type

}

function AddCarType(car) {

    car.setCarType = setCarType

    return car

}

function setCarFuel(fuel) {

    let allowedFuels = [
        'gas',
        'hybrid',
        'electric',
    ]

    if (! allowedFuels.includes(fuel)) return this.fuel = 'undefined'

    return this.fuel = fuel

}

function AddCarFuel(car) {

    car.setCarFuel = setCarFuel

    return car

}

function setCarCabine(cabine) {

    let allowedCabines = [
        'regular',
        'superCab',
        'superCrew',
    ]

    if (! allowedCabines.includes(cabine)) return this.cabine = 'undefined'

    return this.cabine = cabine

}

function AddCarCabine(car) {

    car.setCarCabine = setCarCabine

    return car

}

function setCarBox(box) {

    let allowedBoxes = []

    if (['regular', 'superCab'].includes(this.cabine)) {

        allowedBoxes = [6, 8]

    }
    else if (['superCrew'].includes(this.cabine)) {

        allowedBoxes = [5, 6]

    }

    if (! allowedBoxes.includes(box)) return this.box = 'undefined'

    return this.box = box + "'"

}

function AddCarBox(car) {

    car.setCarBox = setCarBox

    return car

}

function showCar(car) {

    let carDescription = ''

    for (let info in car) {

        if (typeof car[info] === 'function') continue
        if (car[info] === 'undefined') continue

        carDescription += `<p>${info}: <span class="capitalize bold">${car[info]}</span></p>`


    }

    document.getElementById('demo').innerHTML = carDescription

}

let ford = Car('ford')
ford = AddCarType(ford)
ford = AddCarFuel(ford)
ford = AddCarCabine(ford)
ford = AddCarBox(ford)

ford.setCarType('truck')
ford.setCarFuel('petrol')
ford.setCarCabine('superCrew')
ford.setCarBox(6)

showCar(ford)

console.log(ford);