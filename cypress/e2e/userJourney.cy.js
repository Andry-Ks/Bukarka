"use strict";
const myName = "Ім'я";
const myLastName = "Прізвище";
const myPhone = "+380667771133";
const myCity = "Київ";
const myAddress = "вул. Хрещатик, буд. 10, кв. 200";
const wareHouse = "№11";

describe ("The path of an unregistered user to placing an order", () => {
    it ("Placing an order for purchasing books", () => {
        cy.visitBukarka();
        cy.contains('Кошик').click();

        cy.get('button').then(($btn) => {
            if ($btn.hasClass('active')) {
              cy.contains('Видалити все').click();
              cy.log('The "Delete All" button was clicked');
            } else {
              cy.contains('Продовжити покупки').click();
              cy.log('The "Continue Shopping" button was clicked');
            }
          })

        cy.contains('Каталог').click();
        cy.contains('Усі книги').click();
        cy.contains('Купити').first().click();
        cy.wait(2000);
        cy.get('.sc-gHWSBU > :nth-child(3)').click(); //+
        cy.wait(2000);
        cy.get('.sc-hNDLBw').click(); //Continue Shopping
        cy.get('button').filter(':contains("Купити")').eq(1).click();
        cy.contains('Перейти до оформлення').click();

        cy.get('#name').type(myName).should('have.value', myName);
        cy.get('#last-name').type(myLastName).should('have.value', myLastName);
        cy.get('#email').type(`user_${Date.now()}@example.com`);
        cy.get('#phone').type(myPhone).should('have.value', myPhone);
        cy.get('#cityInput').type(myCity).should('have.value', myCity);

        cy.get(':nth-child(4) > .sc-hhyKGa').click();
        cy.wait(2000);
        cy.get('#address').type(myAddress, { delay: 400 }).should('have.value', myAddress);
        cy.get(':nth-child(3) > .sc-hhyKGa').click();
        cy.get('#warehouse').clear().type(wareHouse).should('have.value', wareHouse);
        cy.get(':nth-child(2) > .sc-hhyKGa').click();
        cy.get('#warehouse').clear().type(wareHouse).should('have.value', wareHouse);

        cy.get('input[name="payment"][value="option3"]').check();
        cy.get('input[name="payment"][value="option2"]').check();
        cy.get('input[name="payment"][value="option1"]').check();

        cy.get('textarea[aria-label="Коментар до замовлення"]').type('Коментар доданий автотестом.');

        cy.get('button').contains('Підтвердити замовлення').should('be.disabled');
        cy.get('input[type="checkbox"][aria-describedby="terms"]').check();
        cy.contains('Підтвердити замовлення').click();
    });

});