import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = ({ aoColaboradorCadastrado, times }) => {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    console.log(`Formulário foi submetido => `, nome, cargo, imagem, time);
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label={`Nome`}
          placeholder={`Digite seu nome`}
          valor={nome}
          set={(valor) => setNome(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label={`Cargo`}
          placeholder={`Digite seu cargo`}
          valor={cargo}
          set={valor => setCargo(valor)}
        />

        <CampoTexto
          label={`Imagem`}
          placeholder={`Digite o endereço da imagem`}
          valor={imagem}
          set={valor => setImagem(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label={`Time`}
          itens={times}
          valor={time}
          set={valor => setTime(valor)}
        />

        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario