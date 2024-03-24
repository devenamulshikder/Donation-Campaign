/* eslint-disable react/prop-types */


const Card = ({item}) => {
    console.log(item);
    
  return (
    <div className="card card-compact bg-base-100 shadow-xl ">
      <figure>
        <img src={item.image} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"></h2>
        <div className="card-actions mb-2">
          <button className=""></button>
        </div>
        <p>{item.title}</p>
      </div>
    </div>
  );
}

export default Card