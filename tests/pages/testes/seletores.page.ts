import { Locator, Page } from '@playwright/test';

export class SignupLoginPage {
  readonly page: Page;
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;
  readonly loginLink: Locator;
  readonly titleButton: Locator;
  readonly passwordInput: Locator;


  constructor(page: Page) {
    this.page = page;

    this.loginLink = page.getByRole('link', { name: ' Signup / Login' });
    this.signupNameInput = page.getByPlaceholder('Name');
    this.signupEmailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    this.signupButton = page.getByRole('button', { name: 'Signup' });
    this.titleButton = page.locator('#id_gender1');
    this.passwordInput = page.locator('[data-qa="password"]');
  }

  async acessarPagina() {
    await this.page.goto('https://automationexercise.com');
  }

  async irParaLoginSignup() {
    await this.loginLink.click();
  }

  async criarNovoCadastro(nome: string, email: string) {
    await this.signupNameInput.fill(nome);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }
  
  async preencherFormularioCadastro(dados: { nome: string; email: string }) {
    
    await this.titleButton.check();
    // await this.signupNameInput.fill(dados.nome);
    // await this.signupEmailInput.fill(dados.email);
    await this.passwordInput.fill('senhajon123');
  }
}
