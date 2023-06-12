import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [exibitionForm, setExibitionForm] = useState(false);

  const handlerExibitionComponent = () => {
    setExibitionForm(true);
  };

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {
        exibitionForm ? <Form exibitionElement={ setExibitionForm } />
          : <button onClick={ handlerExibitionComponent }>Cadastrar nova senha</button>
      }
    </div>
  );
}

export default App;
