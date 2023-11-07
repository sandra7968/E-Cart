import React, { useEffect, useState } from 'react'
import {  Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../redux/slices/cartSlice'


function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const getCartTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])
  return (
    <div className='container' style={{marginTop:'100px'}}>
      {
        cartArray.length>0?
        <div className='row mt-5'>
          <div className="col-lg-8">
            <table className="table shadow ">
              <thead className='border-black'>
                <tr>
                  <th className='text-success'>#</th>
                  <th className='text-success'>Product Name</th>
                  <th className='text-success'>Image</th>
                  <th className='text-success'>Price</th>
                  <th className='text-success'>Action</th>
                </tr>
              </thead>
              <tbody >
                {
                  cartArray.map((product,index)=>(
                    <tr key={index} className='mt-4 border-black'>
                      <td className='text-white'>{index+1}</td>
                      <td className='text-white'>{product.title}</td>
                      <td className='text-white'><img width={'100px'} height={'100px'} src= {product.thumbnail} alt="" /></td>
                      <td className='text-white'>$ {product.price}</td>
                      <td className='text-white'><button onClick={()=>dispatch(removeFromCart(product.id))} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
          <h1 style={{height:'50px'}} className="text-success fw-bolder ms-2">Cart Summary</h1>
          <div className="border-black bg-dark mt-2 p-3 rounded shadow">
          <h4 style={{height:'30px'}}>Total Products : <span> {cartArray.length} </span> </h4>
          <h4 style={{height:'30px'}}>Total : <span className='text-danger fw-bold'>${total}</span></h4>
          <div className="d-grid">
          <button className='btn btn-success w-100 mt-5 rounded'>Check Out</button>
          </div>
          </div>
          </div>
        </div>

          : <div className='text-center'>
            <img style={{width:'190px',height:'190px', borderRadius:'290px'}}  src= "https://assets-v2.lottiefiles.com/a/5e73658c-117c-11ee-b252-0feba9ce2d45/dTs9No2eNH.gif" alt="" />
            <h2 className='m-3' style={{height:'40px', color:'beige'}}>Your Cart is Empty!</h2>
            <Link to={'/'} className='btn btn-dark  '>Back to Home</Link>
          </div>
        }
      </div>

  )
}

export default Cart