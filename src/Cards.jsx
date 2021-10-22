import react from 'react';

const Card = (props) => {
    return (
        <>
            <div className="container">
                <div className="cards">
                    <div className="card">
                        <img src={props.imgsrc} alt={props.alt} className="card__img" />
                        <div className="card__info">
                            <span className="card__category">{props.title}</span>
                            <h3 className="card__title">{props.sname}</h3>
                            <a href={props.Link} target="_blank">
                                <button>Watch Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;