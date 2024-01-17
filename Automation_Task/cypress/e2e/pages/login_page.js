class LoginPage{
    get signbtn(){
        return cy.contains('li','Login');
    }
    get emailbox(){
        return cy.get('[data-qa="login-email"]');
    }
    get passwordbox(){
        return cy.get('[data-qa="login-password"]');
    }
    get submitbtn(){
        return cy.get('[data-qa="login-button"]');
    }
    get assertonLoggedin(){
        return cy.get('b').contains('Zyad Ahmed Elsoudy');
    }
    loginWithValidCredentials=()=>{
        this.signbtn.click();
        cy.get('@testData').its('users').each((user) => {
        this.emailbox.type(user.Username);
        this.passwordbox.type(user.Password);
        })
        this.submitbtn.click();
        this.assertonLoggedin.should('be.visible');
    };
}
module.exports=new LoginPage();