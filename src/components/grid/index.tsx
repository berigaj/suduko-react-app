import React, {Children, FC} from 'react'

import Block from './block'
import {Container, Row} from './styles'

const Grid: FC = () => {
    
    // Other stuff on the way

    return (
        <Container data-cy="grid-container">
            {Children.toArray([...Array(9)].map((_, rowindex) => (
                <Row data-cy="grid-row-container">
                    {Children.toArray([...Array(9)].map((_, colIndex) => (
                        <Block />
                    )))}
                </Row>
            )))}
        </Container>
    )
}

export default Grid