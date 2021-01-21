import React from 'react'
import { Fragment } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';

export default function EntryForm({ 
    description, 
    value, 
    isExpense, 
    setDescription, 
    setValue, 
    setExpense 
}) {
    return (
        <Fragment>
             <Form.Group>
                <Form.Input 
                    icons="tags"
                    width={12}
                    label="Description"
                    placeholder="New shinny thing" 
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <Form.Input
                    width={4}
                    label="Value"
                    placeholder="100.00"
                    icon="dollar"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                >
                    
                </Form.Input> 
            </Form.Group>

            <Segment compact>
                <Checkbox 
                    toggle 
                    label="is expense" 
                    checked={isExpense} 
                    onChange={() => setExpense((oldState) => !oldState)}
                />
            </Segment>
        </Fragment>
    )
}
