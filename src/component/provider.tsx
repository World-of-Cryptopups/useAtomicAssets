import { createContext, ReactNode, useContext } from 'react'

interface UseAtomicAssetsProps {
  children: ReactNode
  endpoint?: string
}

interface UseAtomicContextProps {
  endpoint?: string
}

const UseAtomicContext = createContext<UseAtomicContextProps>({})

const UseAtomicAssetsProvider = ({
  children,
  endpoint
}: UseAtomicAssetsProps) => {
  return (
    <UseAtomicContext.Provider value={{ endpoint }}>
      {children}
    </UseAtomicContext.Provider>
  )
}

export const useAtomicContext = () => {
  return useContext(UseAtomicContext)
}

export default UseAtomicAssetsProvider
