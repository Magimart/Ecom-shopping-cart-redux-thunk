import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";  //____testing
 import { MDBDataTable } from 'mdbreact'
 import easyinvoice from 'easyinvoice'
 import 'mdbreact/dist/css/mdb.css';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { clearErrors } from '../../../redux/actions/orderActions'




const MyOrdersModel = () => {

    const dispatch = useDispatch()

     const { orders, error } = useSelector(state => state.currentUserOrders)

      console.log(orders )

    useEffect(() => {
        if (error) {
            toast.error(error); 
            dispatch(clearErrors());
         }

    }, [dispatch])


    const setMyOrders = () => {
        const data = {
            columns: [
                {   //______1st column
                    label: 'Order ID',
                    field: 'id',
                    sort: 'asc'
                },
                {   //______2nd column
                    label: 'Shipping Address',
                    field: 'address',
                    sort: 'asc'
                },
                {  //______3rd column...
                    label: 'Payment Method',
                    field: 'payment',
                    sort: 'asc'
                },
                {
                    label: 'Amount Paid',
                    field: 'amount',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                }

            ],
            rows: []
        }


            orders && orders.forEach(order => {

                  data.rows.push(
                               {
                                    id: <div className="invoiceId bg-yellow-50 h-max bg-opacity-40 mx-1 px-2">
                                            {order._id}
                                        </div>
                                    ,
                                    address: <span className="invoiceAddress  block bg-yellow-50 bg-opacity-70 px-2">
                                                <span className="flex px-1">Name:<span className="text-gray-400 px-1">
                                                                                {order.shippingAddress.name}</span>
                                                </span> 
                                                    <span className="flex px-1">Address:<span className="text-gray-400 px-1">
                                                                                {order.shippingAddress.address}
                                                    </span>
                                                </span>
                                                        <span className="">city:<span className="text-gray-400 px-1">
                                                                    {order.shippingAddress.city}                        
                                                        </span>                                                            
                                                     </span>
                                                <span className="">country:<span className="text-gray-400 px-1">
                                                             {order.shippingAddress.country}                        
                                                 </span>                                                 </span>

                                            </span>
                                    ,

                                    amount:<div className="invoiceId bg-white w-max px-2  bg-opacity-50 ">
                                                {`$${order.amountPaid}`}
                                            </div>
                                    ,

                                    actions:
                                        <>
                                            {/* dynamic route---------------------------- */}
                                            <Link href={`/orders/${order._id}`}> 
                                                <a className="btn-primary h-max p-2">
                                                    <i className="fa fa-eye">pp</i>
                                                </a>
                                            </Link>

                                            <button className="btn btn-success h-max w-max mx-1" onClick={() => downloadInvoice(order)}>
                                                dowload
                                            </button>
                                        </>
                                }
                   )
             })

        return data;
    }


    const downloadInvoice = async (orders) => {

        const data = {
            "documentTitle": "orders INVOICE", //Defaults to INVOICE
            "currency": "USD",
            "taxNotation": "vat", //or gst
            "marginTop": 25,
            "marginRight": 25,
            "marginLeft": 25,
            "marginBottom": 25,
            "logo": "https://res.cloudinary.com/bookit/image/upload/v1617904918/bookit/bookit_logo_cbgjzv.png",
            "sender": {
                "company": "Magima Art Store",
                "address": "frederich str 3",
                "zip": "10001",
                "city": "Berlin",
                "country": "Germany"
            },
            "client": {
                "company": `${orders.shippingAddress.name}`,
                "address": `${orders.shippingAddress.address}`,
                "zip": `${orders.shippingAddress.zip}`,
                "city": `${orders.shippingAddress.city}`,
                "country": `${orders.shippingAddress.country}`
            },
            "invoiceNumber": `${orders._id}`,
            "invoiceDate": ``,
            "products": orders.purchasedProduct.map((el) => {

                    return( {
                            "quantity": `${el.qty}`,
                            "description": `${el.title}`,
                            "tax": 0,
                            "price": el.price
                        })
                    
                 }),          

            "bottomNotice": "The best service garanteed."
        };

            await easyinvoice.createInvoice(data, function (result) {
                console.log(result.products)
                  easyinvoice.download(`invoice_${orders._id}.pdf`, result.pdf)
            })
  
    }



    return (
            <>
                    <motion.section
                        className="relative text-gray-700 body-font"
                    >
                    <div className=" flex items-center justify-center 
                                        relative 
                                        bg-gray-500 py- h-full
                                        sm:px-6 lg:px-8a
                                        "
                    >
                        <motion.div className="checkOutWrapper bg-black space-y-1a bg-white
                                        bg-opacity-10 
                                        px mx-4a my-8
                                        relative 
                            "
                            initial={{ 
                            height: "1%", 
                            opacity: 0, 
                            // x: 60, scale: -0.6 }} no sale on small screens
                            x: -1000,
                                scale: 0.6
                            }}
                        animate={{
                            height: "100%", 
                            width: "100%", 
                                opacity: 1,
                                // x: -447,small
                                x: 0,
                                // y:0,
                                scale: 0.9,
                                boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
                                transition: {
                                duration: 1,
                                    scale: 5, 
                                    // type: "tween", stiffness: -10 } gd
                                    type: "spring", stiffness: 10 }
            
                            }
                            }
                            exit={{ opacity: 0, scale: -0.5, transition: { duration: 0.6 } }}                 
                        >
                    {/* start model */}

                            <section>
                                <div className="grid grid-cols-3 gap-1  ">
                                    <div className="checkOutFormWrapper col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 xxl:col-span-2 
                                                            w-full bg-gray-60 bg-opacity-10 py-10                                         
                                                    "
                                    >
                                        {/* left_________ */}

                                        <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12 py-10 ">
                                                <div className="my-10">
                                                    <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                                                            Your Orders
                                                    </h2>
                                                </div>
                                                {/* .table-bordered */}
                                                    <div className="bg-white rounded  border-b border-grey hover:bg-grey-lighter">
                                                        <MDBDataTable
                                                            data={setMyOrders()}
                                                            className='  square border border-primary bg-black w-full h-max bg-opacity-10 px-4'
                                                            bordered
                                                            striped
                                                            hover
                                                        />
                                                    </div>
                                        </div>  
                                </div>

                                    {/* right________ */}
                                    <div className="summaryWrapper xxs:order-first xs:order-first sm:order-first  block col-span-3 
                                                    md:col-span-1 lg:col-span-1 xl:col-span-1 xxl:col-span-1 w-full
                                                    bg-yellow-400 bg-opacity-10 py-10 px-3
                                                ">
                                        <div className="col-span-1 bg-white lg:block hiddenvv">
                                            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">track your shipment</h1>
                                            <ul className="py-6 border-b space-y-6 px-8">
                                                list
                                            </ul>
                                            <div className="px-8 border-b">
                                                <div className="flex justify-between py-4 text-gray-600">
                                                    <span>Subtotal</span>
                                                    <span className="font-semibold text-pink-500">data</span>
                                                </div>
                                                <div className="flex justify-between py-4 text-gray-600">
                                                    <span>Shipping</span>
                                                    <span className="font-semibold text-pink-500">Free</span>
                                                </div>
                                            </div>                   
                                        </div> 
                                        <div className="paybtnWrpper py-10 flex justify-center  ">
                                            data 3
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* end model */}
                    </motion.div>
                    </div>
                </motion.section>
           </>
       );
  };
  



export default MyOrdersModel;
