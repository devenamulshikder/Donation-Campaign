/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";
import { saveToLocalStorage } from "../../utils/localStorage";

const DonationDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const { data, loading } = useDonationData();


  const handleDonate = ()=>{
    saveToLocalStorage()
  }

  useEffect(() => {
    const singleData = data.find((item) => item.id === +id);
    setSingleData(singleData)
  }, [data, id]);
  const {
    image,
    title,
    cardBg,
    category,
    categoryBg,
    textColor,
    description,
    price,
  } = singleData || {};
  return (
    <div className=" bg-base-100 shadow-xl max-w-7xl mx-auto mt-10 ">
      <figure className="relative">
        <img className="w-full lg:h-[550px]" src={image} alt="Shoes" />
        <div className="absolute bottom-0 bg-opacity-40 bg-black w-full h-28 pl-8">
          <button
            onClick={() => handleDonate()}
            style={{ backgroundColor: textColor }}
            className="mt-8 px-6 py-2 text-white font-semibold text-xl"
          >
            Donate ${price}
          </button>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl lg:text-3xl mb-4 font-bold">
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
