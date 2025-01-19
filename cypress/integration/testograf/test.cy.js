import 'cypress-iframe';

describe("Проверка успешной отправки формы", () => {


     it('test-case', () => {
  
cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template');
          cy.get('#ttgraf-33').scrollIntoView().should('be.visible');
          cy.frameLoaded('#ttgraf-33');
cy.iframe('#ttgraf-33').find('.question_107 > .content___fde8e27345b6df2af011 > .shortText > .input > .control___e16bbac759474cb49f55').type('Елена');
cy.iframe('#ttgraf-33').find('.question_108 > .content___fde8e27345b6df2af011 > .shortText > .input > .control___e16bbac759474cb49f55').type('example@gmail.com');
cy.iframe('#ttgraf-33').find('.question_109 > .content___fde8e27345b6df2af011 > .shortText > .input > .control___e16bbac759474cb49f55').type('89000000000');
cy.iframe('#ttgraf-33').find('#downshift-0-toggle-button').should('have.attr','aria-expanded','false').click();
cy.iframe('#ttgraf-33').find('#downshift-0-menu').click();
cy.iframe('#ttgraf-33').find('.multiline___cc6bb61529c652f37050').type('Обращение');
cy.iframe('#ttgraf-33').find('.action___d45ea1f1799f107d8ccf > .button').click();
cy.iframe('#ttgraf-33').find('.wysiwyg').contains('Благодарим за обращение!');

   });
});
       
