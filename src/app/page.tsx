import Image from 'next/image'
import VideoPlayer from '@/components/VideoPlayer'
import Card from '@/components/Card'

export default function Home() {
    return (
        <>
            {/* Seção principal com imagem de fundo */}
            <div className="flex flex-col min-h-screen p-4 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat">
                <div className="container mx-auto flex flex-col items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Logo da Delta Blues Brasil"
                        width={200}
                        height={200}
                        className="pt-8"
                    />

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-6 sm:p-8 md:p-14 lg:p-20 w-full max-w-screen-xl">
                        {/* Texto */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h1 className="text-orange-400 font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 max-w-md mx-auto lg:mx-0 text-balance">
                                Treinamento Slide Guitar
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
                                className="bg-green-700 px-6 sm:px-10 py-3 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors text-base sm:text-lg inline-block"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 w-full max-w-screen-xl">
                    <Card />
                    <Card />
                    <Card />
                </div>

                <a
                    href="/"
                    className="bg-green-700 px-8 sm:px-10 md:px-12 py-3 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors text-base sm:text-lg"
                >
                    QUERO DOMINAR O SLIDE!
                </a>

                <Image
                    src="/images/slideguitar.png"
                    alt="Logo da Delta Blues Brasil"
                    width={200}
                    height={200}
                    className="absolute right-1 h-190 w-auto"
                />
            </div>
        </>
    )
}
