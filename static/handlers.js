const { addADiv } = require("./helpers");

function handleItemClick(e) {
    const itemName = e.target.textContent;
    addADiv(itemName)
}

module.exports = { handleItemClick }

