import pharmacyImg from '../../assets/img/pharmacy.svg';

function Home() {
    return (
        <>
            <section className="bg-indigo-200 flex justify-center">
                <article className='container grid grid-cols-2 text-gray-900'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Aqui você encontra Medicamentos e Cosméticos!
                        </p>


                    </div>

                    <div className="flex justify-center ">
                        <img
                            src={pharmacyImg}
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </article>
            </section>
        </>
    );
}

export default Home;
