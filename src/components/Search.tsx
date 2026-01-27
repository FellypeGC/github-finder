import { BsSearch } from 'react-icons/bs';

type Props = {}

const Search = (props: Props) => {
  return (
    <div>
      <h2>Busque por um usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input type="text" placeholder="Digite o nome do usuário" />
        <button>
          <BsSearch size={20} />
        </button>
      </div>
    </div>
  )
}

export default Search