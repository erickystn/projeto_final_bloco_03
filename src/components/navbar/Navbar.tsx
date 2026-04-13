import { FirstAidIcon, UserIcon, ShoppingCartSimpleIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { type ReactNode } from "react";
import { Link } from "react-router-dom";


function Navbar() {


    let component: ReactNode;
    component = (

        <div className='w-full flex justify-center py-3 bg-indigo-900 text-white'>
            <div className="container flex items-center justify-between mx-4 gap-4">
                
                {/* LOGO */}
                <Link to='/home' className='flex items-center gap-2 text-2xl font-bold min-w-fit'>
                    <FirstAidIcon size={40} color="#fc0303" weight="fill" />
                    <span>FARMÁCIA</span>
                </Link>

                {/* BARRA DE PESQUISA */}
                <div className="flex-1 flex justify-center">
                    <div className='relative w-full max-w-[450px] flex items-center'>
                        <input 
                            className="h-10 w-full rounded-lg px-4 py-2 text-black focus:outline-none bg-amber-50"
                            type="search" 
                            placeholder="Procurar" 
                        />
                        <button className='absolute right-0 h-10 w-12 bg-indigo-500 hover:bg-indigo-700 rounded-r-lg flex items-center justify-center transition-all'>
                            <MagnifyingGlassIcon size={22} color="#fff" weight="bold" />
                        </button>
                    </div>
                </div>

                {/* LINKS E ÍCONES */}
                <div className='flex gap-6 items-center min-w-fit text-sm font-medium'>
                    <Link to='/postagens' className='hover:underline hidden md:block'>Categorias</Link>
                    <Link to='/temas' className='hover:underline hidden md:block'>Cadastrar Categoria</Link>
                    
                    <div className='flex gap-3 items-center'>
                        <Link to='/cadastrartema'>
                            <UserIcon size={32} weight="regular" className="hover:text-indigo-300 transition-colors" />
                        </Link>
                        <Link to='/perfil'>
                            <ShoppingCartSimpleIcon size={32} weight="regular" className="hover:text-indigo-300 transition-colors" />
                        </Link>
                    </div>
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