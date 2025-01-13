import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const id = useParams<{id:string}>()


const  ProductDetailsLoader = async () => {
    try{
        const response =  await fetch(`https://fe1111.projects.academy.onlyjs.com/api/v1/products/${id}`)
        if(!response.ok) throw new Error("Network was not ok");
        const responseJson = response.json();
        console.log(responseJson)
    }
    catch{
        console.log("Error fetching product",Error)
    }
  return (
    <div>
      
    </div>
  )
}

export default ProductDetailsLoader
