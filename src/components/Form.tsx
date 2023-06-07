function Form() {
  return (
    <form>
      <label htmlFor="Nome do serviço">
        <input type="text" />
      </label>
      <label htmlFor="Login">
        <input type="text" />
      </label>
      <label htmlFor="Senha">
        <input type="password" />
      </label>
      <label htmlFor="URL">
        <input type="text" />
      </label>
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
