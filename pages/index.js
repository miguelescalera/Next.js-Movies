import Head from "next/head"
import Navbar from "../components/Navbar"

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <section>
        <Navbar />
        {data.map((movie, I) => (
          <div key={I}>
            <img src={movie.Poster}></img>
            <h2>{movie.Title}</h2>
          </div>
        ))}
      </section>
      <style jsx>{`
        div {
          display: grid;
          height: 100%;
          place-items: center;
          padding-top: 65px;
        }
      `}</style>
    </>
  )
}
export async function getStaticProps(valor) {
  console.log("GETSTATIC", valor)
  // trate de poder generar codigo para hacerlo con promesas
  // pero en la ultima instacia de devolver el archivo me falla

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=968c2650&s=${
      valor.length ? valor : "batman"
    }`
  )
  const data = await res.json()

  return {
    props: { data: data.Search },
  }
}
