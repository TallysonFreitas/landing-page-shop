import Image from 'next/image'
import { colors } from '../colors'
import { Instrument_Serif } from 'next/font/google'

const instrument_serif = Instrument_Serif({ subsets: ['latin'], weight: '400' })

export function Header() {
    return (
        <div
            className="container-lg mx-auto pt-24 px-24 z-10"
            style={{ maxWidth: '1200px' }}
        >
            <header className="w-full flex justify-between items-center">
                <a
                    href="#"
                    className="text-md"
                    style={{ color: colors.vineNormal }}
                >
                    Home
                </a>
                <a
                    href="#"
                    className="text-md border-solid border rounded-full px-5 py-2"
                    style={{
                        color: colors.vineNormal,
                        borderColor: colors.vineNormal,
                    }}
                >
                    Welcome to Scent Spectacular
                </a>
                <a
                    href="#"
                    className="text-md"
                    style={{ color: colors.vineNormal }}
                >
                    Contact
                </a>
            </header>
        </div>
    )
}

export function Main() {
    return (
        <div
            className="container-lg mx-auto mb-10 cursor-default"
            style={{ maxWidth: '1200px', zIndex: '-10' }}
        >
            <h1
                className={` ${instrument_serif.className} w-full text-center leading-none overflow-hidden`}
                style={{ color: colors.vineNormal, fontSize: '32rem' }}
            >
                SHOP
            </h1>
            <p
                className={`text-center text-xl w-9/12 mx-auto`}
                style={{ color: colors.vineNormal }}
            >
                Join us for an unforgettable journey that tickles your senses.
                Indulge yourself, let&apos;s submerge in this olfactory odyssey.
            </p>
        </div>
    )
}

export function Banner() {
    return (
        <div
            className="container mx-auto overflow-hidden flex items-center"
            style={{
                maxHeight: '540px',
                borderRadius: '12em 12em 0 0',
            }}
        >
            <div className="container mx-auto flex flex-col gap-4 justify-center items-center transform -rotate-12 grayscale">
                <div
                    className="grid grid-cols-3 gap-4 items-end"
                    style={{ width: '120%' }}
                >
                    <Image
                        alt="image"
                        src={'/image1.png'}
                        width={100}
                        height={100}
                        className="w-full col-span-2 rounded-lg"
                    />
                    <Image
                        alt="image"
                        src={'/image4.png'}
                        width={100}
                        height={100}
                        className="w-full rounded-lg"
                    />
                </div>
                <div
                    className="grid grid-cols-3 gap-4 items-start"
                    style={{ width: '120%' }}
                >
                    <Image
                        alt="image"
                        src={'/image3.png'}
                        width={100}
                        height={100}
                        className="w-full rounded-lg"
                    />
                    <Image
                        alt="image"
                        src={'/image2.png'}
                        width={100}
                        height={100}
                        className="w-full col-span-2 rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}

type AtributeType = {
    title: string
    paragraph: string
    image: string
    size: number
}

function AtributeItem({ title, paragraph, image, size }: AtributeType) {
    return (
        <div
            className={`w-full text-white col-span-${size} p-10 rounded-3xl`}
            style={{ backgroundColor: colors.card, height: '400px', zIndex: 2 }}
        >
            <h3
                className={`${instrument_serif.className} text-4xl mb-1`}
                style={{ color: colors.begeLight }}
            >
                {title}
            </h3>
            <p className="mb-10" style={{ color: colors.begeLight }}>
                {paragraph}
            </p>
            <div
                className="flex justify-center items-center overflow-hidden rounded-lg"
                style={{ height: '65%' }}
            >
                <Image
                    className="w-full filter grayscale "
                    style={{ minHeight: '100%' }}
                    width={300}
                    height={200}
                    alt={title}
                    src={image}
                />
            </div>
        </div>
    )
}

const ItemsAtributes: AtributeType[] = [
    {
        image: '/image1-item.jpg',
        paragraph: 'Hand-picked fragrances from all around the world',
        size: 2,
        title: 'Exclusive',
    },
    {
        image: '/image2-item.jpg',
        paragraph: 'Experience the original brand quality',
        size: 1,
        title: 'Authentic',
    },
    {
        image: '/image3-item.jpg',
        paragraph: 'Impactful aura that lasts',
        size: 1,
        title: 'Enchanting',
    },
    {
        image: '/image4-item.jpg',
        paragraph: 'Spectacular scents for everyone',
        size: 2,
        title: 'Unisex',
    },
]

export function Atributes() {
    return (
        <div
            className="container mx-auto grid grid-cols-3 gap-6 py-24"
            style={{ maxWidth: '1200px' }}
        >
            {ItemsAtributes.map((each) => (
                <AtributeItem
                    image={each.image}
                    paragraph={each.paragraph}
                    size={each.size}
                    title={each.title}
                    key={each.title}
                />
            ))}
        </div>
    )
}
