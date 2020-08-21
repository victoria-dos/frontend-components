import React, {useState, useEffect} from 'react';
import {Button} from '@patternfly/react-core';
import {Stack, StackItem} from '@patternfly/react-core';
import Error from '../../components/src/Components/Error/';

function ErrorTest() {
    const [testFlag, setTestFlag] = useState(false);

    const handleErrorComponentTest = () => {
        
    }

    const renderComponent = () => {

    }

    return (
        <Stack>
            <StackItem>
                <h1>Test Run of Error</h1>
            </StackItem>
            <StackItem>
                <Button onClick={() => handleErrorComponentTest()}>Test my Error</Button>
            </StackItem>
        </Stack>
    )
}

export default ErrorTest;
