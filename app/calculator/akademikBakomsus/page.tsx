"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface Scores {
  knowledge: string;
  skills: string;
  behavior: string;
}

const AkademikBakomsus = () => {
  const [scores, setScores] = useState<Scores>({
    knowledge: '',
    skills: '',
    behavior: '',
  });

  const [result, setResult] = useState({
    total: 0,
    knowledgeScore: 0,
    skillsScore: 0,
    behaviorScore: 0,
  });

  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (parseFloat(value) > 100) {
      setScores({ ...scores, [name]: '100' });
    } else {
      setScores({ ...scores, [name]: value });
    }
    setError(null); // Reset error message on input change
  };

  const handleCalculate = () => {
    if (!scores.knowledge || !scores.skills || !scores.behavior) {
      setError('Semua bidang harus diisi!');
      return;
    }

    const knowledgeScore = (parseFloat(scores.knowledge) || 0) * 0.4;
    const skillsScore = (parseFloat(scores.skills) || 0) * 0.5;
    const behaviorScore = (parseFloat(scores.behavior) || 0) * 0.1;

    const total = knowledgeScore + skillsScore + behaviorScore;

    setResult({
      total,
      knowledgeScore,
      skillsScore,
      behaviorScore,
    });

    setShowResult(true);
  };

  const handleBack = () => {
    router.push('/calculator');
  };

  return (
    <div className='h-screen w-full bg-bg-mobile md:bg-bg-home bg-cover flex flex-col items-center overflow-y-auto ll pb-6 px-6'>
      <Image src='/icons/logo.png' height={200} width={200} alt='logo' />
      <div className="flex flex-col bg-white rounded-xl shadow-lg mt-6 w-full sm:w-4/5 md:w-3/5 xl:w-2/5">
        <div className='flex flex-col p-6 space-y-1'>
          <h1 className="font-semibold tracking-tight text-xl">Kalkulator Akademik - BAKOMSUS</h1>
        </div>
        <form className="p-6 pt-0 grid gap-4 w-full" onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
          <div className="grid gap-2">
            <label htmlFor="knowledge" className="block text-sm font-medium leading-none text-zinc-950">
              Nilai Pengetahuan <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name="knowledge"
              placeholder="Masukan nilai pengetahuan"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900 shadow-sm"
              value={scores.knowledge}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="skills" className="block text-sm font-medium leading-none text-zinc-950">
              Nilai Keterampilan <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name="skills"
              placeholder="Masukan nilai keterampilan"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900 shadow-sm"
              value={scores.skills}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="behavior" className="block text-sm font-medium leading-none text-zinc-950">
              Nilai Perilaku <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name="behavior"
              placeholder="Masukan nilai perilaku"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900 shadow-sm"
              value={scores.behavior}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className='pt-4 w-full'>
            <button type="submit" className='px-4 py-3 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-[#BA0408] to-[#F37834] hover:bg-zinc-800 w-full'>Hitung</button>

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
                <h2 className='text-2xl font-semibold'>{result.total.toFixed(1)}</h2>
              </div>
              <div>
                <p>Nilai Pengetahuan (40%) : {result.knowledgeScore.toFixed(1)}</p>
                <p>Nilai Keterampilan (50%) : {result.skillsScore.toFixed(1)}</p>
                <p>Nilai Perilaku (10%) : {result.behaviorScore.toFixed(1)}</p>
              </div>
            </div>
            <div className='pt-4 px-6 pb-6 w-full'>
              <button type="button" onClick={handleBack} className='px-4 py-3 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-[#BA0408] to-[#F37834] hover:bg-zinc-800 w-full'>Kembali</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AkademikBakomsus;
 