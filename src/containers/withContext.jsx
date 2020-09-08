import React, {useContext} from 'react'
import { Context } from '../context'

export const ComponentWithContext = (WrapperComponent, role) => {

  const { setNewOptionUser, setNewOptionHome} = useContext(Context)

  if(role === 'user'){
    return <WrapperComponent action={setNewOptionUser} />
  } 

  return <WrapperComponent action={setNewOptionHome} />
}