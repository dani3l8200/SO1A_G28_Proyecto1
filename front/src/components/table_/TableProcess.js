import Table from 'react-bootstrap/Table';
import Zoom from 'react-reveal/Zoom';


export default function TableProcess(){
    return(
        // siempre debo solo de retornar un elemento "HTML" entre comillas porque esto  jsx 
        <Zoom>
<Table responsive variant="dark">
  <thead >
    <tr>
      <th>#</th>
      {
      Array.from({ length: 5 }).map((_, index) => (
        <th key={index}>Table heading</th>
      ))
      }
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 5 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>2</td>
      {Array.from({ length: 5 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 5 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  </tbody>
  <h1 className="my-4">

  </h1>
</Table>
        </Zoom>
    )
}