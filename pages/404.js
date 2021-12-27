import React from 'react';
import { UnCoverFromLeft } from '../components/animationComponents/UnCoverFromLeft';
import MetaTags from '../components/layoutComponents/MetaTags';
import NotFoundModel from '../components/layoutComponents/PageNotFound';

export default function NotFoundPage({onFirstMount}) {
    return (
        <>
            <MetaTags title={"Page Not Found"}/>

            {onFirstMount &&  <UnCoverFromLeft />} 
            <section id="contactWrapper" 
                    className="grid grid-flow-col w-100vw h-full                                    
                            relative   bg-green-70a                                                      
                        "
                >
                    <NotFoundModel/>
            </section>
        </>

    )
}

