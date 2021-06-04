import React from 'react'
import Image from '../resources/images/diagram.png'

const DiagramCTA = (props) => {
    const header = "The Theory of Inflation"
    const description = "Astronomers have found evidence to support the theory of inflation, which explains how the universe expanded so uniformly and so quickly in the instant after the Big Bang 13.8 billion years ago."
    const attribution = "By LARRY BUCHANAN and JONATHAN CORUM"

    return (
        <div className="full-width">
            <div className="diagram-cta">
                <header>
                    {header}
                </header>

                <span>
                    {description}
                </span>

                <div className="diagram-cta-image-wrapper">
                    <img src={Image} className="diagram-cta-image"></img>
                    <div className="diagram-cta-image-row">
                        <p>
                            <strong>THE UNIVERSE</strong>
                            &nbsp;
                            is just under 14 billion years old. From our position in the Milky Way galaxy, we can observe a sphere that is now about 92 billion light-years across. But there's a mystery. Wherever we look, the universe has an even temperature.
                        </p>
                        <p>
                            <strong>NOT ENOUGH TIME</strong>
                            &nbsp;
                            The universe is not old enough for light to have traveled the vast distance from one side of the universe to the other, and there has not been enough time for scattered patches of hot and cold to mix into an even temperature.
                        </p>
                        <p>
                            <strong>Distant Coffee</strong>
                            &nbsp;
                            At a smaller scale, imagine using a telescope to look a mile in one direction. You see a coffee cup, and from the amount of steam, you can estimate its temperature and how much it has cooled.                        
                        </p>
                        <p>
                            <strong>COFFEE EVERYWHERE</strong>
                            &nbsp;
                            Now turn around and look a mile in the other direction. You see a similar coffee cup, at exactly the same temperature. Coincidence? Maybe. But if you see a similar cup in every direction, you might want to look for another explanation.
                        </p>
                    </div>
                    <div className="diagram-cta-image-row">
                        <p>
                            <strong>STILL NOT ENOUGH TIME</strong>
                            &nbsp;
                            There has not been enough time to carry coffee cups from place to place before they get cold. But if all the coffee cups were somehow filled from a single coffee pot, all at the same time, that might explain their even temperature.
                        </p>
                        <p>
                            <strong>INFLATION</strong>
                            &nbsp;
                            solves this problem. The theory proposes that, less than a trillionth of a second after the Big Bang, the universe expanded faster than the speed of light. Tiny ripples in the violently expanding energy field eventually grew into the large-scale structures of the universe.
                        </p>
                        <p>
                            <strong>FLUCTUATION</strong>
                            &nbsp;
                            Astronomers have now detected evidence of these ancient fluctuations in swirls of polarized light in the cosmic background radiation, which is energy left over from the early universe. These are gravitational waves predicted by Einstein.
                        </p>
                        <p>
                            <strong>EXPANSION</strong>
                            &nbsp;
                            Returning to our coffee, imagine a single, central pot expanding faster than light and cooling to an even temperature as it expands. That is something like inflation. And the structure of the universe mirrors the froth and foam of the original pot.
                        </p>
                    </div>
                </div>

                <footer>
                    <div className="border-div"></div>

                    {attribution}
                </footer>
            </div>
        </div>
    )
}

export default DiagramCTA