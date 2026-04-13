import { FirstAidIcon, UserIcon, ShoppingCartSimpleIcon } from "@phosphor-icons/react";
import { type ReactNode } from "react";
import { Link } from "react-router-dom";


function Navbar() {


    let component: ReactNode;
    component = (

        <div className='w-full flex justify-center py-4 
                bg-indigo-700 text-white'>

            <div className="container flex justify-between text-lg mx-8">
                <Link to='/home' className='text-2xl font-bold flex items-center gap-2'><FirstAidIcon size={44} color="#fc0303" weight="fill" /><span>FARMÁCIA</span></Link>

                <div className='flex gap-4 items-center'>
                    <Link to='/postagens' className='hover:underline'>Categoria</Link>
                    <Link to='/temas' className='hover:underline'>Cadastrar Categoria</Link>
                    <Link to='/cadastrartema' className='hover:underline'><UserIcon size={36} color="#e8e8e8" weight="bold" /></Link>
                    <Link to='/perfil' className='hover:underline'><ShoppingCartSimpleIcon size={36} color="#e8e8e8" weight="bold" /></Link>
                </div>
            </div>
        </div>

    );

    return (
        <>
            {component}
        </>
    )
}

export default Navbar