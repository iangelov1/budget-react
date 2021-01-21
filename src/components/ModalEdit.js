import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'

function ModalEdit({ isOpen, setIsOpen, addEntry, description, value, isExpense, setDescription, setValue, setExpense }) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm 
                    description={description} 
                    value={value} 
                    isExpense={isExpense}
                    setDescription={setDescription}
                    setValue={setValue}
                    setExpense={setExpense}
                />
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button primary onClick={() => setIsOpen(false)}> Ok </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit
