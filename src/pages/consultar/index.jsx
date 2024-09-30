import './index.scss';
import { useState } from 'react';
import axios from 'axios'



export default function Consultar() {
  
  const [jogador, setJogador] = useState([]);


  async function buscar(){
    const url = 'http://localhost:5050/jogador'
    let resp = await axios.get(url)

    setJogador(resp.data);
  }
  
  
  
  return (
    <div className="Consultar">

    <h1>CONSULT</h1>

    <button onClick={buscar}>Search</button>

    <table>
      <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Nacionalidade</th>
            <th>Time</th>
            <th>Nascimento</th>
            <th>Camisa</th>
            <th>Ações</th>
          </tr>
      </thead>
    

    <tbody>
    {jogador.map(item => 

      <tr>
        <td>{item.id}</td>
        <td>{item.nome}</td>
        <td>{item.nacionalidade}</td>
        <td>{item.time}</td>
        <td>{new Date(item.nascimento).toLocaleDateString()} </td>
        <td>{item.camisa}</td>
        <td>{item.alterar}</td>
      </tr>



    )}

</tbody>

</table>

    </div>
  );
}
