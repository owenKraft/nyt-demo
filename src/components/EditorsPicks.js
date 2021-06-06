import React from 'react'
import Pick from './Pick'
import Summer from '../resources/images/summer.jpeg'
import BBQ from '../resources/images/bbq.jpeg'
import Tulsa from '../resources/images/tulsa.jpeg'


const EditorsPicks = (props) => {
    const headerText = "Editors' Picks"

    return (
        <div className="editors-picks">
            <header>
                {headerText}
            </header>

            <Pick
                src = {Summer}
                title = "Summertime … and the Sloganeering Is a Little Awkward"
            />

            <Pick
                src = {BBQ}
                title = "Barbecues, Birthdays and Tangos: New York Parks Are Bustling Again"
            />

            <Pick
                src = {Tulsa}
                title = "A Skillful Narrative of Excavating the Truth About the Tulsa Race Massacre"
            />
        </div>
    )
}

export default EditorsPicks