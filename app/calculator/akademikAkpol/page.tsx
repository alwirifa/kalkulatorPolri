"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface Scores {
  knowledge: string;
  citizenship: string;
  numerics: string;
  language: string;
}

const AkademikAkpol = () => {
  const [scores, setScores] = useState<Scores>({
    knowledge: '',
    citizenship: '',
    numerics: '',
    language: '',
  });

  const [result, setResult] = useState({
    total: 0,
    knowledgeScore: 0,
    citizenshipScore: 0,
    numericsScore: 0,
    languageScore: 0,
  });

  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setScores({ ...scores, [name]: value });
    setError(null); // Reset error message on input change
  };

  const handleCalculate = () => {
    if (!scores.knowledge || !scores.citizenship || !scores.numerics || !scores.language) {
      setError('Semua bidang harus diisi!');
      return;
    }

    const knowledgeScore = (parseFloat(scores.knowledge) || 0) * 0.3;
    const citizenshipScore = (parseFloat(scores.citizenship) || 0) * 0.2;
    const numericsScore = (parseFloat(scores.numerics) || 0) * 0.2;
    const languageScore = (parseFloat(scores.language) || 0) * 0.3;

    const total = knowledgeScore + citizenshipScore + numericsScore + languageScore;

    setResult({
      total,
      knowledgeScore,
      citizenshipScore,
      numericsScore,
      languageScore,
    });

    setShowResult(true);
  };

  const handleBack = () => {
    router.push('/calculator');
  };

  return (
    <div className='h-screen w-full bg-zinc-200 flex flex-col items-center overflow-scroll pb-6 px-6'>
      <Image src='/icons/logo.png' height={200} width={200} alt='logo' />
      <div className="flex flex-col bg-white rounded-xl shadow-lg mt-6 w-full sm:w-4/5 md:w-3/5 xl:w-2/5">
        <div className='flex flex-col p-6 space-y-1'>
          <h1 className="font-semibold tracking-tight text-xl">Kalkulator Akademik - AKPOL ( Tingkat Panda )</h1>
        </div>
        <form className="p-6 pt-0 grid gap-4 w-full" onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
          <div className="grid gap-2">
            <label htmlFor="knowledge" className="block text-sm font-medium leading-none text-zinc-950">
              Nilai Pengetahuan Umum <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name="knowledge"
              placeholder="Masukan nilai pengetahuan umum"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900 shadow-sm"
              value={scores.knowledge}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="citizenship" className="block text-sm font-medium leading-none text-zinc-950">
              Nilai Wawasan Kebangsaan <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name="citizenship"
              placeholder="Masukan nilai wawasan kebangsaan"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900 shadow-sm"
              value={scores.citizenship}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="numerics" className="block text-sm font-medium leading-none text-zinc-950">
              Nilai Penalaran Numerik <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name="numerics"
              placeholder="Masukan nilai penalaran numerik"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900 shadow-sm"
              value={scores.numerics}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="language" className="block text-sm font-medium leading-none text-zinc-950">
              Nilai Bhs. Indonesia <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name="language"
              placeholder="Masukan nilai bhs. indonesia"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900 shadow-sm"
              value={scores.language}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className='pt-4 w-full'>
            <button type="submit" className='px-4 py-2 rounded-md text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 w-full'>Hitung</button>
          </div>
        </form>

        {showResult && (
          <div>
            <div className="relative">
              <div className="absolute mx-6 inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-zinc-500 ">Hasil Penilaian</span>
              </div>
            </div>
            <div className='flex flex-col gap-4 p-6'>
              <div className='w-full flex justify-center'>
                <h2 className='text-2xl font-semibold'>{result.total}</h2>
              </div>
              <div>
                <p>Nilai Pengetahuan Umum (30%) : {result.knowledgeScore.toFixed(1)}</p>
                <p>Nilai Wawasan Kebangsaan (20%) : {result.citizenshipScore.toFixed(1)}</p>
                <p>Nilai Penalaran Numerik (20%) : {result.numericsScore.toFixed(1)}</p>
                <p>Nilai Bhs. Indonesia (30%) : {result.languageScore.toFixed(1)}</p>
              </div>
            </div>
            <div className='pt-4 px-6 pb-6 w-full'>
              <button type="button" onClick={handleBack} className='px-4 py-2 rounded-md text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 w-full'>Kembali</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AkademikAkpol;
