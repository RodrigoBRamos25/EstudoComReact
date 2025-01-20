import React from 'react'

const JsxExamples = () => {
    const userName = "Rodrigo";
    const userIsLoggedIn = true;
    const userRole = "Admin";

    const users = [
        {id:1, name: "Rodrigo"},
        {id:2, name: "Marina"},
        {id:3, name: "Pedro"},
        {id:4, name: "João Ribeiro"},
      
    ];

  return (
    <div>
      <h1>
        Teste de utilização de JSX, meu nome é: {userName}
      </h1>
      {userIsLoggedIn ? (<p>Caso: Está logado !</p>) : (<p>Caso: NÃO está logado</p>)} 
            <p>
                {userRole === "Admin" && "Você é um Admin"}
            </p>
      <div>
        <ul>
            {users.map((user)=> (
                <li key={user.id}>
                    {user.id} - {user.name}
                </li>

            ))}
        </ul>
      </div>
    </div>
  )
}

export default JsxExamples
