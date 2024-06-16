import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ time, primaria, secundaria, colaboradores }) => {

  const background = { backgroundColor: secundaria };
  const h3 = { borderBottom: "4px solid" + primaria };

  return (
    colaboradores.length > 0
    && <section className="time" style={background}>
      <h3 style={h3}>{time}</h3>
      <div className="colaboradores">
        {colaboradores.map(colaborador => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          corDeFundo={primaria}
          />
        ))}
      </div>
    </section>
  )
}

export default Time