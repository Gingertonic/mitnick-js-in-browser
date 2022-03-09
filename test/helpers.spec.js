/**
 * @jest-environment jsdom
 */

const helpers = require("../static/helpers")

describe('addADiv', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = '<body></body>';
    })

    test("creates a new div", () => {
        helpers.addADiv()
        // check if a new div with class of big-list is on the dom
        const aNewDiv = document.querySelector(".big-list")
        expect(aNewDiv).toBeTruthy()
    })

    test("adds the given content to the DOM", () => {
        helpers.addADiv("hello")
        const aNewDiv = document.querySelector(".big-list")
        expect(aNewDiv.textContent).toContain("hello")
    })
});

describe('updateHeading', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = '<div id="heading"></div>';
    })

    test("updates the heading to say 'Welcome'", () => {
        helpers.updateHeading()
        expect(document.querySelector('#heading').textContent).toContain('Welcome')
    })
})
