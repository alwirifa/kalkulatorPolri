"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {}

const linkData = [
  { href: '/calculator/akademikAkpol', label: 'AKPOL (Tingkat Panda)', section: 'Kalkulator Nilai Akademik' },
  { href: '/calculator/akademikBakomsus', label: 'BINTARA KOMPETENSI KHUSUS', section: 'Kalkulator Nilai Akademik' },
  { href: '/calculator/akademikBintara', label: 'BINTARA PTU', section: 'Kalkulator Nilai Akademik' },
  { href: '/calculator/akademikTamtama', label: 'TAMTAMA POLRI', section: 'Kalkulator Nilai Akademik' },
  { href: '/calculator/rikes2Akpol', label: 'AKPOL (Tingkat Panda)', section: 'Kalkulator Nilai Menuju Rikkes II' },
  { href: '/calculator/rikes2Bintara', label: 'BINTARA PTU', section: 'Kalkulator Nilai Menuju Rikkes II' },
  { href: '/calculator/rikes2Tamtama', label: 'TAMTAMA POLRI', section: 'Kalkulator Nilai Menuju Rikkes II' },
  { href: '/calculator/nilaiAkhirAkpol', label: 'AKPOL (Tingkat Panda)', section: 'Kalkulator Nilai Akhir' },
  { href: '/calculator/nilaiAkhirBakomsus', label: 'BINTARA KOMPETENSI KHUSUS', section: 'Kalkulator Nilai Akhir' },
  { href: '/calculator/nilaiAkhirBintara', label: 'BINTARA PTU', section: 'Kalkulator Nilai Akhir' },
  { href: '/calculator/nilaiAkhirTamtama', label: 'TAMTAMA POLRI', section: 'Kalkulator Nilai Akhir' },
]

const sections = [
  'Kalkulator Nilai Akademik',
  'Kalkulator Nilai Menuju Rikkes II',
  'Kalkulator Nilai Akhir'
]

const Calculator = (props: Props) => {
  return (
    <div className="flex flex-col gap-6 p-8 bg-bg-mobile md:bg-bg-home bg-cover  min-h-screen items-center">
      <div className="flex flex-col items-center">
        <Image src="/icons/logo.png" height={150} width={150} alt="logo" />
        <h1 className="text-lg xl:text-2xl font-bold text-zinc-900 mt-4 text-center">
          HITUNG NILAI AKADEMIK, NILAI MENUJU RIKKES II & NILAI AKHIR
        </h1>
      </div>

      {sections.map(section => (
        <div key={section} className="flex flex-col gap-4 w-full max-w-md">
          <h2 className="text-lg text-center font-semibold text-zinc-900">{section}</h2>
          <div className="flex flex-col gap-2">
            {linkData.filter(link => link.section === section).map(link => (
              <Link key={link.href} href={link.href}>
                <p className="cursor-pointer block px-4 py-3 font-semibold bg-gradient-to-r from-[#BA0408] to-[#F37834] text-white rounded-lg shadow-md hover:bg-zinc-800 transition-colors">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Calculator
