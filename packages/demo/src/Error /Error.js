import React, {useState, useEffect} from 'react'
import {Stack, StackItem} from '@patternfly/react-core';
import {ExclamationCircleIcon} from '@patternfly/react-icons/';
import propTypes from 'prop-types';
import './Error.styles.scss';

import {
    Title,
    Button,
    EmptyState,
    EmptyStateVariant,
    EmptyStateIcon,
    EmptyStateBody,
    EmptyStateSecondaryActions
  } from '@patternfly/react-core';



const Error = ({errorTitle, errorDescription}) => { 
    const [webPosition, setWebPosition] = useState(true);

    const handleReturn = () => {
        if(webPosition){
            console.log('Going back to previous page now!! Flag: ', webPosition);
            
        }
    }
    
    const renderButtonLabel = () => {
        return('Go back!');
    };

    return (
        <EmptyState variant={EmptyStateVariant.large}>
            <EmptyStateIcon icon={ExclamationCircleIcon} />
            <Title headingLevel='h4' size='lg'>
                {errorTitle}
            </Title>
            <EmptyStateBody>
                <Stack>
                    <StackItem>
                        There was a problem accessing the request. Please try again. 
                    </StackItem>
                    <StackItem>
                        If the problem persists, contact <a href="https://access.redhat.com/support?extIdCarryOver=true&sc_cid=701f2000001Css0AAC">Red Hat Supprt</a> or check out our <a href="status.redhat.com"> status page</a> for known outages.
                    </StackItem>
                    <StackItem>
                        <Button>{renderButtonLabel}</Button>
                    </StackItem>
                </Stack>
            </EmptyStateBody>

        </EmptyState>
    )
}


Error.propTypes = {
    errorTitle: PropTypes.string,
    errorDescription: PropTypes.string
}

Error.defaultProps = {
    errorTitle: "Error",
    errorDescription: "There was a problem accessing the request. Please try again."
}

export default Error;
