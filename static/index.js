const { handleItemClick } = require("./handlers")

const allItems = document.querySelectorAll('span.item-name')

allItems.forEach((item) => {
    item.addEventListener('click', handleItemClick)
})
