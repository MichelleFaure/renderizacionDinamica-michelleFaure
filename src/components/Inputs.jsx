import React, { useState } from 'react';
import { BaseColaboradores } from '../datos/colaboradores';
import "./Inputs.css"


export const Inputs = () => {

    const [colaborador,setColaborador] = useState('');
    const [correo, setCorreo] = useState('');
    const [colaboradores,setColaboradores] = useState(BaseColaboradores);
    const [buscar, setBuscar] = useState('')
    const [usuarioB, setUsuarioB] = useState('')
  
    const setValor = (e) => {
      if(e.target.id === "nombre"){
        setColaborador(e.target.value)
      }
      else if(e.target.id === "correo"){
        setCorreo(e.target.value)
      }
    }
  
    const procesarFormulario = (e) => {
      e.preventDefault();
      const nuevoColaborador = {
        'nombre': colaborador,
        'correo': correo
      }
      setColaboradores([...colaboradores, nuevoColaborador])
  
    }

    const buscarUsuario = () => {
        const nuevaLista = colaboradores.filter(value => value.nombre == buscar)
        
        
        if(nuevaLista[0] === undefined){
            setUsuarioB("No encontrado")
        }
        else{
            setUsuarioB(nuevaLista[0].nombre)
        }
    }

  return (
    <div className='container'>
        <header>
            <h3 className='titulo'>Buscador de Colaboradores</h3>
            <input className='input' id='busqueda' type='text' placeholder='Busca Colaborador por nombre' onChange={(e)=>setBuscar(e.target.value)} ></input>
            <p className='usuarioEncontrado'>Usuario encontrado: {usuarioB}</p>
            <button className='btn' onClick={()=>buscarUsuario()} >Buscar Colaborador</button>
        </header>

        <form onSubmit={(e)=> procesarFormulario(e)}>
            <h3 className='titulo'>Ingresa Nuevo colaborador</h3>
            <input className='input' id='nombre' type="text" placeholder='Ingresa nuevo colaborador' onChange={(e)=> setValor(e)}/>
            <input className='input' id='correo' type="text" placeholder='Ingresa correo del colaborador' onChange={(e)=> setValor(e)}/>
            <button className='btn' type='submit'>Agregar Colaborador</button>
        </form>

        <div className='contenedor-lista'> 
            <h3 className='titulo'>Listado de colaboradores</h3>
            <ul>
                {colaboradores.map((colaborador, i)=>{
                    return(
                    <p key={i}>{i+1}.- <span className='nombreColaborador'>{colaborador.nombre}</span> - {colaborador.correo}</p>
                    )
                })}
            </ul>
        </div>
  
    </div>
  )
}

