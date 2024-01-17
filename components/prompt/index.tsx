import { useEffect, useState } from 'react'
import { InputField } from '../InputField'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { streamMetaPromptRun } from '@/apis/stream'
import { Background } from '../Background'
import { Sparkle } from '@phosphor-icons/react'

export function PromptPage() {
  const references = {
    example1: ['/ref/example1.png', 'https://www.naver.com'],
    example2: ['/ref/example2.jpg', 'https://www.google.co.kr'],
    example3: ['/ref/example3.png', 'https://www.instagram.com'],
    example4: ['/ref/example4.png', 'https://www.youtube.com'],
    example5: ['/ref/example5.png', 'https://www.netflix.com']
  }
  const [explanation, setExplanation] = useState('')
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [isInitial, setIsInitial] = useState(true)
  const [isStreaming, setIsStreaming] = useState(false)
  const [colorScheme, setColorScheme] = useState(null)

  useEffect(() => {
    const htmlElement = document.documentElement
    const computedStyle = getComputedStyle(htmlElement)
    const scheme = computedStyle.getPropertyValue('color-scheme').trim()
    setColorScheme(scheme)
  }, [])

  async function handleMetaPromptRun(explanation) {
    let generatedPromptCache: string = ''
    await streamMetaPromptRun({
      explanation: explanation,
      onNewData: data => {
        if (!data.text) {
          setIsStreaming(false)
          return
        }
        generatedPromptCache += data.text
        setGeneratedPrompt(generatedPromptCache)
      }
    })
  }

  return (
    <main
      data-theme={colorScheme}
      className="bg-transparent mt-20 overflow-y-auto flex justify-center items-center"
    >
      <Background className="-z-10" />
      <div className="w-full h-full justify-center flex flex-col gap-y-8 max-w-5xl items-center">
        <p className="w-full text-center text-4xl font-semibold">
          Write a short explanation.
          <br /> We'll generate an optimized prompt for you.
        </p>
        <p className="text-2xl font-semibold text-center text-white/60">
          References
        </p>
        <div className="w-full">
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

        <div className="w-full h-full flex flex-col max-w-4xl">
          <div className="w-full h-fit flex flex-row justify-between">
            <p className="text-2xl font-semibold text-base-content">
              What do you want the LLM to do?
            </p>
            <button
              disabled={isStreaming || !explanation}
              onClick={() => {
                setIsInitial(false)
                handleMetaPromptRun(explanation)
                setIsStreaming(true)
              }}
              className={classNames(
                'btn btn-sm outline-none border-none h-10 bg-base-content text-base-100 font-normal',
                'hover:bg-base-content/80 hover:text-base-100 flex flex-row gap-x-2 disabled:bg-muted-content disabled:text-muted'
              )}
            >
              {isStreaming ? (
                <div className="loading loading-spinner" />
              ) : (
                <>
                  <Sparkle className="w-5 h-5 text-primary" weight="fill" />
                  <p className="text-base font-semibold">
                    {isInitial ? 'Generate' : 'Regenerate'}
                  </p>
                </>
              )}
            </button>
          </div>
          <InputField
            textarea
            value={explanation}
            setValue={setExplanation}
            inputClassName="text-sm min-h-[10rem] text-base-content"
          />
        </div>

        <div className="w-full h-full flex flex-col gap-y-3 max-w-4xl">
          <p className="text-2xl font-semibold text-base-content">Result</p>
          <p
            className={classNames(
              'bg-input border-2 border-muted rounded-lg px-4 py-2 font-medium',
              isInitial && 'text-base-content/80'
            )}
          >
            {isInitial
              ? "Enter your explanation and click 'Generate'."
              : generatedPrompt}
          </p>
        </div>
      </div>
    </main>
  )
}
