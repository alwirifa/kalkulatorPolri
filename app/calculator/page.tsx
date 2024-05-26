"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {}

const Calculator = (props: Props) => {
  return (
    <div className="flex flex-col gap-6 p-8 bg-gray-100 min-h-screen items-center">
      <div className="flex flex-col items-center">
        <Image src="/icons/logo.png" height={150} width={150} alt="logo" />
        <h1 className="text-lg xl:text-2xl font-bold text-zinc-900 mt-4">HITUNG NILAI AKADEMIK, NILAI MENUJU RIKKES II & NILAI AKHIR</h1>
      </div>
      
      <div className="flex flex-col gap-4 w-full max-w-md">
        <h2 className="text-lg text-center font-semibold text-zinc-900">Kalkulator Nilai Akademik</h2>
        <div className="flex flex-col gap-2">
          <Link href={'/calculator/akademikAkpol'}>
            <p className="cursor-pointer block p-3 bg-zinc-900 text-white rounded-lg shadow-md hover:bg-zinc-800 transition-colors">
              AKPOL (Tingkat Panda)
            </p>
          </Link>
          <Link href={'/calculator/akademikBakomsus'}>
            <p className="cursor-pointer block p-3 bg-zinc-900 text-white rounded-lg shadow-md hover:bg-zinc-800 transition-colors">
              BINTARA KOMPETENSI KHUSUS
            </p>
          </Link>
          <Link href={'/calculator/akademikBintara'}>
            <p className="cursor-pointer block p-3 bg-zinc-900 text-white rounded-lg shadow-md hover:bg-zinc-800 transition-colors">
              BINTARA PTU
            </p>
          </Link>
          <Link href={'/calculator/akademikTamtama'}>
            <p className="cursor-pointer block p-3 bg-zinc-900 text-white rounded-lg shadow-md hover:bg-zinc-800 transition-colors">
              TAMTAMA POLRI
            </p>
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 w-full max-w-md">
        <h2 className="text-lg text-center  font-semibold text-zinc-900">Kalkulator Nilai Menuju Rikkes II</h2>
        <div className="flex flex-col gap-2">
          <Link href={'/calculator/rikes2Akpol'}>
            <p className="cursor-pointer block p-3 bg-zinc-900 text-white rounded-lg shadow-md hover:bg-zinc-800 transition-colors">
              AKPOL (Tingkat Panda)
            </p>
          </Link>
          <Link href={'/calculator/rikes2Bintara'}>
            <p className="cursor-pointer block p-3 bg-zinc-900 text-white rounded-lg shadow-md hover:bg-zinc-800 transition-colors">
              BINTARA PTU
            </p>
          </Link>
          <Link href={'/calculator/rikes2Tamtama'}>
            <p className="cursor-pointer block p-3 bg-zinc-900 text-white rounded-lg shadow-md hover:bg-zinc-800 transition-colors">
              TAMTAMA POLRI
            </p>
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 w-full max-w-md">
        <h2 className="text-lg text-center  font-semibold text-zinc-900">Kalkulator Nilai Akhir</h2>
        <div className="flex flex-col gap-2">
          <Link href={'/calculator/nilaiAkhirAkpol'}>
            <p className="cursor-pointer block p-3 bg-zinc-900 text-white rounded-lg shadow-md hover:bg-zinc-800 transition-colors">
              AKPOL (Tingkat Panda)
            </p>
          </Link>
          <Link href={'/calculator/nilaiAkhirBakomsus'}>
            <p className="cursor-pointer block p-3 bg-zinc-900 text-white rounded-lg shadow-md hover:bg-zinc-800 transition-colors">
              BINTARA KOMPETENSI KHUSUS
            </p>
          </Link>
          <Link href={'/calculator/nilaiAkhirBintara'}>
            <p className="cursor-pointer block p-3 bg-zinc-900 text-white rounded-lg shadow-md hover:bg-zinc-800 transition-colors">
              BINTARA PTU
            </p>
          </Link>
          <Link href={'/calculator/nilaiAkhirTamtama'}>
            <p className="cursor-pointer block p-3 bg-zinc-900 text-white rounded-lg shadow-md hover:bg-zinc-800 transition-colors">
              TAMTAMA POLRI
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Calculator
