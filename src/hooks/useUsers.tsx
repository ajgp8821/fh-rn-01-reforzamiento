import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResList, User } from "../interfaces/reqRes"

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])

  const pageRef = useRef(1)

  useEffect(() => {
    // Call API
    loadUsers()
  }, [])

  const loadUsers = async() => {
    
    const res = await reqResApi.get<ReqResList>('/users', {
      params: {
        page: pageRef.current
      }
    })

    if (res.data.data.length > 0){
      setUsers( res.data.data )
    }
    else {
      pageRef.current --
      alert('There are no more records.')
    }
      // .then(res => {
      //   // console.log( res.data.data )
      //   setUsers( res.data.data )
      // })
      // .catch( console.log )
  }

  const nextPage = () => {
    pageRef.current ++
    loadUsers()
  }

  const prevPage = () => {
    if (pageRef.current > 1) {
      pageRef.current --
      loadUsers()
    }
  }

  return {
    users,
    nextPage,
    prevPage,
  }
}
