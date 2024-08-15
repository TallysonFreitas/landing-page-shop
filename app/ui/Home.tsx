import Image from 'next/image'
import { colors } from '../colors'
import { Instrument_Serif } from 'next/font/google'

const instrument_serif = Instrument_Serif({ subsets: ['latin'], weight: '400' })

export function Header() {
    return (
        <div className="max-w-1200 container-lg mx-auto pt-24 md:px-24 z-10">
            <header className="w-full flex justify-between items-center flex-col md:flex-row gap-5 md:gap-0">
                <a
                    href="#"
                    className="text-md"
                    style={{ color: colors.vineNormal }}
                >
                    Home
                </a>
                <a
                    href="#"
                    className="text-md border-solid border rounded-full px-5 py-2 order-first md:order-none"
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
            className="max-w-1200 container-lg mx-auto mb-10 cursor-default"
            style={{ zIndex: '-10' }}
        >
            <h1
                className={` ${instrument_serif.className} w-full text-center leading-none overflow-hidden text-9xl md:text-10xl lg:text-12xl`}
                style={{ color: colors.vineNormal }}
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
        <div className="container mx-auto overflow-hidden flex items-center max-h-96 md:max-h-540 rounded-nor md:rounded-big">
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
        <div className="container mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-24 max-w-1200">
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

function ReviewItem() {
    return (
        <div
            className="w-full flex flex-col justify-center items-center"
            style={{ height: '280px' }}
        >
            <Image
                className="w-20 h-20 filter grayscale mb-5"
                width={80}
                height={80}
                src={'/rebeca.jpg'}
                alt="fake"
                style={{ borderRadius: '50%' }}
            />
            <h3
                className={`${instrument_serif.className} uppercase mb-3 text-xl`}
                style={{ color: colors.begeLight }}
            >
                Rebecca
            </h3>
            <p className="text-white text-center lg:text-left">
                CEO & Perfume Connoisseur
            </p>
        </div>
    )
}

export function Reviews() {
    return (
        <div className="container mx-auto flex flex-col md:grid md:grid-cols-3 md:gap-5 max-w-1200">
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
        </div>
    )
}

export function Section() {
    return (
        <div className="container mx-auto md:p-24 mt-10 max-w-1200">
            <h2
                className={`${instrument_serif.className} text-4xl md:text-5xl mb-10`}
                style={{ color: colors.begeLight }}
            >
                Why Choose Scent Spectacular?
            </h2>
            <div className="w-100 flex flex-col md:grid md:grid-cols-2 text-white gap-10 text-xl">
                <p>
                    We do not simply sell perfumes! We deliver an experience. We
                    believe that every scent tells a story, a story of love, a
                    story of dreams and a story of pure fascination.
                </p>
                <p>
                    Perfumery is an art, and we are the picasso of it! Let your
                    scent do the talking. Embrace the captivating fragrances and
                    let them express your mood, your personality.
                </p>
            </div>
        </div>
    )
}

function Button({ type }: { type: 1 | 2 }) {
    return type == 1 ? (
        <a
            href="#"
            className="py-3 px-4 rounded-lg w-full md:w-auto text-center"
            style={{
                backgroundColor: colors.begeLight,
                color: colors.vineDark,
            }}
        >
            Discover
        </a>
    ) : (
        <a
            href="#"
            className="py-3 px-4 bg-black text-white rounded-lg w-full md:w-auto text-center"
        >
            Collections
        </a>
    )
}

export function CallToAction() {
    return (
        <section className="container mx-auto py-24 flex flex-col justify-center items-center">
            <h2
                className={`${instrument_serif.className} text-5xl text-center mb-5`}
                style={{ color: colors.begeLight }}
            >
                Shop Now
            </h2>
            <p
                className="text-center md:w-2/5 mb-5"
                style={{ color: colors.begeLight }}
            >
                Lost in the world of fragrances? Don&apos;t worry, we&apos;ve
                got you covered. Dive in, explore, and shop the spectacular
                scents. Let&apos;s start a perfume revolution together!
            </p>
            <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                <Button type={1} />
                <Button type={2} />
            </div>
        </section>
    )
}

export function Footer() {
    return (
        <footer className="container mx-auto p-0 lg:p-24">
            <div className="w-100 flex flex-col gap-10 md:gap-0 md:grid md:grid-cols-3 pb-24">
                <ul className="flex flex-col gap-3">
                    <li>
                        <a className="text-white" href="#">
                            Support
                        </a>
                    </li>
                    <li>
                        <a className="text-white" href="#">
                            Help
                        </a>
                    </li>
                    <li>
                        <a className="text-white" href="#">
                            Returns
                        </a>
                    </li>
                    <li>
                        <a className="text-white" href="#">
                            Order Status
                        </a>
                    </li>
                </ul>
                <ul className="flex flex-col gap-3">
                    <li>
                        <a className="text-white" href="#">
                            Company
                        </a>
                    </li>
                    <li>
                        <a className="text-white" href="#">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="text-white" href="#">
                            Newstroon
                        </a>
                    </li>
                    <li>
                        <a className="text-white" href="#">
                            Careers
                        </a>
                    </li>
                </ul>
                <ul className="flex flex-col gap-3">
                    <li>
                        <a className="text-white" href="#">
                            Legal
                        </a>
                    </li>
                    <li>
                        <a className="text-white" href="#">
                            Privacy
                        </a>
                    </li>
                    <li>
                        <a className="text-white" href="#">
                            Terms
                        </a>
                    </li>
                    <li>
                        <a className="text-white" href="#">
                            Imprint
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between">
                <p className="text-white">© 2024 Scent Spectacular</p>
                <p className="text-white">I, T</p>
            </div>
        </footer>
    )
}
