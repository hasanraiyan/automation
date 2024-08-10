// const aiList=["ollama","jarvis","friday","hacksmith","rayan"]

let aiList;


// show available ai list
const showAiList =(arr)=>{
    let aiListItem = document.querySelector(".ai-list-item");
    console.log(aiListItem);
    aiListItem.innerHTML="";
    arr.forEach(element => {
        let p = document.createElement("p");
        p.textContent = element;
        aiListItem.appendChild(p);
    });
}


showAiList(aiList)