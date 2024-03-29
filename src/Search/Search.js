
import { SearchNormal1 } from 'iconsax-react';
import './Search.css';

function Search(props) {

    

  return (
    <div className="header__search">
        <button type="submit" className="header__search--img"><SearchNormal1 size="32" color="#424f46" /></button>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Busca tu personaje aquí"
          minLength="4"

        />
    </div>
  );
}

export { Search };
