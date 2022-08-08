describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  })

  it("should display running total when number buttons are updated", () => {
    cy.get("#number2").click();
    cy.get("#number3").click();
    cy.get(".display").should("contain", "23");
  })

  it("should do arithmetical operations and update the display with the result of the operation", () => {
    cy.get("#number5").click();
    cy.get("#operator-subtract").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "3");
  })

  it("should chain multiple operations together", () => {
    cy.get("#number7").click();
    cy.get("#operator_add").click();
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "18");
  })

  it("should display correct output for a range of numbers (negative)", () => {
    cy.get("#number2").click();
    cy.get("#operator-subtract").click();
    cy.get("#number7").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-5");
  })

  it("should display correct output for a range of numbers (decimals)", () => {
    cy.get("#number2").click();
    cy.get("#decimal").click();
    cy.get("#number3").click();
    cy.get("#number3").click();
    cy.get("#operator-multiply").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "6.99");
  })

  it("should display correct output for a range of numbers (very large numbers)", () => {
    cy.get("#number2").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#operator-multiply").click();
    cy.get("#number3").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "60000000000");
  })

  it("should return an error when dividing any number by 0", () => {
    cy.get("#number2").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "Error: can't divide by 0");
  })

})