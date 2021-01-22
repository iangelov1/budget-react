import React, { useState } from 'react';

import { Form } from 'semantic-ui-react';

import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';


import useEntryDetails from '../hooks/useEntryDetails';


function NewEntryForm () {
    const {
        description, setDescription, value, setValue, isExpense, setExpense, addEntry
    } = useEntryDetails();


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
