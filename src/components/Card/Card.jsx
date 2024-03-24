/* eslint-disable react/prop-types */


const Card = ({item}) => {
    const {image, id, title, cardBg, category, categoryBg, textColor, description, price} = item

  return (
    <div style={{backgroundColor:cardBg}} className="card card-compact bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"></h2>
        <div className="card-actions mb-2">
          <button style={{backgroundColor:categoryBg, color:textColor}} className="btn border-none text-lg font-bold">{category}</button>
        </div>
        <p style={{color:textColor}} className="text-xl font-bold">{title}</p>
      </div>
    </div>
  );
}

export default Card