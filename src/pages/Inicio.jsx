import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/logo.png";
export default function Inicio() {
  return (
    <div className="h-screen bg-zinc-900">
     <Navbar />
        
      <div className=" text-slate-300 px-10 pt-20 flex flex-col items-center justify-center bg-zinc-900">
      <img src={Logo} alt="Logo Kabbalah" className="hover:h-28 h-20 ease-in-out duration-300 m-auto mb-8 hover:h-18"/>
        <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name">
          Numerologia Cabalística
        </h1>
        <h2 className="text-2xl text-white font-bold cursive leading-none lg:leading-snug home-name">
          Calcule Seus Números Cabalísticos
        </h2>
        <p className=" pt-20 text-justify text-lg indent-8">
          Você já parou para pensar no poder dos números em nossas vidas? Em
          meio a esse vasto universo de símbolos e significados, existe uma
          tradição mística que se destaca: a Numerologia Cabalística.
          Permita-nos guiá-lo(a) por uma jornada repleta de mistérios e
          revelações, onde os números desvendam segredos ocultos e iluminam o
          caminho do autoconhecimento. A Numerologia Cabalística é uma antiga
          sabedoria que remonta às tradições milenares da cabala judaica. Nesse
          intrigante sistema, cada número carrega uma essência única, capaz de
          revelar aspectos fundamentais de nossa personalidade, desejos mais
          profundos e até mesmo o propósito de nossa existência. Imagine poder
          decifrar os segredos ocultos em seu nome e data de nascimento.
          Cada letra e número escondem um significado profundo, aguardando
          pacientemente para serem revelados. Ao mergulhar nesse oceano de
          possibilidades, você encontrará as chaves para entender melhor quem
          você é e desvendar os mistérios que cercam sua jornada. Descubra o
          Número de Expressão em nosso site, a representação de suas características marcantes
          e talentos naturais que moldam seu modo único de ser.
          {/* Com o Número de
          Alma, desvende os desejos que emanam de seu âmago, revelando suas
          motivações mais íntimas e o que verdadeiramente o(a) move. E, por fim,
          conheça o Número de Destino, o guia para as lições que a vida lhe
          reserva e o caminho que conduzirá ao crescimento pessoal e espiritual.
          Por meio da Numerologia Cabalística, você poderá desvendar o intricado
          enigma de sua existência e, de forma reveladora, abrir as portas para
          um profundo autoconhecimento.{" "} */}
        </p>
        <p className="text-justify text-lg indent-8">

        </p>
        {/* <p className="text-justify text-lg indent-8">
          As respostas que você encontrará são como tesouros guardados,
          esperando para serem desenterrados e iluminarem sua jornada com
          sabedoria e clareza. Cada número é como uma estrela no firmamento,
          conduzindo-o(a) por entre as trilhas de sua vida e iluminando cada
          passo dado em direção à realização. Abra-se para a magia dos números e
          permita-se ser guiado(a) por essa antiga sabedoria que atravessa os
          séculos. Embarque conosco nessa aventura de autodescoberta e permita
          que a Numerologia Cabalística revele os segredos e tesouros que você
          traz consigo. Desperte sua curiosidade e desvende os enigmas numéricos
          que moldam sua história. Estamos aqui para guiá-lo(a) e compartilhar o
          conhecimento ancestral que irá enriquecer sua jornada rumo ao
          autoconhecimento e à sabedoria interior. O fascinante universo da
          Numerologia Cabalística espera por você. Descubra-se e deixe-se
          envolver por esse cativante mistério numerológico. Suas respostas
          estão escritas nas estrelas, nos números e no mais profundo do seu
          ser. Vamos desvendá-las juntos!
        </p> */}
      </div>
    </div>
  );
}
