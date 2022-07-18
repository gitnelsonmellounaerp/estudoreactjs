import { useState, useEffect } from 'react' //importa o useState para mudar conteudo do front de forma dinamica

import './styles.css' // importando css exclusivo para essa pagina
import { Card } from '../../components/Card' //importando components


function Home() {
  const [studentName, setStudentName] = useState() // studentName = pra usar valor do estado - setStudentName = funcao que atualiza o valor do estado
  const [students, setStudents] = useState([]) // armazena o estado em um array vazio
  const [user, setUser] = useState({name: '', avatar: ''}) // consumindo informacoes de uma API

  //Funcao que cria um novo objeto student

  function handleAddStudent () {
    const newStudent = {
      name: studentName, /*Pega o valor armazenado no estado do input */
      time: new Date().toLocaleTimeString("pt-br", { /* coloca no formato PTBR e edita como quer que a hora apareca*/
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'

      })
    }

    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {
    //corpo useEffect - e executado assim que a a aplicacao e renderizada
    //consumindo api

    fetch('https://api.github.com/users/nellysbr')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name, 
        avatar: data.avatar_url


      })
    })


  }, []) //o array diz quais sao os estados que o useEffect depende - vazio == executado apenas uma unica vez, quando eh renderizada

  //no caso do exemplo, o useeffect eh chamado sempre que o estado de students muda
  

  return (
    <div className='container'>
      <header>
        <h1>Lista de presenca</h1>
        <div>
          <strong>{user.name}</strong> 
          <img src={user.avatar} alt="Foto github" />
        </div>
        
      </header>

      <h1>Nome: {studentName}</h1> {/*Usa o valor do estado */}

      <input type = "text" placeholder = "Digite o nome completo...." onChange = { e => setStudentName(e.target.value)}/>
      <button type="button" onClick={handleAddStudent}> Adicionar</button>
    
      
      {
        students.map(student => (<Card key = {student.time} name={student.name} time={student.time}/>))
        
      }


    </div>
  )
}

export default Home
