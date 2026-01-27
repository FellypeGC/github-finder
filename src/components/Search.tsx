import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
}


const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUsername] = useState<string>("");

  return (
    <div>
      <h2>Busque por um usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input type="text" placeholder="Digite o nome do usuário" onChange={(e) => setUsername(e.target.value)} />
        <button onClick={() => loadUser(userName)}>
          <BsSearch size={20} />
        </button>
      </div>
    </div>
  )
}

export default Search