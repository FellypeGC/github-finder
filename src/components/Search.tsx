import classes from './Search.module.css';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
}


const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUsername] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      loadUser(userName)
    }
  }

  return (
    <div className={classes.search}>
      <h2>Search for a user</h2>
      <p>Discover the best repositories!</p>
      <div className={classes.search_container}>
        <input 
          type="text" 
          placeholder="Digite o nome do usuário" 
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch size={20} />
        </button>
      </div>
    </div>
  )
}

export default Search