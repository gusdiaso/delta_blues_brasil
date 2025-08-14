import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

interface CardProps {
    image: string
    title: string
    description: string[]
}

export default function MetodologiaEDiferencial({
    image,
    title,
    description
}: CardProps) {
    return (
        <section className="py-12 px-4 w-full">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 sm:px-8">
                {/* Ícone */}
                <div className="text-orange-400 mb-4">
                    <Image
                        width={65}
                        height={65}
                        src={image}
                        alt="Ícone metodologia diferencial"
                    />
                </div>

                {/* Título */}
                <h2
                    className="text-sky-600 font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-6"
                    style={{ whiteSpace: 'pre-line' }}
                >
                    {title}
                </h2>

                {/* Lista */}
                <div className="bg-white rounded-xl p-6 sm:p-8 w-full shadow-md">
                    <ul className="text-left space-y-4">
                        {description.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-3">
                                <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className="text-green-600 mt-1 text-lg"
                                />
                                <span className="text-gray-800 text-base sm:text-lg">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
