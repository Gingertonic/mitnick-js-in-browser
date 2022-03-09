/**
 * @jest-environment jsdom
 */

const handlers = require("../static/handlers")

const helpers = require("../static/helpers")
jest.mock("../static/helpers")

describe('handlers', () => {
    describe('handleItemClick', () => {
        test('it calls the addNewDiv helper passing the text content of clicked element', () => {
            // make a fake event
            const eventStub = {
                target: {
                    textContent: "chocolate"
                }
            }
            // call handleItemClick
            handlers.handleItemClick(eventStub)
            // check if addNewDiv has been called, passed "chocolate"
            expect(helpers.addADiv).toHaveBeenCalledWith("chocolate")
        })
    });
    
})