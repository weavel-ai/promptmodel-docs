import React, { useEffect } from 'react'

export function ScheduleDemoCalendly() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true

    document.body.appendChild(script)

    // Clean up
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/sounhochung/30min"
      style={{
        minWidth: '320px',
        height: '1000px',
        marginTop: '2rem'
      }}
    />
  )
}
