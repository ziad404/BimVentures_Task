import LoginPage from "./pages/login_page.js";
describe('Login spec', () => {
  before('Visit URL Before any Execution' ,()=>{
    cy.visit('https://automationexercise.com');
    cy.fixture('Credentials.json').as('testData');
  })
  it('Login with Valid credentials', () => {
    LoginPage.loginWithValidCredentials();
    
  
  })
})