function addADiv(content){
    const newDiv = document.createElement("div")
    newDiv.className = "big-list"
    newDiv.textContent = content
    document.body.append(newDiv)
}

const updateHeading = () => document.querySelector('#heading').textContent = 'Welcome';

module.exports = { addADiv, updateHeading }