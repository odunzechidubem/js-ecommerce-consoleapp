("use strict");
//const prompt = require("prompt-sync")({ sigint: true });

function finalBuy() {
  if (nextStep == 1) {
    console.log(
      "Send amount to the account details below\n Odunze Chidubem Opay 8069442635"
    );
  } else {
    return onlineShop;
  }
}

const onlineShop = (
  "Welcome to My Online Store. Select from the list:\n1. Buy LoveBite Bread - N1,500\n2. Buy Okpa - N200 \n3. Buy Plate of Rice with Turkey - N3,000\n4. Buy Abacha and Fish - N800\n5. Buy Abacha and Kpomo - N600"
);

const nextStep = (
  "Here's your next step:\n1. Proceed to payment\n2. Back to homepage"
);

if (onlineShop == 1) {
  console.log("LoveBite Bread - N1,500");
  finalBuy(nextStep);
} else if (onlineShop == 2) {
  console.log("Okpa is sold for - N200");
  finalBuy(nextStep);
} else if (onlineShop == 3) {
  console.log("Plate of Rice with Turkey - N3,000");
  finalBuy(nextStep);
} else if (onlineShop == 4) {
  console.log("Buy Abacha and Fish - N800");
  finalBuy(nextStep);
} else if (onlineShop == 5) {
  console.log("Buy Abacha and Kpomo - N600");
  finalBuy(nextStep);
} else {
  console.log("Enter a value from 1 to 5");
}