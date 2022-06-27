//Test: control statement to determine the distance of the ride in feet.

function scuberGreetingForFeet(feet){
// Test 1: determine if the ride is less than or equal to 400 ft
if(feet <= 400){
  return "This one is on me!";
}
// Test 2: determine if the ride is between 400 and 2000 ft
else if(feet > 400 && feet < 2000){
  return 'That will be twenty bucks.';
}
// Test 3: determine if the ride is over 2000ft
else if(feet >= 2000 && feet <= 2500){
  return 'I will gladly take your thirty bucks.';
}
// Test 4: determine if the ride is over 2500ft
else if(feet > 2500){
  return 'No can do.';
}

}

// Test 5: determine if city is NYC and return 'Ok, sounds good'
// Test 6: will return 'No go' if the destination city is not NYC
function ternaryCheckCity(city){
 city === 'NYC' ? (city = "Ok, sounds good.") : (city = "No go.")
 return city;
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      tip = "Thank you so much.";
      break;
    case 'not as generous':
      tip = "Thank you.";
      break;
    default:
      tip = 'Bye.';
      break;
  }
  return tip;
}