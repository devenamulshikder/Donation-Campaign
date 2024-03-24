/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({item}) => {
    const {image, id, title, cardBg, category, categoryBg, textColor, description, price} = item

  return (
    <Link to={`/donation-details/${id}`}>
      <div
        style={{ backgroundColor: cardBg }}
        className="card card-compact bg-base-100 shadow-xl "
      >
        <figure>
          <img src={image} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"></h2>
          <div className="card-actions mb-2">
            <button
              style={{ backgroundColor: categoryBg, color: textColor }}
              className="btn border-none text-lg font-bold"
            >
              {category}
            </button>
          </div>
          <p style={{ color: textColor }} className="text-xl font-bold">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card