import Link from "next/link"

const CountryCard = ({ img, title, cca2 }: any) => {
    return (
        <>
            <Link href={`/countryData/${title}`}>
                <div className="w-80 mx-auto px-[16px] py-[8px] bg-white border border-black rounded-[8px]">
                    <div className="flex items-center gap-[12px]">
                        <div className="w-[64px] h-[64px] rounded-[12px]">
                            <img src={img} className="w-full h-full rounded-[12px]" />
                        </div>

                        <div className="w-[calc(100%-64px)] h-full flex flex-col gap-[8px] justify-between">
                            <p>{title}</p>
                            <p>{cca2}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CountryCard