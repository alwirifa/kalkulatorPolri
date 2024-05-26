"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface Scores {
  academic: string;
  psychology: string;
  physical: string;
}

const NilaiAkhirAkpol = () => {
  const [scores, setScores] = useState<Scores>({
    academic: '',
    psychology: '',
    physical: '',
  });

  const [result, setResult] = useState({
    total: 0,
    academicScore: 0,
    psychologyScore: 0,
    physicalScore: 0,
  });

  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

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
    if (!scores.academic || !scores.psychology || !scores.physical) {
      setError('Semua bidang harus diisi!');
      return;
    }

    const academicScore = (parseFloat(scores.academic) || 0) * 0.4;
    const psychologyScore = (parseFloat(scores.psychology) || 0) * 0.35;
    const physicalScore = (parseFloat(scores.physical) || 0) * 0.25;

    const total = academicScore + psychologyScore + physicalScore;

    setResult({
      total,
      academicScore,
      psychologyScore,
      physicalScore,
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
          <h1 className="font-semibold tracking-tight text-xl">Kalkulator Nilai Akhir - AKPOL (Tingkat Panda)</h1>
        </div>
        <form className="p-6 pt-0 grid gap-4 w-full" onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
          <div className="grid gap-2">
            <label htmlFor="academic" className="block text-sm font-medium leading-none text-zinc-950">
              Nilai Akademik <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name="academic"
              placeholder="Masukan nilai akademik"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900 shadow-sm"
              value={scores.academic}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="psychology" className="block text-sm font-medium leading-none text-zinc-950">
              Nilai Psikologi <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name="psychology"
              placeholder="Masukan nilai psikologi"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900 shadow-sm"
              value={scores.psychology}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="physical" className="block text-sm font-medium leading-none text-zinc-950">
              Nilai Jasmani <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name="physical"
              placeholder="Masukan nilai jasmani"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-900 shadow-sm"
              value={scores.physical}
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
                <p>Nilai Akademik (40%) : {result.academicScore.toFixed(1)}</p>
                <p>Nilai Psikologi (35%) : {result.psychologyScore.toFixed(1)}</p>
                <p>Nilai Jasmani (25%) : {result.physicalScore.toFixed(1)}</p>
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

export default NilaiAkhirAkpol;
