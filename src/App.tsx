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

  const handlerRemoveRegister = (serv:Service) => {
    console.log(serv);
    const servicefiltered = service.filter((srvc) => srvc !== serv);
    console.log(servicefiltered);
    setService(servicefiltered);
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
          : service.map((serv, index) => (
            <article key={ index }>
              <a href={ serv.url }>{serv.name}</a>
              <p>{serv.password}</p>
              <p>{serv.login}</p>
              <label htmlFor="index">
                <button
                  type="button"
                  id="{index}"
                  data-testid="remove-btn"
                  onClick={ () => handlerRemoveRegister(serv) }
                >
                  remover
                </button>
              </label>
            </article>
          ))
        }
      </section>
    </>
  );
}

export default App;
