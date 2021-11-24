// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function () {
    it('Visits the ToolsQA Demo Page and check the menu items', function () {
        //Visit the Demo QA Website
        cy.visit("https://idh.id/");

        //Check Product Page 
        cy.get('form > .select2 > .selection > .select2-selection').click();

        cy.get('.select2-search__field').type('Bogor').type('{enter}');

        //Verify Searching Producy 

        cy.get('#idh-ajax-search-mobile').type('Pocari');

        cy.get('.idh-small-topbar > .idh-top-bar-center > form > .input-group > .input-group-button > .button').click();

        //Verify Menu Sidebar 

        cy.get('.title-bar').click()
        cy.get('.vertical > :nth-child(1) > a').should(length, '4');

    })
})