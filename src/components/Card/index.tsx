import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function MetodologiaEDiferencial() {
    const lista = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Vestibulum pretium sed libero id iaculis',
        'Sed lacus sapien, scelerisque ut euismod vel cupidat.',
        'Sed ultrices lorem in commodo scelerisque.',
        'Cras ac suscipit nibh.',
        'Cras sed metus porttitor, fringilla magna vitae.'
    ]

    return (
        <section className="bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center">
                    <div className="text-orange-400 mb-4">
                        <Image
                            width={65}
                            height={65}
                            src={'/images/earning.png'}
                            alt="Logo de metodologia referencial"
                        />
                    </div>
                    <h2 className="text-xl font-bold text-sky-600 mb-6">
                        Metodologia
                        <br />e diferencial
                    </h2>
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow">
                        <ul className="space-y-4 text-left text-sm text-gray-700">
                            {lista.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-2"
                                >
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        className="text-green-500 w-5 h-5 mt-1"
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
