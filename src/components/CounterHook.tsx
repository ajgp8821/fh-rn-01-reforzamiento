import { useCounter } from "../hooks/useCounter"

export const CounterHook = () => {

  const { value, accumulate } = useCounter(100)

  return (
    <>
      <h3>Counter Hook: <small>{ value }</small></h3>
      <button
        className="btn btn-primary"
        onClick={ () => accumulate(1)}
        >
        +1
      </button>
      &nbsp;
      <button
        className="btn btn-primary"
        onClick={ () => accumulate(-1)}
      >
        -1
      </button>
    </>
  )
}
