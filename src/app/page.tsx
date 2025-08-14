import Image from 'next/image'
import VideoPlayer from '@/components/VideoPlayer'
import Card from '@/components/Card'

export default function Home() {
    return (
        <>
            {/* Seção principal com imagem de fundo */}
            <div className="flex flex-col min-h-[90vh] p-4 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat">
                <Image
                    src="/images/zap.svg"
                    alt="Logo do WhatsApp"
                    width={70}
                    height={70}
                    className="fixed bottom-12 right-12 z-50 cursor-pointer"
                />
                <div className="container mx-auto flex flex-col items-center">
                    <Image
                        src="/images/logo.svg"
                        alt="Logo da Delta Blues Brasil"
                        width={200}
                        height={200}
                        className="pt-8"
                    />

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-6 sm:p-8 md:p-14 lg:p-20 w-full max-w-screen-xl">
                        {/* Texto */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h1 className="text-orange-400 leading-none font-semibold text-4xl sm:text-5xl md:text-6xl mb-6 max-w-md mx-auto lg:mx-0">
                                Treinamento
                                <br />
                                Slide Guitar
                            </h1>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl mb-6">
                                Lorem ipsum{' '}
                                <span className="text-blue-300 font-semibold">
                                    dolor sit amet
                                </span>
                                , consectetur adipiscing elit.
                            </h3>
                            <p className="text-base sm:text-lg md:text-2xl mb-8">
                                Vestibulum pretium sed libero id iaculis. Sed
                                lacus sapien, scelerisque ut euismod vel,
                                fermentum id magna. Sed ultrices lorem in
                                commodo scelerisque.
                            </p>
                            <a
                                href="/"
                                className="bg-green-700 px-6 sm:px-10 py-3 text-white font-bold rounded-lg hover:bg-green-800 transition-colors text-base sm:text-2xl inline-block"
                            >
                                QUERO DOMINAR O SLIDE!
                            </a>
                        </div>

                        {/* Vídeo */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <VideoPlayer />
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção dos Cards */}
            <div className="flex flex-col items-center bg-[#ECECEC] w-full py-12 px-4">
                <Image
                    src="/images/slideguitar.png"
                    alt="Logo da Delta Blues Brasil"
                    width={200}
                    height={200}
                    className="absolute right-1 h-150 w-auto z-0"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 w-full max-w-screen-xl z-10">
                    <Card
                        image={'/images/earning.png'}
                        title={'Metodologia\ne Diferencial'}
                        description={[
                            'Aulas práticas e teóricas',
                            'Acompanhamento individual',
                            'Material didático exclusivo'
                        ]}
                    />
                    <Card
                        image={'/images/person.png'}
                        title={'Perfeito para\nvocê que:'}
                        description={[
                            'Acesso a comunidade exclusiva',
                            'Suporte contínuo',
                            'Certificado de conclusão'
                        ]}
                    />
                    <Card
                        image={'/images/guitar.png'}
                        title={'O que você\nvai aprender'}
                        description={[
                            'Melhora na técnica de guitarra',
                            'Desenvolvimento musical',
                            'Aumento da criatividade'
                        ]}
                    />
                </div>

                <a
                    href="/"
                    className="bg-green-700 px-6 sm:px-10 py-3 text-white font-bold rounded-lg hover:bg-green-800 transition-colors text-base sm:text-2xl inline-block"
                >
                    QUERO DOMINAR O SLIDE!
                </a>
            </div>
        </>
    )
}
