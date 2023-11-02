import React from 'react';
import { useForm } from 'react-hook-form';


const Formularios = () => {

    const { register, handleSubmit , formState:{errors},watch,setValue} = useForm();
    const onSubmit = handleSubmit ((event) => console.log(event.file));
    console.log(errors)
    
    
   

  return (
    <form onSubmit={onSubmit}>
        {/*NOMBRE*/}
        <label htmlFor="nombre">Nombre <input {...register('nombre',
        {required:{
            value:true,
            message:"Nombre requerido",

        },
        minLength:{
            value:2,
            message:"Nombre cort",
        },
        maxLength:{
            value:20,
            message:"No debe tener mas de 20 caracteres"
        }
        })} 
        type="text" /></label>
        
        {errors.nombre && <span> {errors.nombre.message} </span>}
        {/* 
        Esto es una forma para que salgan los errores de rellenario
        {errors.nombre?.type ==="required" && <span>Nombre requerido</span>}
        {errors.nombre?.type ==="minLength" && <span>Es muy corto</span>}
        
        */}
    

        {/*EMAIL*/}
        <label htmlFor="email">Correo<input {...register('email',
        {required:{
            value:true,
            message:"Correo requerido"
        },
        pattern:{
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message:"Email no valida"
        }
        })} type="email" /></label>
        
        {errors.email && <span> {errors.email.message} </span>}
        
        
        {/*CONTRASEÑA*/}
        <label htmlFor="password">Password <input {...register('password',
        {required:{
            value:true,
            message:"Contraseña Requerida"
        }})} type="password" /></label>
        {errors.password && <span> {errors.password.message} </span>}

        {/*CONFIRMAR CONTRASEÑA*/}
        <label htmlFor="confirmarpassword">Confirmar Password <input {...register('confirmarpassword',
        {required:{
            value:true,
            message:"Confirmar es necesario"
        },
        validate:(value)=>{
            {/* 
            if(value === watch("password")){
                return true
            }else{
                return "No coinciden"
            }
            */}
            return value ===watch("password") ||"No coinciden"
        }})} type="password" /></label>
        {errors.confirmarpassword && <span> {errors.confirmarpassword.message} </span>}
        
        {/*date*/}
        <label htmlFor="date">Fecha de nacimiento <input {...register('date',{
        required:{
            value:true,
            message:"Fecha de nacimiento necesaria"
        },
        validate:(value) => {
            const fechaBirth = new Date(value);
            const fechaActual = new Date();
            const edad = fechaActual.getFullYear() - fechaBirth.getFullYear();
            console.log(edad)
            {/*La forma de novato 
            if(edad>= 18){
                return true
            }else{
                return "Es menor de edad"
            }
            */}
            return edad>=18 || "Debe ser mayor de edad"
        }})} type="date" /></label>
        {errors.date && <span> {errors.date.message} </span>}
        
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
{ /* 
        <label htmlFor="file">Foto <input {...register('file')} type="file" /></label>
*/}
        <label htmlFor="file">Foto <input onChange={(e) => {
        console.log(e.target.files[0]);
        setValue("UserPic", e.target.files[0].name);
        }} type="file" />
        </label>
        
        {/*Termino de condición*/}
        <label htmlFor="check">Estoy de acuerdo <input {...register('checkbox')} type="checkbox" />
            <button type='submit'>Enviar</button>
        </label>

        <pre> {JSON.stringify(watch(),null,2)} </pre>

    </form>
    
  )
}

export default Formularios

