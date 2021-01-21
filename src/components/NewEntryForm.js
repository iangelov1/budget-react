import React from 'react';

import { Form } from 'semantic-ui-react';

import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm ({ addEntry, description, value, isExpense, setDescription, setValue, setExpense }) {
    return (
        <Form unstackable>
           <EntryForm 
                description={description} 
                value={value} 
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setExpense={setExpense}
            />

            <ButtonSaveOrCancel addEntry={addEntry} />
        </Form>
    )
}

export default NewEntryForm;
