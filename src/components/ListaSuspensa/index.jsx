import "./ListaSuspensa.css";

const ListaSuspensa = ({ label, itens, obrigatorio, valor, set }) => {

  const aoEscolher = (e) => {
    set(e.target.value);
  }

  return (
    <div className="lista-suspensa">

      <label>{label}</label>

      <select onChange={aoEscolher} required={obrigatorio} value={valor}>
        <option value=""></option>
        {itens.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>

    </div>
  )
}

export default ListaSuspensa