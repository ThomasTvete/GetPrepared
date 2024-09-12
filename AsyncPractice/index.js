


// function task1(callback){
//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 2000)
// }
// function task2(callback){
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     }, 1000)
// }
// function task3(callback){
//     setTimeout(() => {
//         console.log("Task 3 complete");
//         callback();
//     }, 3000)
// }
// function task4(callback){
//     setTimeout(() => {
//         console.log("Task 4 complete");
//         callback();
//     }, 1500)
// }


// task1(() => 
//     task2(() => 
//         task3(() => 
//             task4(() => console.log("All tasks complete"))
//         )
//     )
// );

// CALLBACK-HELL
// function walkDog(callback){
//     setTimeout(() => {
//         console.log("Du går tur med hunden 🐶");
//         callback();
//     }, 1500);
// }
// function cleanKitchen(callback){
//     setTimeout(() => {
//         console.log("Du vasker kjøkkenet 🧽");
//         callback();
//     }, 3000);
// }
// function takeOutTrash(callback){
//     setTimeout(() => {
//         console.log("Du tar ut søpla 🚮");
//         callback();
//     }, 500);
// }

// walkDog(() => 
//         cleanKitchen(() =>
//             takeOutTrash(() => 
//                 console.log("Du er ferdig med husarbeid, tid for koding ;)))")
//                         )
//                     )
//         )

//PROMISE METHOD-CHAINING
// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = true;

//             if(dogWalked){
//                 resolve("Du går tur med hunden 🐶");
//             }
//             else{
//                 reject("Hunden bæsjer på teppet 💩")
//             }
//         }, 1500);
//     });
// }
// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const kitchenClean = true;

//             if(kitchenClean){
//                 resolve("Du vasker kjøkkenet 🧽");
//             }
//             else{
//                 reject("Det vokser sopp bak kjøleskapet ditt (de er giftige) 🍄")
//             }
//         }, 3000);
//     });
// }


// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const trashGone = true;

//             if(trashGone){
//                 resolve("Du tar ut søpla 🚮");
//             }
//             else{
//                 reject("Hvilken søppel? Dette er en pose med maur 🐜")
//             }
//         }, 500);
//     });
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("Du er ferdig med husarbeid, tid for koding ;)))")})
//          .catch(error => console.error(error));

//ASYNC/AWAIT METODE
// async function doChores() {
//     try{
//         const walkDogResult = await walkDog();
//     console.log(walkDogResult);

//     const kitchCleanRes = await cleanKitchen();
//     console.log(kitchCleanRes);

//     const trashTossRes = await takeOutTrash();
//     console.log(trashTossRes);

//     console.log("Du er ferdig med husarbeid, tid for koding ;)))")
//     }
//     catch(error){
//         console.error(error);
//     }
// }

//D6 DETERMINATE SUCCESS

function doTask(goodText, badText, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const success = diceThrowWin();

            if (success) {
                resolve(goodText);
            }
            else {
                reject(badText)
            }
        }, delay);
    });
}

function diceThrowWin() {
    const diceResult = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return diceResult > 1;
}

function addToHtml(content) {
    document.getElementById("app").innerHTML += content + "<br>";
}

function newTextDelay(text) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text);
        }, 1000);
    });
}

async function newText(text) {
    const result = await newTextDelay(text);
    addToHtml(result);
}


async function doChores() {
    addToHtml(`<h3>På tide med litt husarbeid</h3>`);
    await newText("Ser ut som hunden må ut");

    try {
        const walkDogResult = await doTask("Du går tur med hunden 🐶",
                                            "Hunden bæsjer på teppet 💩",
                                            3500
                                            );
        addToHtml(walkDogResult);

        await newText("Kjøkkenet lukter litt muggent");

        const kitchCleanRes = await doTask("Du vasker kjøkkenet 🧽",
                                            "Det vokser sopp bak kjøleskapet ditt (de er giftige) 🍄",
                                            5000
                                            );
        addToHtml(kitchCleanRes);
        
        await newText("Er det bare meg eller rørte søppelposen seg?");

        const trashTossRes = await doTask("Du tar ut søpla 🚮",
                                            "Hvilken søppel? Dette er en pose med maur 🐜",
                                            2000
                                            );
        addToHtml(trashTossRes);

        await newText("Du er ferdig med husarbeid, tid for koding ;)))");
    }
    catch (error) {
        addToHtml(error);
        await newText("Du var for treig!");
        await newText("Du har gjennomføringsevnen til en.... fisk 🐟");
    }
}

doChores();

