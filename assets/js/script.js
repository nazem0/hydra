let indexer = 0
const switchesContainer = document.querySelector(".switches-container")
let children = [];

for (let i = 0; i < switchesContainer.children.length; i++) {
    children[i] = switchesContainer.children[i].innerHTML;
}

// I need to adjust the following JS Code
function switchLeft() {
    switchesContainer.children[0].innerHTML = children[--indexer];


    if (indexer < 0) {
        // Reset Indexer
        indexer = 2
        // Show last one so we start from the end to be switched from start in the left direction
        switchesContainer.children[0].innerHTML = children[indexer]

    }

}

function switchRight() {
    switchesContainer.children[0].innerHTML = children[++indexer];


    if (indexer > 2) {
        // Reset Indexer
        indexer = 0
        // Show last one so we start from the end to be switched from end in the right direction
        switchesContainer.children[0].innerHTML = children[indexer]

    }
}


