import React from 'react'
import { Button } from 'semantic-ui-react';

function ButtonSaveOrCancel({ addEntry}) {
    return (
        <Button.Group stye={{marginTop: 20}}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary onClick={() => addEntry()}>Ok</Button>
        </Button.Group>
    )
}

export default ButtonSaveOrCancel