import { Locator, Page } from '@playwright/test';

export class SignupLoginPage {
  readonly page: Page;
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;
  readonly loginLink: Locator;
  readonly titleButton: Locator;
  readonly passwordInput: Locator;
  readonly dateOfBirthInput: Locator;
  readonly monthOfBirthInput: Locator;
  readonly yearOfBirthInput: Locator;
  readonly checkboxNewsletter: Locator;
  readonly checkboxOffers: Locator;

  readonly addressInformation:{
    firstNameInput: Locator;
    lastNameInput: Locator;
    companyInput: Locator;
    address1Input: Locator;
    address2Input: Locator;
    countrySelect: Locator;
    stateInput: Locator;
    cityInput: Locator;
    zipcodeInput: Locator;
    mobileNumberInput: Locator;
  }


  constructor(page: Page) {
    this.page = page;

    this.loginLink = page.getByRole('link', { name: ' Signup / Login' });
    this.signupNameInput = page.getByPlaceholder('Name');
    this.signupEmailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    this.signupButton = page.getByRole('button', { name: 'Signup' });
    this.titleButton = page.locator('#id_gender1');
    this.passwordInput = page.locator('[data-qa="password"]');
    this.dateOfBirthInput = page.locator('[data-qa="days"]');
    this.monthOfBirthInput = page.locator('[data-qa="months"]');
    this.yearOfBirthInput = page.locator('[data-qa="years"]');  
    this.checkboxNewsletter = page.locator('#newsletter');
    this.checkboxOffers = page.locator('#optin');
    
    this.addressInformation = {
      firstNameInput: page.locator('[data-qa="first_name"]'),
      lastNameInput: page.locator('[data-qa="last_name"]'),
      companyInput: page.locator('[data-qa="company"]'),
      address1Input: page.locator('[data-qa="address"]'),
      address2Input: page.locator('[data-qa="address2"]'),
      countrySelect: page.locator('[data-qa="country"]'),
      stateInput: page.locator('[data-qa="state"]'),
      cityInput: page.locator('[data-qa="city"]'),
      zipcodeInput: page.locator('[data-qa="zipcode"]'),
      mobileNumberInput: page.locator('[data-qa="mobile_number"]')
    };
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
  
  async preencherFormularioCadastro() {
    
    await this.titleButton.check();
    await this.passwordInput.fill('senhajon123');
    await this.dateOfBirthInput.selectOption('26');
    await this.monthOfBirthInput.selectOption('2');
    await this.yearOfBirthInput.selectOption('1999');
    await this.checkboxNewsletter.check();
    await this.checkboxOffers.check();
    await this.addressInformation.firstNameInput.fill('João');
    await this.addressInformation.lastNameInput.fill('Silva');
    await this.addressInformation.companyInput.fill('Amigo Tech');
    await this.addressInformation.address1Input.fill('Rua Republica do Lib, 123');
    await this.addressInformation.address2Input.fill('Pina');
    await this.addressInformation.countrySelect.selectOption('Canada');
    await this.addressInformation.stateInput.fill('Pernambuco');
    await this.addressInformation.cityInput.fill('Recife');
    await this.addressInformation.zipcodeInput.fill('51110-160');
    await this.addressInformation.mobileNumberInput.fill('+5581999999999');
  }
}
