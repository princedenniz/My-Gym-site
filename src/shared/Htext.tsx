import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Htext = ({children}: Props) => {
  return (
    <h4 className="basis=3/5 font-montserrat text-3xl font-bold">{children}</h4>
  )
}

export default Htext