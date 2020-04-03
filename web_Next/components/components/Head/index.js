import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const Head = ({
    title = 'Next.js app',
    description = 'Web site created using Next.js',
}) => {

    return (
        <NextHead>
            <meta charSet="UTF-8"/>
            <title>{title}</title>
            <meta
                name="description"
                content={description}
            />

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" href="/logo192.png"/>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="manifest" href="/manifest.json" />

            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i&amp;subset=latin-ext"
            />
            <link
                rel="stylesheet"
                href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
            />

        </NextHead>
    )
}

Head.propTypes = {
    title: string,
    description: string,
}

export default Head
