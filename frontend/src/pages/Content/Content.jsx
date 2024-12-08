import React, { useEffect, useState } from 'react'
import Hightlight from '../../components/highlight/Hightlight'
import Category from '../../components/category/Category'
import Exp from '../../components/exp_user/Exp'
import Banner from '../../components/banner/Banner'
import SideBar from '../../components/sidebar/SideBar'
import axios from '../../axios'

export default function Content({getCart}) {

  const [data,setData]=useState()
  useEffect(()=>{
    const getData=async()=>{
      try {
        const res=await axios.get('/product/productByAllCategory')
        setData(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  },[])
  return (
    <div className="content">
      <div className='container'>
        <div className='row g-2 h-100'>
          <Banner/>
        </div>
        {/* product category */}
        <div className='w-100'>
          {data?.map((item, index) => (
            <Category key={index} item={item} getCart={getCart}/>
          ))}
        </div>
        {/* exp user */}
        <div className='w-100'>
          <Exp/>
        </div>
      </div>
    </div>
  )
}
