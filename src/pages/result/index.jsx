import React, { useContext, useEffect } from 'react'
import { Context } from '../../context'

import { Layout } from '../../layouts'
import { Conflict } from '../../components/conflict'

export const Result = () => {
  const { optionUser } = useContext(Context)
  
  return (
    <Layout>
      <Conflict userOption={optionUser} />
    </Layout>
  )
}
