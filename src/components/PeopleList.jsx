import './style.css';
const PeopleList = ({id, img: {url, width, height}, name, year}) =>{
    return(
        <li key={id} className='user'>
            <div>
                <img src={url} alt={name + ' photo'} width={width} height={height} />
            </div>
            <div>
                <h2>{name}</h2>
                <p>{year} years</p>
            </div>
        </li>
    )
}

export default PeopleList;