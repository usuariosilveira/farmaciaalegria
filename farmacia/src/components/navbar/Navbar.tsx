import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    Farmacia Alegria

                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategorias' className='hover:underline'>Cadastrar Categoria</Link>
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}