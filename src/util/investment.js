export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];

  // Сумма которую пользователь получит в конце вклада.
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    // Процент с вложенных средств.
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    // Процент + новый ежегодный взнос.
    investmentValue += interestEarnedInYear + annualInvestment;
    // Добавление данных о каждом годе.
    annualData.push({
      // Номер года
      year: i + 1,
      // Процент с вложенных средств.
      interest: interestEarnedInYear,
      // Полная сумма накоплений к концу года.
      valueEndOfYear: investmentValue,
      // Размер ежегодного взноса.
      annualInvestment: annualInvestment,
    });
  }
  // Массив данных за время вклада.
  return annualData;
}

/* 
Intl.NumberFormat()
  Встроенный объект JavaScript, который отвечает за локализацию чисел (форматирование в зависимости от языка и страны).
'en-US' 
  Локаль(язык + регион).
*/
export const formatter = new Intl.NumberFormat('en-US', {
  // Форматирование строки как число.
  style: 'currency',
  // Тип валюты.
  currency: 'USD',
  // Минимальное количество знаков после запятой.
  minimumFractionDigits: 0,
  // Максимальное количество знаков после запятой.
  maximumFractionDigits: 0,
});
