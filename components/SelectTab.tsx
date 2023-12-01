import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'

interface SelectTabProps {
  tabs: string[]
  selectedTab: string
  onSelect: (tab: string) => void
}

export const SelectTab = ({ tabs, selectedTab, onSelect }: SelectTabProps) => {
  const containerRef = useRef(null)
  const tabRefs = useRef(new Array(tabs.length))
  const [xPosition, setXPosition] = useState(0)
  const [tabWidth, setTabWidth] = useState(0)

  useEffect(() => {
    const selectedIndex = tabs.indexOf(selectedTab)
    if (containerRef.current && tabRefs.current[selectedIndex]) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const selectedTabRect =
        tabRefs.current[selectedIndex].getBoundingClientRect()

      // Calculate the x position and width of the selected tab
      const newPosition = selectedTabRect.left - containerRect.left
      const newWidth = selectedTabRect.width
      setXPosition(newPosition)
      setTabWidth(newWidth)
    }
  }, [selectedTab, tabs.length])

  return (
    <div
      ref={containerRef}
      className="w-fit h-8 flex flex-row items-center relative gap-x-4"
    >
      {tabs.map((tab, index) => (
        <div
          key={tab}
          ref={el => (tabRefs.current[index] = el)}
          className={classNames(
            'rounded-full w-fit h-full px-3 flex justify-center items-center cursor-pointer transition-colors bg-transparent z-10',
            tab === selectedTab ? 'text-base-100' : 'text-base-content'
          )}
          onClick={() => onSelect(tab)}
        >
          {tab}
        </div>
      ))}
      <motion.div
        className="absolute top-0 left-0 h-full bg-base-content/90 rounded-full z-0"
        initial={{ x: 0 }}
        animate={{ x: xPosition, width: tabWidth }}
      />
    </div>
  )
}
