
    let cardImg = "";
    const imgElements = [];
    updateView();
    fetchCard();
    
    async function fetchCard(){
        try{
    
            const card = document.getElementById("cardNumber").value;
            const response = await fetch(`https://arkhamdb.com/api/public/card/${card}`);
    
            if(!response.ok){
                throw new Error("Fant ikke noen kort")
            }
    
            const data = await response.json();
            cardImg = "https://arkhamdb.com" + data.imagesrc;
            console.log(data);
            
    
    
        }
        catch(error){
            console.error(error);
        }
        updateView();
    }
    
    function updateView(){
        document.getElementById('app').innerHTML = /*HTML*/ `
        <input type ="text" id="cardNumber" placeholder ="Skriv inn et kort">
        <button onclick="fetchCard()">Finn Kort</button><br>
        <img src=${cardImg} alt="ArkhamCardImg" id="arkhamCardImg" style="display: ${cardImg === "" ? "none" : "block"}">
        `;
    }

    function returnImgElements(){
        return imgElements.map(/*???*/).join('');
        
    }

