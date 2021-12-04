import React from 'react'
import { getSession } from 'next-auth/client'

import { currentUserOrders } from '../../redux/actions/orderActions'
import { wrapper } from '../../redux/store'
// import { useDispatch } from 'react-redux'
import MyOrdersModel from '../../components/mainComponents/orders/MyOrder'

const MyBookingsPage = () => {
    return (
             <MyOrdersModel />
    )
}


export const getServerSideProps = wrapper.getServerSideProps(async ({req,  store }) => {

    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
     //await store.dispatch(currentUserOrders(req))
     await store.dispatch(currentUserOrders(req.headers.cookie, req))

})





export default MyBookingsPage;







// export const getServerSideProps = wrapper.getServerSideProps(async ({ req, store }) => {
//     const session = await getSession({ req })

//     if (!session) {
//         return {
//             redirect: {
//                 destination: '/login',
//                 permanent: false
//             }
//         }
//     }

//      await store.dispatch(currentUserOrders(req.headers.cookie, req))

// })
