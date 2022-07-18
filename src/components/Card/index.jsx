import './style.css'

export function Card(props) {

    return (
        <div className='container-components'>

            <strong>{props.name}</strong> {/*Pegando de forma dinamica dos atributos*/}
            <small>{props.time}</small>
        </div>

    )

}


{/*

Utilizando de outra forma

export function Card({name,time}) {

    return (
        <div className='container-components'>

            <strong>{name}</strong>
            <small>{time</small>
        </div>

    )

*/}
