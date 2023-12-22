import React,{useState} from 'react'

function Card({cart,setCart,data}) {
    let[toggle,setToggle]=useState(true)
           return <>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/*--------- sale -------------*/}
                            {data.sale?(<><div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            </>):("")}
                            {/*-- image ---*/}
                            <img className="card-img-top" src={data.image} alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">{data.item}</h5>
                                {/* -------star symbols -------*/}
                                  {
                                   data.reviews?<><div className="d-flex justify-content-center small text-warning mb-2">
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>  
                                </div></>:("")}
                                {/* --------originalPrice --------*/}
                                   { data.originalPrice?(<><div>
                                   <span className={"text-muted text-decoration-line-through"}>{data.originalPrice}</span>
                                    {data.amount}
                                    </div></>):<>{data.amount}</>}
                                </div>
                            </div>
                            {/* ---------Add to cart -----------*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {
                                    toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(cart+1)
                                    setToggle(false)}}>
                                        Add to cart
                                        </button>:
                                        <button className="btn btn-outline-success mt-auto" onClick={()=>{setCart(cart-1)
                                        setToggle(true)}}>
                                       Remove to cart
                                        </button>
                                    }
                                    </div>
                            </div>
        </div>
      </div>
  
  
  
  </>
    
  
}

export default Card