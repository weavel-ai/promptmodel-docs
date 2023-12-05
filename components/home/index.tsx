'use client'

import classNames from 'classnames'
import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
//import { logEvent } from "services/amplitude";
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Link from 'next/link'
import { useTheme } from 'nextra-theme-docs'
import Spline from '@splinetool/react-spline'
import { GetStartedButton } from '@/components/buttons/GetStartedButton'
import { CheckFat } from '@phosphor-icons/react'
import { logEvent } from '../../services/amplitude'
import { Background } from '../Background'

export function Home() {
  const [isUploading, setIsUploading] = useState(false)
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const params = useSearchParams()
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  // Amplitude logging
  useEffect(() => {
    logEvent('page_view:home', {
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_content: params.get('utm_content'),
      utm_term: params.get('utm_term')
    })
  }, [])

  const [colorScheme, setColorScheme] = useState(null)

  useEffect(() => {
    const htmlElement = document.documentElement
    const computedStyle = getComputedStyle(htmlElement)
    const scheme = computedStyle.getPropertyValue('color-scheme').trim()
    setColorScheme(scheme)
  }, [])

  useEffect(() => {
    setColorScheme(theme)
  }, [theme])

  return (
    <main data-theme={colorScheme} className="bg-transparent -mt-16">
      <div
        className={classNames(
          'h-full w-full overflow-y-auto overflow-x-hidden flex flex-col justify-start items-center'
        )}
        ref={containerRef}
      >
        <Background />
        <div
          className={classNames(
            'flex flex-col items-center justify-start h-max w-full max-w-[100rem]'
          )}
        >
          <div
            className={classNames(
              'flex flex-col',
              'h-screen max-w-screen w-full relative z-10 items-center',
              'px-4 pt-10 sm:px-12 sm:justify-center sm:pt-0'
            )}
          >
            <div className="h-96 lg:h-[50rem] lg:max-h-[50vh] w-full">
              <Spline
                scene="https://prod.spline.design/iEcyP67OlC9-JGMl/scene.splinecode"
                className="h-full w-full"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, translateY: 40 }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                translateY: 0
              }}
            >
              <p
                className={classNames(
                  'text-transparent bg-clip-text bg-gradient-to-b from-base-content/80 from-20% to-base-content/95 backdrop-blur-md rounded-box',
                  'text-4xl font-bold text-center',
                  'sm:text-5xl'
                )}
              >
                {/* Prompt & model versioning on the cloud */}
                Collaborative prompt & model engineering
              </p>
            </motion.h1>
            <motion.div
              className={classNames(
                'flex flex-col items-start',
                'gap-y-2 my-3',
                'sm:gap-y-4 sm:my-10'
              )}
              initial={{ opacity: 0, translateY: 40 }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                translateY: 0
              }}
              transition={{ delay: 0.2 }}
            >
              <p
                className={classNames(
                  'text-transparent bg-clip-text bg-gradient-to-b from-muted-content/70 from-20% to-muted-content/90 backdrop-blur-md rounded-box text-center',
                  'text-lg font-semibold p-1',
                  'sm:text-xl sm:font-medium'
                )}
              >
                Prompt engineering, versioning and evaluation -
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-base-content/60 to-base-content/80">
                  &nbsp;built for LLM product teams.&nbsp;
                </span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0
              }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
            >
              <GetStartedButton />
            </motion.div>
          </div>
          <div
            className={classNames(
              'flex my-32 z-10 gap-y-4 justify-start w-full h-fit relative',
              'px-6 items-center flex-col',
              'sm:min-h-[36rem] sm:px-12 sm:flex-row sm:justify-between sm:gap-x-6'
            )}
          >
            <motion.div
              className="w-fit"
              viewport={{ once: true }}
              initial={{ opacity: 0, translateX: -300 }}
              whileInView={{
                opacity: 1,
                translateX: 0
              }}
              transition={{ delay: 0.6 }}
            >
              <Image
                src="/demos/deployment-publishing.gif"
                alt="Publishing"
                width={800}
                height={600}
                className={classNames('rounded-xl')}
              />
            </motion.div>
            <div className={classNames('sm:flex sm:flex-col sm:gap-y-4')}>
              <motion.div
                className={classNames('self-start mt-6 mb-2 sm:m-0')}
                initial={{ opacity: 0, translateY: 40 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, translateY: 0 }}
              >
                <h1
                  className={classNames(
                    'text-base-content',
                    'text-3xl font-bold self-start text-start',
                    'sm:text-4xl'
                  )}
                >
                  Scale your LLM development
                </h1>
              </motion.div>
              <motion.div
                className="backdrop-blur-md rounded-box"
                viewport={{ once: true }}
                initial={{ opacity: 0, translateY: 40 }}
                whileInView={{
                  opacity: 1,
                  translateY: 0
                }}
                transition={{ delay: 0.2, type: 'false' }}
              >
                <h3
                  className={classNames(
                    'text-transparent bg-clip-text bg-gradient-to-b from-muted-content/60 from-20% to-muted-content/70',
                    'text-lg font-medium text-start',
                    'sm:text-xl'
                  )}
                >
                  Meet the CI/CD for prompts
                  <br />
                  (automated testing coming soon).
                </h3>
              </motion.div>
            </div>
          </div>
          <div
            className={classNames(
              'flex z-10 justify-start w-full h-fit relative',
              'px-6 items-center flex-col gap-y-8 my-16',
              'sm:min-h-[36rem] sm:px-12 sm:flex-row sm:justify-between sm:gap-x-6 sm:gap-y-4 sm:my-32'
            )}
          >
            <motion.div
              className="w-fit sm:hidden"
              viewport={{ once: true }}
              initial={{ opacity: 0, translateX: 300 }}
              whileInView={{
                opacity: 1,
                translateX: 0
              }}
              transition={{ delay: 0.6 }}
            >
              <Image
                src="/demos/engineering.gif"
                alt="Engineering"
                width={800}
                height={600}
                className={classNames('rounded-xl')}
              />
            </motion.div>
            <div
              className={classNames('sm:flex sm:flex-col sm:gap-y-4', 'w-fit')}
            >
              <motion.div
                className={classNames('sm:self-start sm:mt-6 sm:mb-2', 'w-fit')}
                initial={{ opacity: 0, translateY: 40 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, translateY: 0 }}
              >
                <h1
                  className={classNames(
                    'text-base-content w-fit',
                    'text-3xl font-bold self-start text-start',
                    'sm:text-4xl sm:font-bold'
                  )}
                >
                  Prompt engineering for collaboration
                </h1>
              </motion.div>
              <motion.div
                className="max-w-md"
                viewport={{ once: true }}
                initial={{ opacity: 0, translateY: 40 }}
                whileInView={{
                  opacity: 1,
                  translateY: 0
                }}
                transition={{ delay: 0.2, type: 'false' }}
              >
                <h3
                  className={classNames(
                    'text-transparent bg-clip-text bg-gradient-to-b from-muted-content/60 from-20% to-muted-content/70',
                    'text-lg text-start',
                    'sm:text-xl'
                  )}
                >
                  A prompt engineering dashboard that feels like an extension of
                  your IDE.
                </h3>
                <div className="flex flex-col gap-y-2 ml-2 mt-4 text-muted-content text-lg">
                  <div className="flex flex-row gap-x-4 items-center">
                    <CheckFat
                      size={24}
                      weight="fill"
                      className="text-base-content"
                    />
                    <p>Visual differences between prompts</p>
                  </div>
                  <div className="flex flex-row gap-x-4 items-center">
                    <CheckFat
                      size={24}
                      weight="fill"
                      className="text-base-content"
                    />
                    <p>Synchronized with your codebase in real-time</p>
                  </div>
                  <div className="flex flex-row gap-x-4 items-center">
                    <CheckFat
                      size={24}
                      weight="fill"
                      className="text-base-content"
                    />
                    <p>LLM generations called from your local environment</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="w-fit hidden sm:block"
              viewport={{ once: true }}
              initial={{ opacity: 0, translateX: 300 }}
              whileInView={{
                opacity: 1,
                translateX: 0
              }}
              transition={{ delay: 0.6 }}
            >
              <Image
                src="/demos/engineering.gif"
                alt="Engineering"
                width={800}
                height={600}
                className={classNames('rounded-xl')}
              />
            </motion.div>
          </div>
          <div
            className={classNames(
              'flex my-32 z-10 gap-y-4 justify-start w-full h-fit relative',
              'px-6 items-center flex-col',
              'sm:min-h-[36rem] sm:px-12 sm:flex-row sm:justify-between sm:gap-x-8'
            )}
          >
            <motion.div
              className={classNames(
                'rounded-xl bg-gradient-to-br from-base-200/90 to-base-100/90 flex justify-center items-center sm:w-[36rem] sm:h-[24rem]',
                'w-[90vw] h-[56vw]'
              )}
              viewport={{ once: true }}
              initial={{ opacity: 0, translateX: -300 }}
              whileInView={{
                opacity: 1,
                translateX: 0
              }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-lg font-medium">Coming soon</p>
            </motion.div>
            <div className={classNames('sm:flex sm:flex-col sm:gap-y-4')}>
              <motion.div
                className={classNames('self-start mt-6 mb-2', 'sm:m-0')}
                initial={{ opacity: 0, translateY: 40 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, translateY: 0 }}
              >
                <h1
                  className={classNames(
                    'text-base-content',
                    'text-3xl font-bold self-start text-start',
                    'sm:text-4xl'
                  )}
                >
                  Evaluation metrics for development & production
                </h1>
              </motion.div>
              <motion.div
                className="backdrop-blur-md rounded-box"
                viewport={{ once: true }}
                initial={{ opacity: 0, translateY: 40 }}
                whileInView={{
                  opacity: 1,
                  translateY: 0
                }}
                transition={{ delay: 0.2, type: 'false' }}
              >
                <h3
                  className={classNames(
                    'text-transparent bg-clip-text bg-gradient-to-b from-muted-content/60 from-20% to-muted-content/70',
                    'text-lg font-medium text-start',
                    'sm:text-xl'
                  )}
                >
                  Find the most optimal prompt & LLM based on automated
                  evaluation.
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'flex flex-col items-center justify-center',
            'max-w-screen w-full relative z-10',
            'bg-gradient-to-b from-base-content/5 to-transparent',
            'text-center',
            'min-h-[40vh]',
            'sm:min-h-[50vh] sm:pl-12'
          )}
        >
          <motion.h1
            className={classNames(
              'text-base-content',
              'text-3xl font-bold mb-5 px-4',
              'sm:text-4xl lg:text-5xl sm:mb-10 sm:px-0'
            )}
            initial={{ opacity: 0, translateY: 40 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              translateY: 0
            }}
          >
            Start scaling your prompts now.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, translateY: 40 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              translateY: 0
            }}
            transition={{ delay: 0.2, type: 'false' }}
          >
            <h3
              className={classNames(
                'font-medium text-transparent bg-clip-text bg-gradient-to-b from-muted-content/60 from-20% to-muted-content/70',
                'text-xl mb-4',
                'sm:text-2xl sm:mb-8'
              )}
            >
              Join our public beta.
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          >
            <GetStartedButton />
          </motion.div>
        </div>
      </div>
    </main>
  )
}
