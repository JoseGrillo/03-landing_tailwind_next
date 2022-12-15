"use client"
import React from 'react'
import { useState } from "react";
import { sendContactForm } from "./../lib/api"
import Swal from 'sweetalert2'

const initValues = { nombre: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

const Contactar = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);

      Swal.fire({
        //position: 'top-end',
        icon: 'success',
        title: 'Mensaje Enviado con exito!!!',
        showConfirmButton: true,
        timer: 3500
      })

    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  const Loading = () => {
    return (<>

      <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span className="font-medium"> Procesando... </span>

    </>
    )

  }

  return (
    <section id="contactar" className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6">
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Contactar
      </h2>
      {/* mensaje de error */}
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
      {/* action="" */}
      <form className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl">
        {/* nombre */}
        <label htmlFor="subject">Nombre:</label>
        <input
          required
          type="text"
          id="nombre"
          name="nombre"
          value={values.nombre}
          onChange={handleChange}
          onBlur={onBlur}
          minLength="3"
          maxLength="60"
          placeholder="Tú Nombre"
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl" />
        {/* email */}
        <label htmlFor="subject">Email:</label>
        <input
          required
          type="text"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
          maxLength="60"
          placeholder="Tú email"
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl" />
        {/* asunto */}
        <label htmlFor="subject">Asunto:</label>
        <input
          required
          type="text"
          id="subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
          minLength="3"
          maxLength="60"
          placeholder="Tú Asunto"
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl" />
        {/* mensaje */}
        <label htmlFor="message">Mensaje:</label>
        <textarea
          required
          name="message"
          id="message"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
          cols="30"
          rows="10"
          placeholder="Tu Mensaje"
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"></textarea>
        {!isLoading ?
          (<button
            disabled={!values.nombre || !values.email || !values.subject || !values.message}
            onClick={onSubmit}
            className="w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
            Enviar
          </button>)
          : <Loading />
        }
        {/* <p>{values.nombre}</p>
        <p>{values.email}</p>
        <p>{values.subject}</p>
        <p>{values.message}</p> */}


      </form>

    </section>
  )
}
export default Contactar