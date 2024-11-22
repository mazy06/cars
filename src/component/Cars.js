import Wrapper from "./Wrapper";

const Car = ({children, color}) => {


    return children ? (
        <Wrapper>
            <p>Marque : {children}</p>
            <p>Couleur : {color ? color : 'Néant'}</p>
        </Wrapper> 
    ) : <p className='cars'>Pas de data</p>
}
export default Car; 