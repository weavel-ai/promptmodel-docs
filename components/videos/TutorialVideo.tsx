export function TutorialVideoLoom({ src }: { src: string }) {
  return (
    <div style={{ position: 'relative', paddingBottom: '62.5%', height: 0 }}>
      <iframe
        src={src}
        title="Tutorial Video"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          marginTop: '1rem',
          marginBottom: '1rem'
        }}
      ></iframe>
    </div>
  )
}
