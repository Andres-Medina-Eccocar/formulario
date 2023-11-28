import { test, expect } from '@playwright/test';

/*
Cambiar linea 11 (correo de eccocar), 13 (correo de eccocar) y 15 (Contraseña del correo de eccocar) por los personales. 
npx playwright test formulario
*/
const textTareaAyer = '' // Agregar aca las tareas que hiciste ayer

const textTareaHoy = '' // Agregar aca las tareas que hiciste hoy

test('test', async ({ page }) => {
await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSfY7S-_xMQDSKMc57mL2CwPWg5xd-bR9eP6wQdfmAw1yZdZWQ%2Fviewform&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSfY7S-_xMQDSKMc57mL2CwPWg5xd-bR9eP6wQdfmAw1yZdZWQ%2Fviewform&ifkv=ASKXGp2wKrNZDqJnKUJcW44IO4AiIvobheiCjNTZSyR2ICjITDP3ItDuPUoWpG-VIl5ilYt3pl8LwQ&ltmpl=forms&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-636494198%3A1701143510870014&theme=glif');
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('CORREO');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByTestId('username').fill('CORREO');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('password').fill('PASSWORD');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Registrar andres.medina@').click();
  await page.getByLabel('¿Qué hiciste durante el ú').click();
  await page.getByLabel('¿Qué hiciste durante el ú').fill(textTareaAyer);
  await page.getByLabel('¿Qué vas a hacer hoy para').click();
  await page.getByLabel('¿Qué vas a hacer hoy para').fill(textTareaHoy);
  await page.getByLabel('¿Tienes algún impedimento o').getByLabel('No').click();
  await page.getByLabel('¿Crees que se va a cumplir el').getByLabel('No').click();
  await page.getByLabel('¿Has estado trabajando en').getByLabel('No').click();
  //await page.getByLabel('Detalles del trabajo fuera').fill('text'); //Si la anterior es si, habilitar y cambiar text
  await page.getByLabel('¿Has identificado nueva deuda').getByLabel('No').click();
  await page.getByLabel('¿Detectaste alguna').getByLabel('No').click();
  await page.getByLabel('¿Has registrado las horas').getByLabel('No').click();
  await page.getByRole('button', { name: 'Enviar' }).click();
  
});