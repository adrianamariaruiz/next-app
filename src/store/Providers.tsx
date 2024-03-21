'use client'

import { Provider } from 'react-redux'
import { AppStore, store } from '.'
import { useRef } from 'react'

interface Props{
  children: React.ReactNode
}

const Providers = ({children}: Props) => {

  const storeRef = useRef<AppStore>()
  if(!storeRef.current){
    storeRef.current = store()
  }

  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  )
}
export default Providers

// export default Providers
// const Providers = ({children}: Props) => {

//   return (
//     <Provider store={store}>
//       {children}
//     </Provider>
//   )

// }

// export default Providers