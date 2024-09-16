"use strict";

describe("Каталог", () => {
    it("Категорії каталогу", () => {
        cy.visitBukarka();

  const categories = [
  "Усі книги",
  "Дитяча",
  "Книги за віком",
        "0-1 роки",
        "2-3 роки",
        "4-6 років",
        "7-9 років",
     "10-12 років",
     "13-15 років",
"За тематикою",
      "Казки",
      "Абетки, лічба",
      "Енциклопедії",
      "Вільмебухи",
      "Розмальовки",
      "Різдвяні, новорічні",
      "Навчальні, розвивальні",
      "Вірші",
      "Про динозаврів",
      "Про транспорт",
      "Фентезі та фантастика",
      "Детективи",
      "Комікси",
      "Про релігії",
      "Про психологію",
      "Про фізіологію",
  "Художня",
  "Поезія, антології",
  "Детективи",
  "Фентезі та фантастика",
  "Есеї",
  "Публіцистика",
  "Романи",
  "Історичні",
  "Любовні",
  "Пригодницькі",
  "Навчальна",
  "ДНЗ",
  "Вихователю",
  "Оформлення інтерʼєру",
  "Робочі зошити, альбоми",
  "Школа",
  "Підручники",
  "Робочі зошити",
  "Хрестоматії",
   "Збірники завдань",
   "Атласи, контурні карти",
  "Підготовка до уроків",
  "Довідники",
  "Словники",
  "Нехудожня/наукова",
  "Словники",
        "Іноземні мови",
        "Фразеологічні",
        "Орфографічні",
  "Суспільні науки",
       "Політологія",
        "Соціологія",
        "Етнографія, народознавство",
  "Саморозвиток",    
  "Нон-фікшн",
  "Психологія",
  "Бізнес-література",
  "Подарункові видання",
  "Іноземними мовами" 
]

    categories.forEach(category => {
      cy.navigateToCategory(category);
    });   
        
  });
});