// Define global variables
let aiList = [];
let selectedAi = null;
const aiListItem = document.querySelector(".ai-list-item");
const selectedAiElement = document.querySelector(".ai");
const selectAi = document.querySelector(".select-ai");
const sidebarButton = document.querySelectorAll(".sidebar");
const sidebar = document.querySelector(".sidebar-open");
const searchInput = document.querySelector('#search');
const chatHistoryItems = document.querySelectorAll('.chat-history');
const userPanel= document.querySelector(".footer-panel");

// Fetch AI list from the API
async function getAiList() {
    const url = "http://localhost:11434/api/tags";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Error fetching AI list:", error.message);
    }
}

// Display AI list in the DOM
const showAiList = (arr) => {
    aiListItem.innerHTML = ""; // Clear previous list
    arr.forEach(element => {
        let p = document.createElement("p");
        p.textContent = element;
        p.addEventListener("click", () => {
            selectedAi = element;
            selectedAiElement.textContent = selectedAi;
            aiListItem.classList.toggle("hidden");
            selectAi.classList.toggle("backgroundColor");
        });
        aiListItem.appendChild(p);
    });
};

// Create and display the AI list
const createAiList = () => {
    getAiList().then(data => {
        aiList = [];
        if (data && data.models) {
            data.models.forEach(model => {
                aiList.push(model.name);
            });
            showAiList(aiList);
            if (aiList.length > 0) {
                if (selectedAi==null){
                    selectedAi = aiList[0];
                }
               
                selectedAiElement.textContent = selectedAi;
            } else {
                console.warn("AI list is empty.");
            }
        } else {
            console.error("Invalid data structure:", data);
        }
    }).catch(error => {
        console.error("Error creating AI list:", error.message);
    });
};

// Event listener for the AI selection button
selectAi.addEventListener("click", () => {
    createAiList();
    if (aiListItem) {
        aiListItem.classList.toggle("hide");
        selectAi.classList.toggle("backgroundColor");
    }
});

// Event listner for sidebar button
sidebarButton.forEach((e)=>{
    e.addEventListener("click", (e) => {
        sidebar.classList.toggle("hidden");
    });
})
// add event listener in search to search history
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
  
    chatHistoryItems.forEach(item => {
      const itemText = item.textContent.toLowerCase();
      if (itemText.includes(searchTerm)) {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
  });

//   user panel settings
userPanel.addEventListener("click",(e)=>{
    console.log(e);
})

// Initial call to populate AI list
createAiList();









