import { test, expect } from '@playwright/test';
import { SignupLoginPage } from '../seletores.page';

test('Deve iniciar e finalizar com sucesso o cadastro de usuário', async ({ page }) => {
  const signupPage = new SignupLoginPage(page);
  
  // Dados dinâmicos para evitar erro de e-mail já cadastrado
  // const emailRandom = `tester_${Date.now()}@test.com`;
  
  // Mockado
  const emailRandom = `tester_123456@test.com`;
  
  await signupPage.acessarPagina();
  await signupPage.irParaLoginSignup();
  await signupPage.criarNovoCadastro('João Silva', emailRandom);

  // Verifica se chegamos na página de detalhes da conta
  await expect(page).toHaveURL('https://automationexercise.com/signup');

  await signupPage.preencherFormularioCadastro();
});