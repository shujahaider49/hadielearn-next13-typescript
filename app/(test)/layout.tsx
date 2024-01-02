import React from 'react'

const TestLayout = ({children}: {children : React.ReactNode}) => {
  return (
    <div>
    <main>
      {children}
    </main>
    </div>
  )
}

export default TestLayout
