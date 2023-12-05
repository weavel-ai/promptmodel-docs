import classNames from 'classnames'

export function GuideflowEmbed({
  src,
  className
}: {
  src: string
  className: string
}) {
  return (
    <div
      className={classNames(className, 'my-4')}
      style={{
        position: 'relative',
        paddingBottom: 'calc(66.66666666666666% + 50px)',
        height: 0,
        background: 'transparent'
      }}
    >
      <iframe
        src={src}
        title="Guideflow"
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        className="my-auto bg-transparent"
        allow="clipboard-read; clipboard-write"
      ></iframe>
    </div>
  )
}
