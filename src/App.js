import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from "./style";
import { useState } from 'react';
const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => {
      if (prev === '0' && number !== ',') {
        return number;
      } else if (number === ',' && prev.includes(',')) {
        return prev;
      } else {
        return prev + number;
      }
    });
  }

  const handleOperation = (op) => {
    if (operation === '') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation(op);
    } else {
      const result = calculateResult();
      setFirstNumber(result);
      setCurrentNumber('0');
      setOperation(op);
    }
  }

  const calculateResult = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentNumber);
    let result = 0;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'x':
        result = num1 * num2;
        break;
      case '÷':
        result = num1 / num2;
        break;
      default:
        break;
    }
    return result.toString();
  }

  const handleEqual = () => {
    const result = calculateResult();
    setCurrentNumber(result);
    setFirstNumber('0');
    setOperation('');
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="AC" onClick={handleClear}/>
          <Button label="( )" onClick={() => handleAddNumber('( )')}/>
          <Button label="%" onClick={() => handleAddNumber('%')}/>
          <Button label="÷" onClick={() => handleOperation('÷')}/>
        </Row>
        
        <Row>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="x" onClick={() => handleOperation('x')}/>
        </Row>

        <Row>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="-" onClick={() => handleOperation('-')}/>
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={() => handleOperation('+')}/>
        </Row>

        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={() => handleAddNumber(',')}/>
          <Button label="C" onClick={() => handleAddNumber('C')}/>
          <Button label="=" onClick={handleEqual}/>
        </Row>

      </Content>
    </Container>
  );
}


export default App;
