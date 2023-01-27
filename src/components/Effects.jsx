import React from 'react'

export default function Effects() {
    const[count, setCount] = useState(0);

useEffect(() => {
  console.log("rodar")
}, [])
// esse [] fica verificando o que  foi incluido la so roda se tiver com ele




  return (
    <div>
        <div>
            <button onClick={()=> setCount(prevCount) = prevCount + 1}></button>
        </div>
    </div>
  )
}
