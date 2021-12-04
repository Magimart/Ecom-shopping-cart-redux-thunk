import React from 'react';
import { getSession } from 'next-auth/client';
import ProfileModel from '../components/authComponents/UpdateProfile';

const UpdateProfilePage = () => {
    return (
        <>
            <ProfileModel/>
        </>
    )
}

export async function getServerSideProps(context) {

    const session = await getSession({ req: context.req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }

}

export default UpdateProfilePage;
