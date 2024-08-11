"use strict";

describe ("Обране", () => {
    it ("Додавання та видалення з обраного", () => {
        cy.visit("https://bukarka.vercel.app/");
        cy.wait(7000);
        cy.get('#root > div.sc-beySPh.irQFrm > div > div:nth-child(2) > div.slider-container > div > div.slick-list > div > div:nth-child(2) > div > div > div.sc-bHduTz.ihvAmM > div > svg > path')
        .click();
      
    });

});