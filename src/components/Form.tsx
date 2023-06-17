import { useState } from 'react';

type Service = {
  name: string,
  login: string,
  password: string,
  url: string
};

type FormProps = {
  exibitionElement: React.Dispatch<React.SetStateAction<boolean>>,
  setService: React.Dispatch<React.SetStateAction<Service[]>>
  service: Service[]
};

type ButtonClick = React.MouseEvent<HTMLButtonElement, MouseEvent>;

function Form({ exibitionElement, setService, service }:FormProps) {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');

  const valido = 'valid-password-check';
  const invalido = 'invalid-password-check';
  const charMinEight = password.length >= 8;
  const charMaxSixten = password.length <= 16;
  const containLetterNumber = password.match(/^(?=.*[a-zA-Z])(?=.*\d).+$/);
  const containCharSpecial = password.match(/[^\w\s]/g);

  const validateBtnRegister = () => {
    return name.length > 0 && login.length > 0 && charMinEight
    && charMaxSixten && containLetterNumber && containCharSpecial;
  };

  const buttonDisable = validateBtnRegister();

  const handlerExibitionComponent = (event: ButtonClick) => {
    event.preventDefault();
    exibitionElement(false);
  };

  const handlerRegister = (event:ButtonClick) => {
    event.preventDefault();
    const objFields = {
      name,
      login,
      password,
      url,
    };
    setService([...service, objFields]);
    exibitionElement(false);
  };

  return (
    <form>
      <label htmlFor="nameService">
        Nome do serviço
        <input
          required
          id="nameService"
          type="text"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="Login">
        Login
        <input
          required
          id="Login"
          type="text"
          value={ login }
          onChange={ ({ target }) => setLogin(target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          required
          id="password"
          type="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <label htmlFor="url">
        URL
        <input
          required
          id="url"
          type="text"
          value={ url }
          onChange={ ({ target }) => setUrl(target.value) }
        />
      </label>
      <button
        disabled={ !buttonDisable }
        onClick={ handlerRegister }
      >
        Cadastrar
      </button>
      <button
        onClick={ handlerExibitionComponent }
      >
        Cancelar
      </button>
      <div>
        <p
          className={ charMinEight ? valido : invalido }
        >
          Possuir 8 ou mais caracteres
        </p>
        <p
          className={ charMaxSixten ? valido : invalido }
        >
          Possuir até 16 caracteres
        </p>
        <p
          className={ containLetterNumber ? valido : invalido }
        >
          Possuir letras e números
        </p>
        <p
          className={ containCharSpecial ? valido : invalido }
        >
          Possuir algum caractere especial
        </p>
      </div>
    </form>
  );
}

export default Form;
