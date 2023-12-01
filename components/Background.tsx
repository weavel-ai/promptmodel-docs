import classNames from 'classnames'

export const Background = ({ className }: { className?: string }) => (
  <div
    className={classNames(
      '!max-h-[100vh] w-full h-full absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent',
      className
    )}
  />
)
