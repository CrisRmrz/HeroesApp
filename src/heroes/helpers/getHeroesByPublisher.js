import { heroes } from '../data/Heroes';

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics','Marvel Comics'];

    if( !validPublishers.includes( publisher ) ){
        throw new Error(`${ publisher } no es valido, escoja entre DC Comics o Marvel Comics`)
    }

    return heroes.filter( heroe => heroe.publisher === publisher );

}