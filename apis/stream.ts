import { useEffect } from 'react'
import { fetchStream } from './base'

export async function streamMetaPromptRun({
  explanation,
  onNewData
}: {
  explanation: string
  onNewData?: (data: Record<string, any>) => void
}) {
  // await fetchStream({
  //   url: '/docs/run_meta_prompt',
  //   params: {},
  //   body: {
  //     explanation: explanation
  //   },
  //   onNewData: onNewData
  // })
  const mockPrompt = 'This is a mock prompt.'

  // Call onNewData
  let index = 0
  let value = { text: '' }

  const intervalId = setInterval(() => {
    if (index < mockPrompt.length) {
      value['text'] = mockPrompt[index]
      onNewData(value)
      //console.log(mockPrompt[index], index)
      index += 1
    } else {
      clearInterval(intervalId)
    }
  }, 1000)
}
