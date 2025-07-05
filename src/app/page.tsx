import Image from 'next/image'
import VideoPlayer from '@/components/VideoPlayer'
import Card from '@/components/Card'

export default function Home() {
    return (
        <>
            <div className="flex flex-col h-full p-4 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat">
                <Image
                    src="/images/logo.png"
                    alt="Logo da Delta Blues Brasil"
                    width={200}
                    height={200}
                    className="mx-auto pt-8"
                />
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 p-4 sm:p-8 md:p-14 lg:p-18 w-full">
                    <div className="w-full max-w-md text-center lg:text-left">
                        <h1 className="text-orange-400 font-semibold text-4xl sm:text-5xl md:text-6xl max-w-[300px] mb-8 mx-auto lg:mx-0">
                            Treinamento Slide Guitar
                        </h1>
                        <h3 className="text-3xl sm:text-4xl mb-8">
                            Lorem ipsum{' '}
                            <span className="text-blue-300 font-semibold">
                                dolor sit amet
                            </span>
                            , consectetur adipiscing elit.
                        </h3>
                        <p className="text-base sm:text-lg md:text-2xl mb-10">
                            Vestibulum pretium sed libero id iaculis. Sed lacus
                            sapien, scelerisque ut euismod vel, fermentum id
                            magna. Sed ultrices lorem in commodo scelerisque.
                        </p>
                        <a
                            href="/"
                            className="bg-green-700 px-8 sm:px-10 md:px-12 py-3 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors font-bold text-base sm:text-lg"
                        >
                            QUERO DOMINAR O SLIDE!
                        </a>
                    </div>
                    <div className="w-full max-w-xl flex justify-center mt-4">
                        <VideoPlayer />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#ECECEC] text-white py-10">
                <div className="flex items-center justify-center text-center max-w-3xl px-4">
                    <Card />
                    <Card />
                    <Card />
                </div>

                <a
                    href="/"
                    className="bg-green-700 px-8 sm:px-10 md:px-12 py-3 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors font-bold text-base sm:text-lg"
                >
                    QUERO DOMINAR O SLIDE!
                </a>
            </div>
        </>
    )
}
