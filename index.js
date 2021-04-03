
let rideInFeet;

function scuberGreetingForFeet(rideInFeet){
  // Write your code here!
  
  if (rideInFeet <= 400){
    return ("This one is on me!");
    
  }else if (rideInFeet > 2000 && rideInFeet <= 2500){
    return("I will gladly take your thirty bucks.");

  }else{
    return("No can do.");
  }
} 
scuberGreetingForFeet(199); 
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501)


function ternaryCheckCity(city){ 
  // Write your code here!
   return city !== 'NYC' ? 'No go.' : "Ok, sounds good.";
}
ternaryCheckCity(true);
ternaryCheckCity(false);


var tipMessage = 'generous';

function switchOnCharmFromTip(tipMessage){

  switch (tipMessage){
    case 'generous':
       return "Thank you so much.";
    case 'not as generous':
        return 'Thank you.';
    case 'thanks for everything':
        return "Bye.";
    default: 
        'Bye.'

  }
  // Write your code here!


}