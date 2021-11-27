/// <reference types="cypress" />

describe('Mocha`s interface', () => {
    context('it provides a way to keep tests easier to read and organized', () => {
        it('This is my testcase', () => {
            expect(true).to.eq(true)
        })
    })
})