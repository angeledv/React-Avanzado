import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './PostForm.css';

export default function NuevoPost() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [mensaje, setMensaje] = useState('');

  const onSubmit = data => {
    console.log("Datos del post:", data);
    setMensaje('¡Publicación enviada correctamente!');
    reset();
  };

  return (
    <div className='form-container'>
      <h2>Nuevo Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Formulario de nuevo post">
        <label htmlFor="titulo">
          <span>Título:</span>
          <input
            id="titulo"
            className={errors.titulo ? 'input-error' : ''}
            placeholder="Título"
            {...register("titulo", { required: true, minLength: 5 })}
          />
        </label>
        {errors.titulo && <p className='errorMessage'>El título debe tener al menos 5 caracteres.</p>}

        <label htmlFor="contenido">
          <span>Contenido:</span>
          <textarea
            id="contenido"
            className={errors.contenido ? 'input-error' : ''}
            placeholder="Contenido"
            rows={4}
            {...register("contenido", { required: true, minLength: 20 })}
          />
        </label>
        {errors.contenido && <p className='errorMessage'>El contenido debe tener al menos 20 caracteres.</p>}

        <label htmlFor="email">
          <span>Correo electrónico (opcional):</span>
          <input
            id="email"
            className={errors.email ? 'input-error' : ''}
            placeholder="Correo electrónico"
            {...register("email", {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            })}
          />
        </label>
        {errors.email?.type === 'pattern' && <p className='errorMessage'>Introduce un correo electrónico válido.</p>}

        <button type="submit">Publicar</button>
        {mensaje && <p className="success-message">{mensaje}</p>}
      </form>
    </div>
  );
}