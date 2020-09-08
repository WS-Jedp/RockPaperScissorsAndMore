import React, { useContext, useEffect } from 'react'
import { useNavigate } from '@reach/router'

import { Context } from '../../context'
import { options } from '../../tools/options'

import { Layout } from '../../layouts'
import { SelectOption } from '../../components/selectOption'


export const Home = () => {

  const { setNewOptionUser } = useContext(Context)
  const navigate = useNavigate()

  const handleAction = (value) => {
    setNewOptionUser(value)
    navigate('/result')
  }

  return (
    <Layout>
      <SelectOption action={handleAction} />
    </Layout>
  )

}
