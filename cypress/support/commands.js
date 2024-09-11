// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('visitBukarka', () => {
    cy.visit("https://bukarka.vercel.app/");
    cy.wait(5000); //Затримка, мс
});

Cypress.Commands.add('clickCatalogButton', () => {
    cy.get('.sc-kpdYNm > .sc-leGcMD').click(); //Кнопка каталог
    cy.wait(2000);
});

Cypress.Commands.add('navigateToCategory', (categoryName) => {
    cy.clickCatalogButton();
    cy.contains('a', categoryName).click(); // Перехід до категорії
});