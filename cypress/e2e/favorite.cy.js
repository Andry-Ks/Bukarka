"use strict";

describe ("Favorite", () => {
    it ("Add and remove from favorites", () => {
        cy.visitBukarka();
        cy.get('input[placeholder="Знайти книгу"]').type("Словник іноземних слів");
        cy.contains('Знайти').click({ force: true });
        cy.get('#root > div.sc-beySPh.irQFrm > div > div > div > div > div.sc-dlDPRo.yldDU > div > svg > path')
        .click();
        cy.contains('Обране').click();
        cy.get('#root > div.sc-beySPh.irQFrm > div > div > div > div > div.sc-dlDPRo.yldDU > div > svg > path')
        .click();
        cy.get('.sc-fsYfdN').should('be.visible'); //No favorite books
    });

});