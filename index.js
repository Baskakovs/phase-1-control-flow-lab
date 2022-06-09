function scuberGreetingForFeet(feet){
  switch (true) {
    case(feet <= 400):
      return("This one is on me!")
      break
    case(feet > 400 && feet <= 2000):
      return("That will be twenty bucks.")
      break
    case (feet > 2000 && feet < 2500):
      return("I will gladly take your thirty bucks.")
      break
    case (feet > 2500):
      return("No can do.")
      break
  }
}

function ternaryCheckCity(city){
  if(city==="NYC"){
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  switch (true){
    case(tip === "generous"):
    return "Thank you so much.";
    break
    case(tip === "not as generous"):
    return "Thank you.";
    break
    default:
      return "Bye."
      break
  }
}