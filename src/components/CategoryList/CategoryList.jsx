/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import useDonationData from '../../Hooks/useDonationData'
import Card from '../Card/Card';

const CategoryList = () => {
    const {data, loading} = useDonationData();
    // console.log(data);
  return (
    <div className='grid lg:grid-cols-4 lg:gap-10 gap-5 mt-16 max-w-7xl mx-auto p-4 lg:p-0'>
        
        {
            data.map(item=> <Card item={item}></Card>)
        }
    </div>
  )
}

export default CategoryList