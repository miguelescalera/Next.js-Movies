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
        }
      `}</style>
    </>
  )
}
export async function getStaticProps() {
  const res = await fetch("http://www.omdbapi.com/?apikey=968c2650&s=batman")
  const data = await res.json()

  return {
    props: { data: data.Search },
  }
}
