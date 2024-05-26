"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface Scores {
  psi: string;
  jas: string;
  keahlian: string;
}

const NilaiAkhirBakomsus = () => {
  const [scores, setScores] = useState<Scores>({
    psi: '',
    jas: '',
    keahlian: '',
  });

  const [result, setResult] = useState({
    total: 0,
    psiScore: 0,
    jasScore: 0,
    keahlianScore: 0,
  });

  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setScores({ ...scores, [name]: value });
    setError(null); // Reset error message on input change
  };

  const handleCalculate = () => {
    if (!scores.psi || !scores.jas || !scores.keahlian) {
      setError('Semua bidang harus diisi!');
      return;
    }

    const psiScore = (parseFloat(scores.psi) || 0) * 0.35;
    const jasScore = (parseFloat(scores.jas) || 0) * 0.2;
    const keahlianScore = (parseFloat(scores.keahlian) || 0) * 0.45;

    const total = psiScore + jasScore + keahlianScore;

    setResult({
      total,
      psiScore,
      jasScore,
      keahlianScore,
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
          <h1 className="font-semibold tracking-tight text-xl">Kalkulator Nilai Akhir - BAKOMSUS</h1>
        </div>
        <form className="p-6 pt-0 grid gap-4 w-full" onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
             <div className="grid gap-2">
            <label htmlFor="psi" className="block text-sm font-medium leading-none text-zinc-950">
              Nilai Psikologi <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name="psi"
              placeholder="Masukan nilai psikologi"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900 shadow-sm"
              value={scores.psi}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="jas" className="block text-sm font-medium leading-none text-zinc-950">
              Nilai Jasmani <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name="jas"
              placeholder="Masukan nilai jasmani"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900 shadow-sm"
              value={scores.jas}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="keahlian" className="block text-sm font-medium leading-none text-zinc-950">
              Nilai Keahlian <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name="keahlian"
              placeholder="Masukan nilai keahlian"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900 shadow-sm"
              value={scores.keahlian}
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
                <h2 className='text-2xl font-semibold'>{result.total.toFixed(1)}</h2>
              </div>
              <div>
                <p>Nilai Psikologi (35%) : {result.psiScore.toFixed(1)}</p>
                <p>Nilai Jasmani (20%) : {result.jasScore.toFixed(1)}</p>
                <p>Nilai Keahlian (45%) : {result.keahlianScore.toFixed(1)}</p>
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

export default NilaiAkhirBakomsus;
