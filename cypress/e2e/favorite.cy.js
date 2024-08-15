"use strict";

describe ("Обране", () => {
    it ("Додавання та видалення з обраного", () => {
        cy.visitBukarka();
        cy.get('input[placeholder="Знайти книгу"]').type("Словник іноземних слів");
        cy.contains('Знайти').click({ force: true });
        cy.get('#root > div.sc-beySPh.irQFrm > div > div > div > div > div.sc-dlDPRo.yldDU > div > svg > path')
        .click();
        cy.get('.sc-kTNzjB > .sc-gfMXTh > :nth-child(1) > .sc-ckafRU').click(); //Обране
        cy.get('#root > div.sc-beySPh.irQFrm > div > div > div > div > div.sc-dlDPRo.yldDU > div > svg > path')
        .click();
        cy.get('.sc-fsYfdN').should('be.visible'); //No favorite books
    });

});