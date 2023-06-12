import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [exibitionButtonPassword, setExibitionButtonPassword] = useState(false);
  const [exibitionForm, setExibitionForm] = useState(false);

  const handlerExibitionComponent = () => {
    setExibitionForm(true);
  };

  return (
    <>
      <h1>Gerenciador de senhas</h1>
      {
        exibitionForm ? <Form />
          : <button onClick={ handlerExibitionComponent }>Cadastrar nova senha</button>
      }
    </>
  );
}

export default App;
