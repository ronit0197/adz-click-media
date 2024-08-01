import React from 'react'
import { Button } from 'react-bootstrap'

const AnimatedButton = ({ children }) => {
    return (
        <Button className="animated-button">
            {children}
        </Button>
    )
}

export default AnimatedButton