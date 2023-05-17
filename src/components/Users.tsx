import { User } from "../interfaces/reqRes"
import { useUsers } from "../hooks/useUsers"

export const Users = () => {

  const { users, nextPage, prevPage } = useUsers();
  
  const renderItem = ( user: User ) => {
    
    const { id, email, first_name, last_name, avatar } = user

    return (
      <tr key={ id.toString() }>
        <td>
          <img 
            src={ avatar }
            alt={ first_name }
            style={{
              width: 35,
              borderRadius: 100
            }}
            />
        </td>
        <td>{ first_name } { last_name }</td>
        <td>{ email }</td>
      </tr>
    )
  }

  return (
    <>
      <div>Users:</div>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( user => renderItem(user) )
          }
        </tbody>
      </table>
      <button
        className="btn btn-primary"
        onClick={ prevPage }
      >
        Previous
      </button>
      &nbsp;
      <button
        className="btn btn-primary"
        onClick={ nextPage }
      >
        Next
      </button>
    </>
  )
}
