import { breakpoint } from "../Theme/index"
import { useState } from "react"
import { getStaticProps } from "../../pages/index"

export default function Navbar() {
  const [value, setValue] = useState("")

  // funcion para escuchar cambios en el input
  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
    console.log("CHANGE", value)
  }

  // funcion para mandar parametro de busqueda a getStaticPros
  // y hacer un nuevo pedido con el valor dado
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("NOMBRE", value)
    // getStaticProps(value)
  }

  return (
    <>
      <section>
        <div>
          <h3>Movies</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text "
              placeholder="Search your movie"
              name="movie"
              onChange={handleChange}
            />
          </form>
        </div>
      </section>
      <style jsx>{`
        section {
          display: flex;
          width: 100%;
          justify-content: center;
        }

        div {
          border-radius: 10px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: white;
          box-shadow: 0 3px 5px black;
          height: 50px;
          position: fixed;
        }

        @media (min-width: ${breakpoint.mobile}) {
          div {
            width: ${breakpoint.mobile};
          }
        }

        input {
          border: none;
          border-bottom: 1px solid gray;
          height: 35px;
          width: auto;
        }
      `}</style>
    </>
  )
}
