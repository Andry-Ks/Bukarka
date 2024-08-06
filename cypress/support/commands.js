// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickCatalogButton', () => {
    cy.get('.sc-kpdYNm > .sc-leGcMD').click(); //Кнопка каталог
    cy.wait(2000); //Затримка, мс
});

Cypress.Commands.add('navigateToCategory', (categoryName) => {
    cy.clickCatalogButton();
    cy.contains('a', categoryName).click(); // Перехід до категорії

});