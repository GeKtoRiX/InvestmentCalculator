import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';

function App() {
  // Хук отслеживания состояния вводных данный инвестирования.
  const [userInput, setUserInput] = useState({
    // Первоначальная сумма инвестиций.
    initialInvestment: 1000,
    // Годовая сумма инвестиций.
    annualInvestment: 1200,
    // Ожидаем процент заработка с суммы инвестиций.
    expectedReturn: 6,
    // Длительность инвестиции в месяцах.
    duration: 10,
  });
  // Функция вызова обновления вводимых данных.
  function handleChange(inputIdentifire, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifire]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <main>
        <UserInput userInput={userInput} onChange={handleChange} />
        {!inputIsValid && (
          <p className='center'>Please enter the duration greater then zero.</p>
        )}
        {inputIsValid && <Result input={userInput} />}
      </main>
    </>
  );
}

export default App;
