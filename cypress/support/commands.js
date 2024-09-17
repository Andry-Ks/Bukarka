// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('visitBukarka', () => {
    cy.visit("https://bukarka.vercel.app/");
    cy.wait(5000);
});

Cypress.Commands.add('clickCatalogButton', () => {
    cy.contains('Каталог').click();
    cy.wait(2000);
});

Cypress.Commands.add('navigateToCategory', (categoryName) => {
    cy.clickCatalogButton();
    cy.contains('a', categoryName).click();
});