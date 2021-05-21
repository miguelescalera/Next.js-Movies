export default function Navbar() {
  return (
    <>
      <section>
        <div>
          <h3>Movies</h3>
          <input type="text " placeholder="Search your movie" name="movie" />
        </div>
      </section>
      <style jsx>{`
        section {
          display: flex;
          width: 100%;
          justify-content: center;
        }

        div {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: white;
          box-shadow: 0 3px 5px black;
          height: 50px;
          position: fixed;
          width: 50%;
        }
        input {
          height: 35px;
          width: 50%;
        }
      `}</style>
    </>
  )
}
