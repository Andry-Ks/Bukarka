"use strict";

describe("Home page of the site", () => {
    it("Home Page Features", () => {
        cy.visitBukarka();
        cy.contains('Каталог').click();
        cy.get('.sc-kiTBBF.eWyMGQ').click(); //X
        cy.contains('Обране').click();
        cy.contains('Кошик').click();
        cy.get('.sc-kiTBBF.eWyMGQ').click(); //X
        cy.contains('Вхід / Реєстрація').click();
        cy.get('.sc-kiTBBF.eWyMGQ').click(); //X

        cy.contains('a', 'Про магазин').click();
        cy.get('.sc-klxZGT.dbcffv').should('be.visible'); //Text block
        cy.contains('a', 'Доставка, оплата і повернення').click();
        cy.get('.sc-klxZGT.dbcffv').should('be.visible'); //Text block
        cy.contains('a', 'Контакти і зворотний зв’язок').click();
        cy.get('.sc-bPNAxY').should('be.visible'); //Text block
        cy.get('input[placeholder="Email"]').should('be.visible');
        cy.get('input[placeholder="Ім’я"]').should('be.visible');
        cy.get('input[placeholder="+380"]').should('be.visible');
        cy.get('input[placeholder="Введіть повний номер замовлення"]').should('be.visible');
        cy.get('textarea[placeholder="Ваше повідомлення"]').should('be.visible');
        cy.get('input[type="checkbox"]').check();
        cy.get('.sc-hSWyVn').should('be.visible'); //The form submission is currently in the development stage
        cy.contains('a', 'Book Club').click();
        cy.get('.sc-klxZGT').should('be.visible'); //Text block
        cy.contains('a', 'Політика конфіденційності').click();
        cy.get('.sc-bYycxU').should('be.visible'); //Text block
        cy.contains('a', 'Умови користування').click();
        cy.get('.sc-bYycxU').should('be.visible'); //Text block
        cy.get('rect[fill="url(#pattern0_6014_4787)"]').click({ multiple: true }); //Logo

        cy.get('.sc-bJdqqZ > :nth-child(1) > span').should('be.visible'); //Telephone number
        cy.contains('span', 'bukarka.info@gmail.com').should('be.visible');
        cy.get('.sc-cQXfRj').should('be.visible'); //Copyright
    });
});