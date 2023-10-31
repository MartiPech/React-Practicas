import React from 'react';
import {useForm} from 'react-hook-form'

const Formularios = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
   

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {/*NOMBRE*/}
        <label htmlFor="nombre">Nombre <input {...register('nombre')} type="text" /></label>
        
        {/*EMAIL*/}
        <label htmlFor="email">
            Correo<input {...register('email')} type="email" />
        </label>
        {/*CONTRASEÑA*/}
        <label htmlFor="password">
            Password <input {...register('password')} type="password" />
        </label>
        {/*CONFIRMAR CONTRASEÑA*/}
        <label htmlFor="confirmarpassword">
            Confirmar Password <input {...register('confirmarpassword')} type="password" />
        </label>
        {/*date*/}
        <label htmlFor="date">
            Fecha de nacimiento <input {...register('date')} type="date" />
        </label>
        {/*pais*/}
        <label htmlFor="pais">
            Pais <select {...register("pais")} name="paises" >
                <option value="Ar">Argentina</option>
                <option value="Mx">Mexico</option>
                <option value="Co">Colombia</option>
                <option value="UK">Rusia</option>
                </select> 
        </label>
        {/*Cargar Archivo*/}
        <label htmlFor="file">
            Foto <input {...register('file')} type="file" />
        </label>
        {/*Termino de condición*/}
        <label htmlFor="check">
            Estoy de acuerdo <input {...register('checkbox')} type="checkbox" />
            <button type='submit'>Enviar</button>
        </label>

    </form>
    
  )
}

export default Formularios

