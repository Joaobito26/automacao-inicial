import { Locator, Page } from '@playwright/test';

export class SignupLoginPage {
  readonly page: Page;
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.page = page;


    this.loginLink = page.getByRole('link', { name: ' Signup / Login' });
    this.signupNameInput = page.getByPlaceholder('Name');
    this.signupEmailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    this.signupButton = page.getByRole('button', { name: 'Signup' });
  }

  async acessarPagina() {
    await this.page.goto('https://automationexercise.com');
  }

  async irParaLoginSignup() {
    await this.loginLink.click();
  }

  async NovoCadastro(nome: string, email: string) {
    await this.signupNameInput.fill(nome);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }
}
