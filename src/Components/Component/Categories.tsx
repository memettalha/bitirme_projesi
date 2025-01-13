import React from 'react'
import { BASE_URL } from '../../Routes/SingUpPage'

const Categories = () => {

    const CategoriesFetch = async() => {
        const response = await fetch(BASE_URL +"categories")
        const responseJson = response.json()
        console.log(responseJson)
    }
  return (
    <div>
      
    </div>
  )
}

export default Categories
