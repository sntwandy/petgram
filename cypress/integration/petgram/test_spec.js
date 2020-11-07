describe("Petgram", function () {
  it("to see the App works", function () {
    cy.visit("/");
  });
  it("To see if we can navigate to category", function () {
    cy.visit("/pet/1");
    cy.get("article");
  });
  it("To see if we can with the navbar to home", function () {
    cy.visit("/pet/1");
    cy.get("nav a ").first().click();
    cy.url().should("include", "/");
  });
  it("The users see the register form and login when their go to favs", function () {
    cy.visit("/favs");
    cy.get("form").should("have.length", 2);
  });
});
