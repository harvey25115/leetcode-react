describe("Tephone input field", () => {
  it("should format the input", () => {
    cy.visit("http://localhost:3000/");
    // type telephone number
    cy.get("#phone").type("1234567890");
    // assert formatted number
    cy.get("#phone").should("have.value", "(123)456-7890");
  });
  it("should move the caret when removing in the middle of the input", () => {
    cy.visit("http://localhost:3000/");
    // type telephone number
    cy.get("#phone").type("1234567890");
    // move the cursor to the middle of the input
    cy.get("#phone").type(
      "{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}"
    );
    // remove the number
    cy.get("#phone").type("{backspace}");
    // assert formatted number
    cy.get("#phone").should("have.value", "(123)467-890");
    // type in the current cursor position
    cy.get("#phone").type("1");
    // assert the typed number is in the correct position
    cy.get("#phone").should("have.value", "(123)416-7890");
  });
});
