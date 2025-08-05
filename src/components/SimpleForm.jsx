import React, { useState} from "react";
import { useForm } from "react-hook-form";
import './SimpleForm.css';

export default function SimpleForm() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const {email, setEmail} = useState(''); 

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nombre" {...register("nombre", {required: true, minLength: 5})}></input>
            {errors.nombre?.type === "required" && <p>El nombre es requerido</p>}
            {errors.nombre?.type === "minLength" && <p>Tu nombre debe tener al menos 5 letras</p>}
            
            <input type="text" placeholder="Correo" {...register("correo")}></input>
            
            <input type="text" placeholder="Edad" {...register("edad")}></input>
            
            <input className={errors.direccion ? 'iput-error' : ''} type="text" placeholder="Dirección" {...register("direccion", {required: true, minLength: 10})}></input>
            {errors.direccion?.type && (<span className="error-message">{errors.direccion.type === "required" ? 'Campo obligatorio' : 'Debe tener al menos 10 caracteres'}</span>)}
            
            <input type="text" placeholder="Teléfono" {...register("telefono")}></input>
            
            <input type="text" placeholder="Color" {...register("color")}></input>
            
            <input type="text" placeholder="Escuela" {...register("escuela")}></input>

            <input type="text" value={email} onChange={(e) => (e.target.value)}></input>
            <button type="submit">Enviar</button>
        </form>

    )

}