import { useState } from 'react';
import './App.css';
import Form from './components/Form';

type Service = {
  name: string,
  login: string,
  password: string,
  url: string
};

function App() {
  const [exibitionForm, setExibitionForm] = useState(false);
  const [service, setService] = useState<Service[]>([]);

  const handlerExibitionComponent = () => {
    setExibitionForm(true);
  };

  return (
    <>
      <div>
        <h1>Gerenciador de senhas</h1>
        {
          exibitionForm
            ? <Form
                exibitionElement={ setExibitionForm }
                setService={ setService }
                service={ service }
            />
            : <button onClick={ handlerExibitionComponent }>Cadastrar nova senha</button>
        }
      </div>
      <section>
        {
        service.length === 0
          ? <span>Nenhuma senha cadastrada</span>
          : service.map((serv) => (
            <article key={ serv.login }>
              <a href={ serv.url }>{serv.name}</a>
              <p>{serv.password}</p>
              <p>{serv.login}</p>
            </article>
          ))
        }
      </section>
    </>
  );
}

export default App;
