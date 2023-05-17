
export const BasicTypes = () => {

  const name: string = 'Alejandro'
  const age: number = 35
  const isActive: boolean = true
  
  const powers = ['Speed', 'Fly']

  return (
    <>
      <h3>BasicTypes</h3>
      { name }, { age }, { (isActive) ? 'active': 'inactive' }
      <br />
      { powers.join(', ')}
    </>
  )
}
