"use strict";

describe("Testing the search function", () => {
    it("Positive test with valid data", () => {
        cy.fixture('searchData').then((searchData) => {
            cy.visitBukarka();
            cy.get('input[placeholder="Знайти книгу"]').type(searchData.validSearch);
            cy.contains('Знайти').click({ force: true });
            cy.contains(searchData.validSearch).should('be.visible');
        });
    });
    
    it("Negative test with invalid data", () => {
        cy.fixture('searchData').then((searchData) => {
            cy.visitBukarka();
            cy.get('input[placeholder="Знайти книгу"]').type(searchData.invalidSearch);
            cy.contains('Знайти').click({ force: true });
            cy.contains('No results found').should('be.visible');
        });
    });

    it ("Positive test with partial name", () => {
        cy.fixture('searchData').then((searchData) => {
            cy.visitBukarka();
            cy.get('input[placeholder="Знайти книгу"]').type(searchData.partialSearch);
            cy.contains('Знайти').click({ force: true });
            cy.contains(searchData.partialSearch).should('be.visible');
        });
    });

    it ("Positive test by author", () => {
        cy.fixture('searchData').then((searchData) => {
            cy.visitBukarka();
            cy.get('input[placeholder="Знайти книгу"]').type(searchData.authorSearch);
            cy.contains('Знайти').click({ force: true });
            cy.contains(searchData.authorSearch).should('be.visible');
        });
    });

});