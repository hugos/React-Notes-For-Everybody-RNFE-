import { memo } from 'react'
const Todos = ({todos}) => {
    console.log("Child Render");
    return (
        /* React Fragment. Wrapper without adding extra element to the DOM
        Pretty much a <div> replacement.
        */
        <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>
        })}
        </>
    )
}

export default memo(Todos);