import React from 'react'

function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}

const Gallery = () => {
    return (
        <>

            <section>
                <h1>Científicos increíbles</h1>
                <Profile />
                <Profile />
                <Profile />
            </section>

        </>
    )
}

export default Gallery
