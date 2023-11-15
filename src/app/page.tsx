'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [questions, setQuestions] = useState([]);

  async function getQuestions() {
    const response = await fetch(`/api`, {
      method: 'GET',
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const json = await response.json();

    setQuestions(json);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <main className="flex h-auto flex-1 flex-col items-center justify-center p-24 bg-white">
      <form action="" className='w-full max-w-xl h-full flex justify-center items-center flex-col'>
        <h1 className='font-medium text-4xl text-blue-950 my-4'>Faça um Business Canva</h1>
        <div className='flex flex-col gap-4 w-full items-center'>
          <div className='w-full'>
            <p className='text-blue-950 mb-2'>Qual o tipo do seu negócio?</p>
            <input type="text" className='w-full text-blue-950 bg-blue-200 px-5 h-14 rounded-lg' placeholder='Online, Presencial' />
          </div>
          <div className='w-full'>
            <p className='text-blue-950 mb-2'>Qual a localização (Cidade, estado ou país)?</p>
            <input type="text" className='w-full text-blue-950 bg-blue-200 px-5 h-14 rounded-lg' placeholder='Brasil' />
          </div>
          <div className='w-full'>
            <p className='text-blue-950 mb-2'>Descreva seu negócio:</p>
            <input type="text" className='w-full text-blue-950 bg-blue-200 px-5 h-14 rounded-lg' placeholder='Empresa XYZ' />
          </div>
          <button className="mt-2 max-w-xs bg-blue-500 border-none font-bold text-white uppercase px-8 py-3 rounded-md">
            Enviar
          </button>
        </div>
      </form>
    </main>
  )
}
