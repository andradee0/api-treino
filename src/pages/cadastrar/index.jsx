import './index.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

export default function Cadastrar() {
    const [nome, setNome] = useState('')
    const [nacionalidade, setNacionalidade] = useState('')
    const [time, setTime] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [camisa, setCamisa] = useState('')
    

    async function salvar(){

        const paramsCorpo = {
            
            "id": id,
            "nome": nome,
            "nacionalidade": nacionalidade,
            "time": time,
            "nascimento": nascimento,
            "camisa": camisa
          }


          let url = 'http://localhost:5050/jogador'
          let resp = await axios.post(url, paramsCorpo)
          alert('Novo cadastro adicionado! ID: ' + resp.data.novoId)
    }


    const { id } = useParams();

    async function buscar(){
      const url = `http://localhost:5050/jogador/${id}`
      let resp = await axios.get(url);

      console.log(resp.data)

      setNome(resp.data.nome)
    }

    useEffect(() => {
      buscar()
    }, [])


  return (
    <div className="Cadastrar">
      
      
        <label htmlFor="">Nome</label>
        <input type="text" placeholder='nome' value={nome} onChange={e=> setNome(e.target.value)}/>
        
        <label htmlFor="">Nacionalidade</label>
        <input type="text" placeholder='nacionalidade' value={nacionalidade} onChange={e=> setNacionalidade(e.target.value)}/>
       
        <label htmlFor="">Time</label>
        <input type="text" placeholder='time' value={time} onChange={e=> setTime(e.target.value)}/>
      
        <label htmlFor="">Nascimento</label>
        <input type="date" value={nascimento} onChange={e=> setNascimento(e.target.value)}/>
     
        <label htmlFor="">Camisa</label>
        <input type="text" placeholder='camisa' value={camisa} onChange={e=> setCamisa(e.target.value)}/>




        <button onClick={salvar}>Salvar</button>





    </div>
  );
}


