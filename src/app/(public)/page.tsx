// import {About} from './about/page'

function Homepage() {
  let n1: number = 20
  let n2: number = 20
  let style = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 40px 20px 40px'

  }
  return (
    <>
      <div style={style}>
        <p><strong>Num 1:</strong> {n1}</p>
        <p><strong>Num 2:</strong> {n2}</p>
        <p><strong>Result:</strong> {n1 + n2}</p>
      </div>
    </>
  )
}

export default Homepage