// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let fuelTempCelcius = -225
let fuelLevel = "100%"
let weatherStatus = "Clear"
const line = "-------------------------------------"

// Write code to generate the LC04 report here:

console.log(line)
console.log("> LC04 - LAUNCH CHECKLIST")
console.log(line)
console.log("Date: "+date)
console.log("Time: "+time+"\n")
console.log(line)
console.log("> ASTRONAUT INFO")
console.log(line)
console.log("* count: "+astronautCount)
console.log("* status: "+astronautStatus+"\n")
console.log(line)
console.log("> FUEL DATA")
console.log(line)
console.log("* Fuel temp celsius: "+fuelTempCelcius)
console.log("* Fuel level: "+fuelLevel+"\n")
console.log(line)
console.log("> MASS DATA")
console.log(line)
console.log("* Crew mass: "+(astronautCount * averageAstronautMassKg))
console.log("* Fuel mass: "+fuelMassKg)
console.log("* Shuttle mass: "+shuttleMassKg)
console.log("* Total mass: "+(crewMassKg + fuelMassKg + shuttleMassKg)+"\n")
console.log(line)
console.log("> FLIGHT PLAN")
console.log(line)
console.log("* weather: "+weatherStatus+"\n")
console.log(line)
console.log("> OVERALL STATUS")
console.log(line)
console.log("* Clear for takeoff: YES")


// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.