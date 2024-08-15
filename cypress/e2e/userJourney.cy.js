"use strict";

describe ("Шлях користувача до оформлення замовлення", () => {
    it ("Оформлення замовлення на купівлю книг", () => {
        cy.visitBukarka();
        cy.contains('Кошик').click();

        cy.get('button').then(($btn) => {
            if ($btn.hasClass('active')) {
              cy.contains('Видалити все').click();
              cy.log('Натиснута кнопка Видалити все');
            } else {
              cy.contains('Продовжити покупки').click();
              cy.log('Натиснута кнопка Продовжити покупки');
            }
          })

        cy.contains('Каталог').click();
        cy.contains('Усі книги').click();
        cy.contains('Купити').first().click();
        cy.get('.sc-gHWSBU > :nth-child(3)').click(); //+
        cy.wait(3000);
        cy.get('.sc-hNDLBw').click(); //Продовжити покупки
    });

});