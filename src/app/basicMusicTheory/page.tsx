'use client'
import React from 'react'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const page = () => {
    const word1 = 'Rhythm: The movement of notes and rests (silences) in time.'
    const word2 = 'Key signatures: Symbols that appear after the clef and tell the musician which sharps or flats exist in the piece of music.'

    const word3 = 'Chords: Three or more notes played at the same time.'
    const word4 = 'Chord progressions: Sequences of chords arranged in a specific order.'

    const word5 = ' Tempo: The speed of the music.'
    const word6 = 'Notes: The building blocks of musical compositions.'

    const word7 = 'Tuning: The process of adjusting the pitch of instruments so that they are in tune with each other.'

    const word8 = 'The musical alphabet: A system of letters used to represent the notes of the scale.'
    return (
        <div className='w-full bg-slate-900 min-h-[100vh]'>
            <h3 className='text-center font-semibold text-4xl text-gray-200 pt-32'>Basic Music Theory</h3>
            <TextGenerateEffect words={word1} className='p-10  pl-12  font-lg ' />
            <TextGenerateEffect words={word2} className='pt-2  pl-12  font-lg ' />
            <TextGenerateEffect words={word3} className='pt-2  pl-12  font-lg ' />
            <TextGenerateEffect words={word4} className='pt-2  pl-12  font-lg ' />
            <TextGenerateEffect words={word5} className='pt-2  pl-12  font-lg ' />
            <TextGenerateEffect words={word6} className='pt-2  pl-12  font-lg ' />
            <TextGenerateEffect words={word7} className='pt-2  pl-12  font-lg ' />
            <TextGenerateEffect words={word8} className='pt-2  mb-2 pl-12  font-lg ' />
        </div>
    )
}

export default page