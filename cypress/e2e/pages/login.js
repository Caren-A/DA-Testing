class loginLocators {
    constructor(){
        this.login = 'a[id=login2]';
        this.username = 'input[id="loginusername"]';  
        this.userpassword = 'input[id="loginpassword"]';
        this.btnLogin = 'div#logInModal .modal-footer button[class="btn btn-primary"]';
    }
}

export default class login{
    constructor(){
        this.locators= new loginLocators();
    }

    getLogin(){
        return cy.get(this.locators.login);
    }
    getUsername(){
        return cy.get(this.locators.username);
    }
    getUserPassword(){
        return cy.get(this.locators.userpassword);
    }
    getBtnLogin(){
        return cy.get(this.locators.btnLogin).click();
    }
}