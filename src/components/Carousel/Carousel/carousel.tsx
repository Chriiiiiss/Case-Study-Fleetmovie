import React, { ReactComponentElement, ReactNode, useRef } from "react";
import './carousel.css'

interface CarouselProps {
    children: ReactNode
}

export default function FleetCarousel(props: CarouselProps) : JSX.Element {
    return (
        <div className="fleetCarousel">
            {props.children}
        </div>
    )
}