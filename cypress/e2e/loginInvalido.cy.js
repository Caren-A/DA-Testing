import loginPage from "../e2e/pages/login.js";

//CASO DE PRUEBA
describe('Login de app Demoblaze', ()=> {
    beforeEach(()=> {
        cy.visit('https://www.demoblaze.com');
    })

//ESCENARIO
it('login invalido', ()=>{
   const login = new loginPage();

   login.getLogin().click();
   login.getUsername().type("hola");
   login.getUserPassword().type("contraseña");
   login.getBtnLogin().click();
    })

})