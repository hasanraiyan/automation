let aiList=[];

async function getAiList() {
    const url = "http://localhost:11434/api/tags";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        
        console.log(json);
        return json
        } catch (error) {
        console.error(error.message);
    }
}
// Using .then()
getAiList().then(data => {
    console.log(data.models.length)
    for (i=0;i<data.models.length;i++){
        aiList.push(data.models[i].name);
    }
    showAiList(aiList)
});


// show available ai list
const showAiList = (arr) => {
    let aiListItem = document.querySelector(".ai-list-item");
    console.log(aiListItem);
    aiListItem.innerHTML = "";
    arr.forEach(element => {
        let p = document.createElement("p");
        p.textContent = element;
        aiListItem.appendChild(p);
    });
}



