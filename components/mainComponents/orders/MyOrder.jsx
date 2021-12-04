import React, { useEffect } from 'react'
import Link from 'next/link'

 import { MDBDataTable } from 'mdbreact'
 import easyinvoice from 'easyinvoice'

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
                    label: 'Booking ID',
                    field: 'id',
                    sort: 'asc'
                },
                {   //______2nd column
                    label: 'Check In',
                    field: 'checkIn',
                    sort: 'asc'
                },
                {  //______3rd column...
                    label: 'Check Out',
                    field: 'checkOut',
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


        

        orders && orders.forEach(booking => {
            data.rows.push({
                id: booking._id,
                amount: `$${booking.amountPaid}`,
                actions:
                    <>
                        {/* <Link href={`/orders/${booking._id}`}>
                            <a className="btn btn-primary">
                                <i className="fa fa-eye"></i>
                            </a>
                        </Link> */}

                        {/* <button className="btn btn-success mx-2" onClick={() => downloadInvoice(booking)}> */}
                        <button className="btn btn-success mx-2">
                             dowload
                            <i className="fa fa-download"></i>
                        </button>

                    </>
            })
        })

        return data;
    }


    // const downloadInvoice = async (orders) => {

    //     const data = {
    //         "documentTitle": "Booking INVOICE", //Defaults to INVOICE
    //         "currency": "USD",
    //         "taxNotation": "vat", //or gst
    //         "marginTop": 25,
    //         "marginRight": 25,
    //         "marginLeft": 25,
    //         "marginBottom": 25,
    //         "logo": "https://res.cloudinary.com/bookit/image/upload/v1617904918/bookit/bookit_logo_cbgjzv.png",
    //         "sender": {
    //             "company": "Book IT",
    //             "address": "13th Street. 47 W 13th St",
    //             "zip": "10001",
    //             "city": "New York",
    //             "country": "United States"
    //         },
    //         "client": {
    //             "company": `${booking.user.name}`,
    //             "address": `${booking.user.email}`,
    //             "zip": "",
    //             "city": `Check In: ${new Date(booking.checkInDate).toLocaleString('en-US')}`,
    //             "country": `Check In: ${new Date(booking.checkOutDate).toLocaleString('en-US')}`
    //         },
    //         "invoiceNumber": `${booking._id}`,
    //         "invoiceDate": `${new Date(Date.now()).toLocaleString('en-US')}`,
    //         "products": [
    //             {
    //                 "quantity": `${booking.daysOfStay}`,
    //                 "description": `${booking.room.name}`,
    //                 "tax": 0,
    //                 "price": booking.room.pricePerNight
    //             }
    //         ],
    //         "bottomNotice": "This is auto generated Invoice of your booking on Book IT."
    //     };

    //     const result = await easyinvoice.createInvoice(data);
    //     easyinvoice.download(`invoice_${booking._id}.pdf`, result.pdf)
    // }


    return (
        <div className='container container-fluid'>
            <h1 className='my-5'>My Bookings</h1>
            <MDBDataTable
                data={setMyOrders()}
                className='px-3'
                bordered
                striped
                hover
            />

        </div>
    )
}

export default MyOrdersModel;
