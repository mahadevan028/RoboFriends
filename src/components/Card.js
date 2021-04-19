import React from 'react';


const Card = ({id , name, email}) => {
// const {id , name, email} = props;    
return(
    <div className="tc bg-light-blue fl w-20 br3 grow b--none ma4 shadow-5 dib">
        <img alt="robot" src={`https://robohash.org/${id}?50*50&set=set5`}/>
    <div>
        <h3>{name}</h3>
        <p>{email}</p>
    </div>
    </div>

)
}

export default Card;
