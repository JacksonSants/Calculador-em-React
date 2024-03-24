import {InputContainer} from './style';

const Input = ({value}) => {
    return (
      <InputContainer>
        <input disabled value={value}>
        </input>
      </InputContainer>
    );
  }
  
  export default Input;
  