function calculateBMI(){
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  var bmi = weight / (height * height);

  if (bmi < 18.5){
    window.alert("⋆｡˚𖦹 Underweight 𖦹˚｡⋆");
  }
  else if (bmi >= 18.5 && bmi <= 24.9){
    window.alert("⋆｡˚𖦹 Normal weight 𖦹˚｡⋆");
  }
  else if (bmi >= 25 && bmi <= 29.9){
    window.alert("⋆｡˚𖦹 Overweight 𖦹˚｡⋆");
  }
  else if (bmi >= 30){
    window.alert("⋆｡˚𖦹 Obese 𖦹˚｡⋆");
  }
  else {
    window.alert("⋆｡˚𖦹 Invalid input 𖦹˚｡⋆");
  }
}

