import React from 'react';
import { useForm } from 'react-hook-form';


const Formularios = () => {

    const { register, handleSubmit , formState:{errors}} = useForm();
    const onSubmit = handleSubmit ((event) => console.log(event));
    console.log(errors)
    
    
   

  return (
    <form onSubmit={onSubmit}>
        {/*NOMBRE*/}
        <label htmlFor="nombre">Nombre <input {...register('nombre',
        {required:true,
        minLength:2,
        maxLength:20})} 
        type="text" /></label>
        
        {/* 
        Esto es una forma para que salgan los errores de rellenario
        {errors.nombre?.type ==="required" && <span>Nombre requerido</span>}
        {errors.nombre?.type ==="minLength" && <span>Es muy corto</span>}
        
        */}
    

        {/*EMAIL*/}
        <label htmlFor="email">Correo<input {...register('email',
        {required:true})} type="email" /></label>
        
        {/*CONTRASEÑA*/}
        <label htmlFor="password">Password <input {...register('password',
        {required:true})} type="password" /></label>
        
        {/*CONFIRMAR CONTRASEÑA*/}
        <label htmlFor="confirmarpassword">Confirmar Password <input {...register('confirmarpassword',
        {required:true})} type="password" /></label>
        
        {/*date*/}
        <label htmlFor="date">Fecha de nacimiento <input {...register('date')} type="date" /></label>
        
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
        <label htmlFor="file">Foto <input {...register('file')} type="file" /></label>
        
        {/*Termino de condición*/}
        <label htmlFor="check">Estoy de acuerdo <input {...register('checkbox')} type="checkbox" />
            <button type='submit'>Enviar</button>
        </label>

    </form>
    
  )
}

export default Formularios

