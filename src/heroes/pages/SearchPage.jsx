import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard'

import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onResetForm, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    //if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`)

  }

  return (
    <>

      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Resultados</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text" placeholder='Buscar un heroe' className='form-control' name='searchText' autoComplete='off' value={searchText} onChange={onInputChange} />
            <button className='btn btn-outline-primary mt-1'>Buscar</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {
            /*
            (q === '')
            ? <div className='alert alert-primary'>Buscar un heroe</div>
            : ( heroes.length === 0 ) && <div className='alert alert-danger'>No hay resultados con la busqueda: <b> {q} </b></div>
            */
          }

          <div className='alert alert-primary' style={{ display: showSearch ? '' : 'none' }}>
            Buscar un heroe
          </div>

          <div className='alert alert-danger' style={{ display: showError ? '' : 'none' }}>No hay resultados con la busqueda: <b> {q} </b></div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>

      </div>

    </>
  )
}
