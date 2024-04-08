import variables from '../fixtures/example.json'
import { faker } from '@faker-js/faker'
import '../support/commands'

const name = faker.person.firstName()
const lastname = faker.person.lastName()
const number = faker.number.int(5)
const mail = name+number+lastname+('@gmail.com')
const username = faker.internet.userName()
const password = faker.internet.password()



describe('example to-do app', () => { 
  beforeEach(() => {
      
      cy.viewport(1920, 1080)
      cy.visit('/')
    })
    
    it('Registration', () => {
       
      cy.on("uncaught:exception", (e, runnable) => {
        console.log("error", e);
        console.log("runnable", runnable);
        console.log("error", e.message);
        return false;
        });

        cy.get('[data-cy="signup_btn_header"]').click()
        cy.get('[data-cy="cy-sign-up-email-step-input"]').type(mail);
        cy.get('[data-cy="cy-sign-up-email-step-button"]').click();
        cy.wait(1000)
        cy.get('[data-cy="cy-sign-up-username-step-input"]').type(username)
        cy.get('[data-cy="cy-sign-up-username-step-button"]').click()
        cy.get('[data-cy="cy-sign-up-password-step-input"]').type(password)
        cy.get('[data-cy="cy-sign-up-password-step-button"]').click()
        cy.get('[data-cy="cy-currency-moda-list"] > :nth-child(1)').click()
        cy.get('[data-cy="cy-sign-up-terms-step-btn"]').click()
        cy.visit('/') 
       
      })

    it('Jackpotz Mania FAQ Verification', () =>{
        cy.get('.c-jackpotz-mania-homepage-content-box__info > .c-jpm-guest-section > .c-jackpotz-mania-button').click()
        cy.get('#jackpot-mania-faq-section > .c-jackpotz-mania-faq > .c-jackpotz-mania-faq-content > div:nth-child(6) > div > p')
        .should('have.text', '\n          I\'ve lost my ACTIVE status. How to get it back? \n        ')
        cy.get('#jackpot-mania-faq-section > .c-jackpotz-mania-faq > .c-jackpotz-mania-faq-content > div:nth-child(6) > .c-jackpotz-mania-faq-item-answer  > div')
        .should('have.text', 'No worries, the JPM statuses are updated in real time. Which means that as soon as you meet the requirements again (deposit at least once and wager with real money a minimum of $1,000 or equivalent in your currency) you\'ll get your Active status back right away!')

        cy.get('#jackpot-mania-faq-section > .c-jackpotz-mania-faq > .c-jackpotz-mania-faq-content > div:nth-child(7) > div > p')
        .should('have.text', '\n          Can I withdraw or use my J$ to play casino games for real money?\n        ')
        cy.get('#jackpot-mania-faq-section > .c-jackpotz-mania-faq > .c-jackpotz-mania-faq-content > div:nth-child(7) > .c-jackpotz-mania-faq-item-answer  > div')
        .should('have.text', 'Sadly no. J$ is a currency that can only be used in Jackpotz Mania. Your J$ can only be converted into Daily Jackpot Spins and to compete in the JPM Races.')
        
        cy.get('#jackpot-mania-faq-section > .c-jackpotz-mania-faq > .c-jackpotz-mania-faq-content > div:nth-child(8) > div > p')
        .should('have.text', '\n          I didn\'t manage to claim my Daily Jackpot Spins within the allocated 24-hour time frame. Can I have them back?\n        ')
        cy.get('#jackpot-mania-faq-section > .c-jackpotz-mania-faq > .c-jackpotz-mania-faq-content > div:nth-child(8) > .c-jackpotz-mania-faq-item-answer  > div')
        .should('have.text', 'Unfortunately not. Once credited, you have up to 24 hours to claim your Daily Jackpot Spins. Should you fail to do so within the allocated time, your Jackpot Spins are forfeited. This makes it super important to log in to your BitStarz account every day to never miss out on the chance to win these Jackpots.')
        
      })

    it('The Elvis From Example', () => {
        cy.get('#gameSearchInput').type(variables.gameName)
        cy.get('[alt="Elvis Frog TRUEWAYS Slot"]').should('exist').click()
        cy.url().should('eq', 'https://test.bitstarz.com/slots/elvis-frog-trueways');

      })
        

        
        

        
   
  
    
  })
  