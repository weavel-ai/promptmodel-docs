import React, { useEffect } from 'react'

const policies = {
  //   'terms-of-service': 'baf80a2e-dc67-46de-9ca8-2f7457179c32',
  privacy: '198e20c6-4a17-4659-961d-c152469245f7'
}

export function TermlyEmbed(props: { policy: keyof typeof policies }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://app.termly.io/embed-policy.min.js'
    script.async = true
    document.body.appendChild(script)
  }, [])
  return (
    <div
      // @ts-ignore
      name="termly-embed"
      data-id={policies[props.policy]}
      data-type="iframe"
    ></div>
  )
}
