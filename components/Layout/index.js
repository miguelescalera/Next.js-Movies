import { breakpoint } from "../Theme/index"

export default function Layout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <style jsx>{`
        div {
          display: grid;
          height: 100vh;
          place-items: center;
        }
        main {
          background: #fff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          width: 100%;
          height: 100%;
          overflow: scroll;
        }

        @media (min-width: ${breakpoint.mobile}) {
          main {
            height: 98vh;
            border-radius: 10px;
            width: ${breakpoint.mobile};
          }
        }
      `}</style>
    </>
  )
}
