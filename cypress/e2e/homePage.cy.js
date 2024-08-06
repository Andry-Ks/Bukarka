"use strict";

describe("Головна сторінка сайту", () => {
    it("Функції головної сторінки", () => {
        cy.visit("https://bukarka.vercel.app/");
        cy.wait(5000);
        cy.get('.sc-kpdYNm > .sc-leGcMD').click(); //Каталог
        cy.get('.sc-kiTBBF.eWyMGQ').click(); //X
        cy.get('.sc-kTNzjB > .sc-gfMXTh > :nth-child(1) > .sc-ckafRU').click(); //Обране
        cy.get('.sc-kTNzjB > .sc-gfMXTh > :nth-child(2) > .sc-ckafRU').click(); //Кошик
        cy.get('.sc-kiTBBF.eWyMGQ').click(); //X
        cy.get('.sc-kTNzjB > .sc-gfMXTh > :nth-child(3) > .sc-ckafRU').click(); //Вхід
        cy.get('.sc-kiTBBF.eWyMGQ').click(); //X

        cy.contains('a', 'Про магазин').click();
        cy.contains('a', 'Доставка, оплата і повернення').click();
        cy.contains('a', 'Контакти і зворотний зв’язок').click();
        cy.contains('a', 'Book Club').click();
        cy.contains('a', 'Політика конфіденційності').click();
        cy.contains('a', 'Умови користування').click();
        cy.get('rect[fill="url(#pattern0_6014_4787)"]').click({ multiple: true }); //Лого

        cy.contains('span', '+380 96 123 45 67').should('be.visible');
        cy.contains('span', 'bukarka.info@gmail.com').should('be.visible');
        cy.get('.sc-hVsJot.dRYqOO').should('be.visible'); //Copyright
    });
});