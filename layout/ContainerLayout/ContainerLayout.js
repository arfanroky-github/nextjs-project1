import React from 'react'

const ContainerLayout = ({children, bgColor}) => {
  return (
    <div
        style={{
          maxWidth: '1200px',
          width:'100%',
          margin: '0 auto',
          height: '100vh',
          display:'flex',
          justifyContent:'center',
          alignItems: 'center',
          background: bgColor,
          color: 'whitesmoke'
        }}
        >
      {children}
        </div>
  )
}

export default ContainerLayout