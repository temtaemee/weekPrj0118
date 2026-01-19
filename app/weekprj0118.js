
function setListnerToCard(){
    const cardAreaArr = document.querySelectorAll(".card-area");
    for(const cardArea of cardAreaArr){
        cardArea.addEventListener("click", function(evt){

            const temp = evt.currentTarget;
            temp.classList.toggle("flip");
            
            setTimeout(() => {
                temp.classList.toggle("flip");
            }, 3000);
        });
    }
}




const main = document.querySelector("main");


function generateCardList(){
    cardCnt = document.querySelector("#cardCnt").value;
    if(cardCnt > 50){
        alert("under 50");
        return;
    }

    main.innerHTML = "";

    const cardContentArr = [];
    for(let i = 1; i <= cardCnt; i++){
        cardContentArr.push(i);
    }
    
    const arr = cardContentArr.concat(cardContentArr);

    const result = shuffleArr(arr);
    
    for(const temp of result){
        main.innerHTML += `
            <div   div class="card-area">
                <div class="card">
                    <div class="card-back">${temp}</div>
                    <div class="card-front">?</div>
                </div>
            </div>
        `;
    }
}

function shuffleArr(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  return arr;
}


function handleClick(){
    generateCardList();
    setListnerToCard();
}