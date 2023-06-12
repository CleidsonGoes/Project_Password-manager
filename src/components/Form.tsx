type FormProps = {
  exibitionElement: React.Dispatch<React.SetStateAction<boolean>>,
};

type ButtonCancel = React.MouseEvent<HTMLButtonElement, MouseEvent>;

function Form({ exibitionElement }:FormProps) {
  const handlerExibitionComponent = (event: ButtonCancel) => {
    event.preventDefault();
    exibitionElement(false);
  };

  return (
    <form>
      <label>
        Nome do serviço
        <input type="text" />
      </label>
      <label>
        Login
        <input type="text" />
      </label>
      <label>
        Senha
        <input type="password" />
      </label>
      <label>
        URL
        <input type="text" />
      </label>
      <button>
        Cadastrar
      </button>
      <button onClick={ handlerExibitionComponent }>
        Cancelar
      </button>
    </form>
  );
}

export default Form;
