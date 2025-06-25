import React from 'react'
import Task1 from './Task1'
import Map1 from './Map1'
import Map2 from './Map2'
import Map3 from './Map3'
import List from './List'
import Filter from './Filter'
import P1 from './Props/P1'
import Onclick from './Events_handling/Onclick'
import Onchange from './Events_handling/Onchange'
import Ondoubleclick from './Events_handling/Ondoubleclick'
import Onsubmit from './Events_handling/Onsubmit'
import Main from './Routing/Main'

const MyApp = () => {
return (
    <>
    {/* ----------Task-1----------------------- */}
        <Task1/>
    {/* ----------Task-2----------------------- */}
        <Map1/>
    {/* ----------Task-3----------------------- */}
        <Map2/>
    {/* ----------Task-4----------------------- */}
        <Map3/>
    {/* ----------Task-5----------------------- */}
        <List/>
    {/* ----------Task-6----------------------- */}
        <Filter/>
    {/* ----------Task-7----------------------- */}
        <P1/>
    {/* ----------Task-8----------------------- */}
        <Onclick/>
    {/* ----------Task-9----------------------- */}
        <Onchange/>
    {/* ----------Task-10----------------------- */}
        <Ondoubleclick/>
    {/* ----------Task-11----------------------- */}
        <Onsubmit/>
    {/* ----------Task-12----------------------- */}
        <Main/>
    </>
)
}

export default MyApp
