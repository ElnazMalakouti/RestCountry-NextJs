import { useRouter } from "next/router"
import axios from "axios"
import { useEffect, useState } from "react"

const data = () => {

    const router = useRouter()

    let countryName = router.query.country

    const [countryData, setCountryData] = useState<any>([])

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(function (response) {
                setCountryData(response.data.find((item: any) => item.name.common === countryName))
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <>
            <div className="w-full p-6 flex flex flex-col gap-4 justify-start items-start">
                <img src={countryData && countryData?.flags?.png}/>
                <p className="text-3xl">{countryData && countryData?.name?.common}</p>
            </div>
        </>
    )
}

export default data