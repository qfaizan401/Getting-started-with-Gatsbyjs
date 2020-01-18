import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
const AboutPage = () => {
    return(
        <Layout>
            <h1>About Us</h1>
            <p>This page will show our services</p>
            <p>Contact Us!!! <Link to = "/contact">Click ME</Link></p>
        </Layout>

    )
}

export default AboutPage