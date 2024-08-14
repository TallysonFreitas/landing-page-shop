import { colors } from './colors'
import { Atributes, Banner, Header, Main } from './ui/Home'

export default function Home() {
    return (
        <main>
            <div style={{ backgroundColor: colors.begeLight }}>
                <Header />
                <Main />
                <Banner />
            </div>
            <div className="bg-black overflow-hidden">
                <div className="container mx-auto relative">
                    <Atributes />
                    <CircleStyle variant={1} />
                    <CircleStyle variant={2} />
                </div>
            </div>
        </main>
    )
}

function CircleStyle({ variant }: { variant: number }) {
    return variant == 1 ? (
        <div
            className="border absolute top-20 left-0 transform"
            style={{
                width: '570px',
                height: '300px',
                borderColor: colors.begeLight,
                borderRadius: '50%',
                rotate: '-135deg',
                borderWidth: '1px',
            }}
        ></div>
    ) : (
        <div
            className="border absolute bottom-20 right-0 transform"
            style={{
                width: '570px',
                height: '300px',
                borderColor: colors.begeLight,
                borderRadius: '50%',
                rotate: '-45deg',
                borderWidth: '1px',
            }}
        ></div>
    )
}
