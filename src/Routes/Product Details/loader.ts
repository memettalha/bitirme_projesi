{/*import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const { id } = useParams<{ id: string }>();

const ProductDetailsloader = () => {
    useEffect(() => {
        const fetchProduct =  async () => {
            try{
                const response = await fetch ( 
                    `https://fe1111.projects.academy.onlyjs.com/api/v1/products/${id}`
                );
                const responseJson = response.json();
                return {responseJson}

            }catch(error){
                console.log("Hata:", error)
            }
        }
    },[id])
  return (
    <>
    </>
  )
}

export default ProductDetailsloader


*/}