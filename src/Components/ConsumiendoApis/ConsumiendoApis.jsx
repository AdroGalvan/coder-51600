import { useEffect, useState } from "react"

const ConsumiendoApis = () => {

    const [ post , setPost ] = useState([])

    useEffect(() => {
        const getData = fetch("https://jsonplaceholder.typicode.com/posts")

        getData
        .then(res=> res.json())
        .then(res=> setPost(res))
        .catch(err=> console.log("catch: ", err))

    } , [] )


  return (
    <div>
        
    </div>
  )
}

export default ConsumiendoApis