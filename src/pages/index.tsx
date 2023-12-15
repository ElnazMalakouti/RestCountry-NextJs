import CountryCard from "@/components/CountryCard/CountryCard"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {

  const [searchValue, setSearchValue] = useState<string>('')

  const [countriesList, setCountriesList] = useState<any>([])

  const [searchedCountriesList, setSearchedCountriesList] = useState<any>([])

  const searchFunction = (name: string) => {
    const temp: any = countriesList.filter((item: any) => item.name.common.includes(name))
    console.log(name, temp)
    if (temp) {
      setSearchedCountriesList(temp)
    }
  }

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(function (response) {
        setCountriesList(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <>
      <div className="w-full py-4 flex flex-col gap-4 justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <input
            className="h-8 px-2"
            value={searchValue}
            onChange={(e: any) => setSearchValue(e.target.value)}
          />
          <button className="w-20 h-8 border border-black" onClick={() => {
            searchFunction(searchValue)
          }}>Search</button>
          <button className={`${searchedCountriesList.length !== 0 ? 'block' : 'hidden'} w-32 h-8 border border-black`} onClick={() => {
            setSearchedCountriesList([])
            setSearchValue('')
          }}>remove search</button>
        </div>
        <div className="w-full justify-center items-center grid grid-cols-3">
          {
            searchedCountriesList.length !== 0
              ?
              searchedCountriesList.map((item: any) => {
                return <CountryCard
                  img={item.flags.png}
                  title={item.name.common}
                  cca2={item.cca2}
                />
              })
              :
              countriesList.map((item: any) => {
                return <CountryCard
                  img={item.flags.png}
                  title={item.name.common}
                  cca2={item.cca2}
                />
              })
          }
        </div>
      </div>
    </>
  )
}
