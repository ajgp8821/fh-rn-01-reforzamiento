interface Person {
  name: string
  lastName: string
  age: number
  address: Address
}

interface Address {
  country: string
  houseNum: number
}

export const LiteralObjects = () => {

  const person: Person = {
    name: 'Alejandro',
    lastName: 'Gil',
    age: 34,
    address: {
      country: 'Argentina',
      houseNum: 10
    }
  }

  return (
    <>
      <h3>Literal objects</h3>
      <code>
        <pre>
          { JSON.stringify(person, null, 2) }
        </pre>
      </code>
    </>
  )
}
