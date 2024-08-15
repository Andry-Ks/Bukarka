"use strict";

describe("Тестування функції пошуку", () => {
    it("Позитивний тест", () => {
        cy.fixture('searchData').then((searchData) => {
            cy.visitBukarka();
            cy.get('input[placeholder="Знайти книгу"]').type(searchData.validSearch);
            cy.contains('Знайти').click({ force: true });
            cy.contains(searchData.validSearch).should('be.visible');
        });
    });
    
    it("Негативний тест", () => {
        cy.fixture('searchData').then((searchData) => {
            cy.visitBukarka();
            cy.get('input[placeholder="Знайти книгу"]').type(searchData.invalidSearch);
            cy.contains('Знайти').click({ force: true });
            cy.contains('No results found').should('be.visible');
        });
    });

    it ("Пошук за частковою назвою", () => {
        cy.fixture('searchData').then((searchData) => {
            cy.visitBukarka();
            cy.get('input[placeholder="Знайти книгу"]').type(searchData.partialSearch);
            cy.contains('Знайти').click({ force: true });
            cy.contains(searchData.partialSearch).should('be.visible');
        });
    });

    it ("Пошук за автором", () => {
        cy.fixture('searchData').then((searchData) => {
            cy.visitBukarka();
            cy.get('input[placeholder="Знайти книгу"]').type(searchData.authorSearch);
            cy.contains('Знайти').click({ force: true });
            cy.contains(searchData.authorSearch).should('be.visible');
        });
    });

});