import { test, expect } from '@playwright/test';
import { SignupLoginPage } from './seletores.page';

test('Deve iniciar o processo de cadastro com sucesso via POM', async ({ page }) => {
  const signupPage = new SignupLoginPage(page);
  
  // Dados dinâmicos para evitar erro de e-mail já cadastrado
  const emailRandom = `tester_${Date.now()}@test.com`;

  await signupPage.acessarPagina();
  await signupPage.irParaLoginSignup();
  await signupPage.realizarNovoRegistro('João Silva', emailRandom);

  // Asserção: Verifica se chegamos na página de detalhes da conta
  await expect(page.locator('b', { hasText: 'Enter Account Information' })).toBeVisible();
});
