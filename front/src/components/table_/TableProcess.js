import Zoom from 'react-reveal/Zoom';


export default function TableProcess(){
    return(
        // siempre debo solo de retornar un elemento "HTML" entre comillas porque esto  jsx 
<>
  <Zoom>
  <table className="tabla_design col-10 col-xl-10 offset-1">
    <thead style={{background:"white"}}>
      <tr>
        <th>PID</th>
        <th>Name</th>
        <th>Father PID</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody style={{background:"white" , fontFamily:"sans-serif"}}>
      <tr>
        <td>1</td>
        {Array.from({ length: 3 }).map((_, index) => (
          <td key={index}>Table cell {index}</td>
        ))}
      </tr>
      <tr>
        <td>2</td>
        {Array.from({ length: 3 }).map((_, index) => (
          <td key={index}>Table cell {index}</td>
        ))}
      </tr>
      <tr>
        <td>3</td>
        {Array.from({ length: 3 }).map((_, index) => (
          <td key={index}>Table cell {index}</td>
        ))}
      </tr>
    </tbody>
  </table>
  </Zoom>
</>
    )
}