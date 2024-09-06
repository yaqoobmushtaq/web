const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red',
    numberplate: "234"
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  

  
  const {numberplate : np = "000" } = myVehicle;
  console.log(np);
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

  //Check the result object in the console:
  console.log(myUpdatedVehicle);


  const vehicles = ['mustang', 'f-150', 'expedition', "toyota", "honda"];
  

  const [car, suv, ...cars] = vehicles;
  console.log(car, suv, cars, ...vehicles);

  
  const arr = [1,2,3,4,5];

  const arrDouble = arr.map((element) => {
    return element * 2;
  })

  console.log(arr, arrDouble);

  const arrEven = arr.filter((element) => {
    if (element % 2 == 0) {
      return element;
    }
  })

  const arr3 = arr.filter((element, index) => {
    if (index < 3) {
      return element;
    }
  })
  console.log(arr3);
  

  console.log(arrEven);
  
  const sum = arr.reduce((acc, element) => {
    return acc += element;
  }, 0);

  console.log(sum);
  
  
