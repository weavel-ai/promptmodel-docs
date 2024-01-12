'use client'

import { useEffect, useState } from 'react'
import { InputField } from '../InputField'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export function Page() {
  const refs = {}
  const references = {
    example1: ['/ref/example1.png', 'https://www.naver.com'],
    example2: ['/ref/example2.jpg', 'https://www.google.co.kr'],
    example3: ['/ref/example3.png', 'https://www.instagram.com'],
    example4: ['/ref/example4.png', 'https://www.youtube.com'],
    example5: ['/ref/example5.png', 'https://www.netflix.com']
  }
  const [explanation, setExplanation] = useState('')
  const [result, setResult] = useState('')
  const [isInitial, setIsInitial] = useState(true)
  const [colorScheme, setColorScheme] = useState(null)

  useEffect(() => {
    const htmlElement = document.documentElement
    const computedStyle = getComputedStyle(htmlElement)
    const scheme = computedStyle.getPropertyValue('color-scheme').trim()
    setColorScheme(scheme)
  }, [])

  return (
    <main
      data-theme={colorScheme}
      className="bg-transparent mt-20 overflow-y-auto"
    >
      <div className="w-full h-full justify-center flex flex-col gap-y-8 px-96">
        <p className="w-full text-center text-4xl font-semibold">
          We design you the best prompt based on your explanation.
        </p>
        <p className="text-2xl font-semibold text-center">References</p>
        <div className="w-full px-64">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              {Object.entries(references).map(([key, value]) => {
                return (
                  <Link
                    className={classNames(
                      'flex flex-col w-[300px] items-center justify-center gap-y-2 m-2 mx-auto',
                      'transition-transform duration-300 hover:scale-105 hover:cursor-pointer relative',
                      'hover:z-20 group'
                    )}
                    href={value[1]}
                  >
                    <Image
                      src={value[0]}
                      alt="No Image"
                      width={210}
                      height={297}
                    ></Image>
                  </Link>
                )
              })}
            </div>
            <div
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              {Object.entries(references).map(([key, value]) => {
                return (
                  <Link
                    className={classNames(
                      'flex flex-col w-[300px] items-center justify-center gap-y-2 m-2 mx-auto',
                      'transition-transform duration-300 hover:scale-105 hover:cursor-pointer relative',
                      'hover:z-20 group'
                    )}
                    href={value[1]}
                  >
                    <Image
                      src={value[0]}
                      alt="No Image"
                      width={210}
                      height={297}
                    ></Image>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col px-48">
          <div className="w-full h-fit flex flex-row justify-between">
            <p className="text-2xl font-semibold text-base-content">
              Explain the prompt you want.
            </p>
            <div className="btn btn-sm bg-input">
              <button
                onClick={() => {
                  setIsInitial(false)
                }}
              >
                <p className="text-base-content text-base font-semibold">
                  {isInitial ? 'Generate' : 'Regenerate'}
                </p>
              </button>
            </div>
          </div>
          <InputField textarea value={explanation} setValue={setExplanation} />
        </div>
        {!isInitial && (
          <div className="w-full h-full flex flex-col gap-y-3 px-48">
            <p className="text-2xl font-semibold text-base-content">Result</p>
            <p className="bg-input border-2 border-muted rounded-lg px-4 py-2 font-semibold">
              {isInitial ? 'Enter your explanation.' : result}
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
