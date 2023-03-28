import React from 'react'
import Layout from "../common/Layout";
import './appreciation.css'
import Appreciation from '../components/Certificates/appreciation'
import certifications from '../data/appriciations'


// const showCertificates=(val)=>{
// return(
//     <Appreciation 
//     imgSrc={val.img}
//     title={val.link}
//     subTitle={val.ref}
//     />
// )
// }


const Error = () => {
    return (
        <Layout>
           {/* {certifications.map(showCertificates)} */}
        </Layout>


    )
}

export default Error;