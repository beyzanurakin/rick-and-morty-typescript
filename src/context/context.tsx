import { createContext, ReactNode, useContext, useState } from 'react'

type Props = {
  children: ReactNode
}
type setModalType = React.Dispatch<
  React.SetStateAction<{ filter: string; show: boolean }>
>
type ContextStateTypes = {
  showModal: {
    filter: string
    show: boolean
  }
  setShowModal: setModalType
}

const globalContext = createContext({} as ContextStateTypes)

export function useGlobalContext() {
  return useContext(globalContext)
}

export function Provider({ children }: Props) {
  const [showModal, setShowModal] = useState<{
    filter: string
    show: boolean
  }>({
    filter: '',
    show: false,
  })
  return (
    <globalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </globalContext.Provider>
  )
}
