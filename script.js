console.log("Hello world");

document.write("<h1>Loops Demo</h1>");

const classroom = ["Cain","Josh", "Jr", "Kierra", "Sammy", "Mathew"];

var i = 0;
while(classroom[i]){
    console.log(classroom[i]);
    i++;
}

while(i<=10){
    console.log(i);
    i++;
}

// for(i=0; i<=10; i=i+1){
//     console.log(i);
// }

// for(i=0; i<=10; i=i+2){
//     console.log(i);
// }

// for(i=0; i<=10; i=i+1){
//     console.log(i*2);
// }

// for(i=0; i<=5; i=i+1){
//     console.log(i*2);
// }

// for(i=0; i<=10; i=i+1){
//     console.log(i*10);
// }

const pets =["Dog" , " Cat" , " Fish" , " Ferret" , " Aligator"];

document.write("<h2>Our pet store has the fallowing</h2>");

for(i=0; i<pets.length; i++){
    document.write(pets[i]);
}

