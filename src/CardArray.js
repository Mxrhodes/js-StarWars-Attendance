import FrontCard from './FrontCard.js';
import BackCard from './BackCard.js';

const CardArray = ({characters, films}) => {


    return (
        <>
            {
                characters.map((user, i) => {
                    return (
                        <>
                            <FrontCard
                                key={"f" + i}
                                name={user.name}
                            />
                            <BackCard
                                key={"b" + i}
                                name={user.name}
                                height={user.height}
                                mass={user.mass}
                                skin_color={user.skin_color}
                                gender={user.gender}
                                films={user.films}
                                all_films={films}
                                
                            />

                        </>
                    )
                } )

            }

        </>
    )
}

export default CardArray;