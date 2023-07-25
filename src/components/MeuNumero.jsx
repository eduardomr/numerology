import React, { useState } from "react";
import DateForm from "./DateForm";
import { calcularNumeroExpressao, writeDescription } from "../functions";
import { data } from "autoprefixer";
import Logo from "../assets/logo.png";
export default function MeuNumero() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");
  let numero = 0;

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(`Seu Número ${name}!`);
    setName("");
  };

  const handleClick = (event) => {
    event.preventDefault();
    numero = calcularNumeroExpressao(name);

    if (numero > 0)
      setMessage(`Seu Número de Expressão Cabalístico é o ${numero}!`);
    setDescription(writeDescription(numero));
    setName("");
  };

  return (
    <div className="h-auto bg-gray-900">
      <div className=" flex flex-row">
        <div className="invisible md:visible basis-1/4 text-center text-white">
          {""}
        </div>
        <div className="md:basis-1/2">
          <img src={Logo} alt="Logo Kabbalah" className="hover:h-28 h-20 ease-in-out duration-300 m-auto mt-8 hover:h-18"/>
          <p className="block text-white text-center py-8 text-2xl">
            Números da Cabala
          </p>
          <p className="text-white text-center py-8 px-8 text-lg text-justify indent-8">
            Os números cabalísticos possuem um significado metafísico, tal como
            os planetas. Eles nos fornecem insights sobre nossas características
            internas e externas e moldam nossos destinos. Ao explorar a essência
            dos números, adquirimos um entendimento mais profundo de nossa
            própria natureza, utilizando uma ferramenta adicional para o
            autodescobrimento. Através disso, somos capazes de reconhecer o
            nosso modo de operação, isto é, como funcionamos nos aspectos
            físico, mental, espiritual e emocional. É relevante notar que os
            números da Cabala não são individualizados, possuindo um poder
            metafísico e significados que podem abranger uma ou mais pessoas,
            conforme as tradições de diferentes filosofias e culturas.
          </p>
          <p className="block text-white text-center py-8 text-2xl">
            Calcule seu Número Cabalístico
          </p>
          <form className="py-20 px-10" onSubmit={handleSubmit}>
            <div className="py-6">
              <label
                className=" text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="nome"
              >
                Nome Completo
              </label>
              <input
                className="relative transition-all duration-300 py-2.5 pl-4 pr-14 md:w-full w-90 border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20"
                type="text"
                name="name"
                id="name"
                defaultValue="Nome Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome Completo"
              />
            </div>
            {/* <div className="py-6">
              <label
                className="text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="data"
              >
                Data de Nascimento
              </label>
              <DateForm />
            </div> */}

            <button
              onClick={handleClick}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow dark:text-white dark:bg-slate-800 dark:hover:bg-indigo-950"
              type="submit"
            >
              Calcular
            </button>
          </form>
        </div>
        <div className="invisible md:visible text-center text-white md:basis-1/4">
          {""}
        </div>
      </div>

      <div className="flex md:flex-row px-8">
        <p className="invisible md:visible md:basis-1/4">{""}</p>
        <div className="md:basis-1/2">
          <p className="md:w-full block text-white text-center py-8 text-2xl">
            {message} <br />
            <div className="text-justify pt-8 indent-8">{description}</div>
          </p>
        </div>

        <p className="invisible md:visible md:basis-1/4">{""}</p>
      </div>
    </div>
  );
}
