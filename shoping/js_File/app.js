function calculation() {
  const totalPrice = document.getElementById("tPrice");
  const fTPrice = document.getElementById("fOOterTprice");
  const mCost = document.getElementById("bikeCost");
  const sCost = document.getElementById("storageCost");
  const dCost = document.getElementById("dCharge");


  totalPrice.innerText =
    parseInt(sCost.innerText) +
    parseInt(mCost.innerText) +
    parseInt(dCost.innerText) ;

  fTPrice.innerText = totalPrice.innerText;
  document.getElementById("cuponButton").addEventListener("click", function () {
    const cInput = document.getElementById("cuponInput");
    const cValue = cInput.value;

    if (cValue == "algostack") {
      const applyedCupon = parseFloat(totalPrice.innerText) * 0.2;
      fTPrice.innerText = totalPrice.innerText - applyedCupon;
      cInput.value = "";
    }
  });
}

function addCart(input, itemType) {
  const itemValue = document.getElementById(input);

  if (itemType == "Yamaha_R15M") {
    itemValue.innerText = 575000;
    calculation();
  } else if (itemType == "Yamaha_MT_15") {
    itemValue.innerText = 428000;
    calculation();
  }
  else if (itemType == "Single_Channel_ABS") {
    itemValue.innerText = 10000;
   
    calculation();
  } else if (itemType == "Duble_Channel_ABS") {
    itemValue.innerText = 15000;
    calculation();
  } else if (itemType == "Coustom_Braking_System") {
    itemValue.innerText = 22000;
    calculation();
  }

  else if (itemType == "DFreeCharge") {
    itemValue.innerText = 0;
    calculation();
  } else if (itemType == "Dcharge") {
    itemValue.innerText = 5000;
    calculation();
  }
}

function addCartName(input, itemType) {

  const itemValue = document.getElementById(input);

  if (itemType == "Yamaha_R15M") {
    itemValue.innerText = "Yamaha R15M";
  }  else if (itemType == "Yamaha_MT_15") {
    itemValue.innerText = "Yamaha MT 15";
   
  }else if (itemType == "Single_Channel_ABS") {
    itemValue.innerText = "Single Channel ABS";
   
  } else if (itemType == "Duble_Channel_ABS") {
    itemValue.innerText =  "Duble Channel ABS";
 
  } else if (itemType == "Coustom_Braking_System") {
    itemValue.innerText = "Coustom Braking System";
   
  }
  else if (itemType == "DFreeCharge") {
    itemValue.innerText = "Regular Deleivery";

  } else if (itemType == "Dcharge") {
    itemValue.innerText = "Fastes Delivery";

  }

}

function ChangeImg(input, itemType) {

  const itemValue = document.getElementById(input);

  if (itemType == "Yamaha_R15M") {
    itemValue.src = "images/feature-bike.jpg";
  }  else if (itemType == "Yamaha_MT_15") {
    itemValue.src = "images/MT-15.jpg";
   
  }

}


document.getElementById("Yamaha_R15M").addEventListener("click", function () {
  addCart("bikeCost", "Yamaha_R15M");
  addCartName("bikeName", "Yamaha_R15M");
  ChangeImg("bikeimg","Yamaha_R15M")
});


document.getElementById("Yamaha_MT_15").addEventListener("click", function () {
  addCart("bikeCost", "Yamaha_MT_15");
  addCartName("bikeName", "Yamaha_MT_15")
  ChangeImg("bikeimg","Yamaha_MT_15")
});




document.getElementById("Single_Channel_ABS").addEventListener("click", function () {
  addCart("storageCost", "Single_Channel_ABS");
  addCartName("bIteam", "Single_Channel_ABS");
});
document.getElementById("Duble_Channel_ABS").addEventListener("click", function () {
  addCart("storageCost", "Duble_Channel_ABS");
  addCartName("bIteam", "Duble_Channel_ABS");
});
document.getElementById("Coustom_Braking_System").addEventListener("click", function () {
  addCart("storageCost", "Coustom_Braking_System");
  addCartName("bIteam", "Coustom_Braking_System");
});


document.getElementById("DFreeCharge").addEventListener("click", function () {
  addCart("dCharge", "DFreeCharge");
  addCartName("DeliveyCharge", "DFreeCharge");
});
document.getElementById("Dcharge").addEventListener("click", function () {
  addCart("dCharge", "Dcharge");
  addCartName("DeliveyCharge", "Dcharge");
});
