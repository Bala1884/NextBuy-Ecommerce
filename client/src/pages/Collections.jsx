import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collections = () => {

  const {products,search,showSearch}=useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false);
  const [filteredProducts, setFilteredProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState('relevant');

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value]);
    }
  }

  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value]);
    }
  }

  const applyFilter=()=>{
    let productsCopy=products.slice();

    if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category))
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }
    setFilteredProducts(productsCopy);

  }

  const sortProducts=()=>{
    let fpCopy=filteredProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilteredProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
        setFilteredProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[search,showSearch,category,subCategory,products])

  useEffect(()=>{
    sortProducts();
  },[sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS 
          <img className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        </p>
      {/* CATEGORY */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col  gap-2 text-sm font-light  test-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onClick={toggleCategory} />Men
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onClick={toggleCategory}/>Women
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onClick={toggleCategory}/>Kids
            </p>
          </div>
        </div>
      {/* SUBCATEGORY */}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col  gap-2 text-sm font-light  test-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onClick={toggleSubCategory}/>Topwear
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onClick={toggleSubCategory}/>Bottomwear
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onClick={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='flex-1'>

        <div className='flex justify-between tetx-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filteredProducts.map((item,index)=>(
              <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collections