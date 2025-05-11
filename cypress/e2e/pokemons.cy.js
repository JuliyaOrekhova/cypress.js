describe('Проверка покупки аватара', function () {

    it('e2e автотест для покемонов: на покупку нового аватара для своего тренера', function () {
         cy.visit('https://pokemonbattle.ru/'); // зашли на сайт
         cy.get('#k_email').type('scorpio-0411@yandex.ru');
         cy.get('#k_password').type('JAN040429h');
         cy.get('.MuiButton-root').click(); //авторизовались
         cy.wait(2000);

         cy.get('.header_card_trainer_id_num').click(); // нажали на своего тренера
         cy.wait(5000);

         cy.get('.k_mobile > :nth-child(5)').click(); // нажали на смену аватара
         cy.wait(5000);
         cy.get(':nth-child(4) > .shop__button').click(); // нажали на кнопку купипить выбранный аватар
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111 1111 1111 1111'); // ввели номер карты
         cy.get(':nth-child(1) > .style_1_base_input').type('12/30'); // ввели срок годности карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // ввели сvv
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('IVANOV IVAN'); // ввели ФИО
         cy.wait(2000);

         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажали оплатить  
       
         cy.wait(2000);  
         cy.get('.style_1_base_input').type('56456'); // ввели код из смс
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажали оплатить

         cy.get('.payment_status_top').contains('Покупка прошла успешно');
         cy.get('.payment_form_card_form').should('be.visible');
     })

   })  
