import "./Campotexto.css";

const CampoTexto = ({ label, placeholder, obrigatorio, valor, set }) => {

  const placeholderModificada = `${placeholder}...`;

  const aoDigitar = (e) => {
    set(e.target.value);
  }

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitar}
        required={obrigatorio}
        type="text"
        placeholder={placeholderModificada} />
    </div>
  )
}

export default CampoTexto