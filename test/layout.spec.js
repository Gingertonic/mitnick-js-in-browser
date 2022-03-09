/**
 * @jest-environment jsdom
 */

const { expect } = require("@jest/globals");
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');



describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head', () => {
        test('it has a title', () => {
            let title = document.querySelector("head title");
            expect(title).toBeTruthy();
            expect(title.textContent).toContain("JS in the Browser");
        })
    })

    describe('body', () => {
        test('it has a heading', () => {
            let heading = document.querySelector("#heading");
            expect(heading).toBeTruthy();
            expect(heading.textContent).toContain("Welcome")
        })

        // test('it has a button to switch modes', () => {
        //     let modeButton = document.querySelector('#mode-btn');
        //     expect(modeButton).toBeTruthy();
        //     expect(modeButton.textContent).toBe('Switch Mode');
        // })
    })
})