//
// document.write("Hello group 43!");
// document.body.style.fontSize = "108px";
// document.body.style.textAlign = "center";
// setInterval(() =>{
//     const colors =["red", "green", "yellow", "orange", "blue"];
//     const randIndex =Math.floor(Math.random() * colors.length);
//     document.body.style.backgroundColor = colors[randIndex];
// }, 1000);



let candidateName1 = "Oroz Alykulov";
let candidateName2 = "Yruz Kulov";
let candidateName3 = "Samat Moldokulov";

let votingTitle = "Local Kenesh 2024";

let votersCount = 150_000;
let comingVotersCount = 120_000;
let comingVotersPercentage = comingVotersCount * 100 / votersCount;

console.log (votingTitle +"coming" + comingVotersPercentage +"%")

let candidateVotesCount1 = 43_000;
let candidateVotesCount2 = 27_000;
let candidateVotesCount3 = 35_000;

let votesSum = candidateVotesCount1 + candidateVotesCount2 + candidateVotesCount3;

let electionIsok = comingVotersCount > votesSum;

if (electionIsok) {
    console.log (votingTitle + "finished successfully");
}else{
    console.error(votingTitle + "fails." );
}

console.log("Voters:" + comingVotersCount);
console.log("Voters:" + votesSum);

if(comingVotersPercentage > 50){
    console.log("Election ok");
}else{
    console.warn("Election fails. Low coming.")
}