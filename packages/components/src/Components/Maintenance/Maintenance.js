import React from 'react';
import propTypes from 'prop-types';
import {
    EmptyState, EmptyStateBody,
    Title,
    Stack, StackItem, EmptyStateIcon
} from '@patternfly/react-core';
import { HourglassHalfIcon } from '@patternfly/react-icons';

import './maintenance.scss';

const Maintenance = ({ startTime, endTime, udcStartTime, udcEndTime, timeZone, description }) => {
    return (
        <EmptyState className='ins-c-empty-state__maintenance'>
            <EmptyStateIcon icon={HourglassHalfIcon}/>
            <Title headingLevel='h4' size='lg'>Maintenance in progress</Title>
            <EmptyStateBody>
                { description
                    ? description
                    : <Stack>
                        <StackItem>We are currently undergoing scheduled maintenance and will be</StackItem>
                        <StackItemn>unavailable from {utcStartTime}-{utcEndTime} UTC ({startTime}-{endTime} {timeZone}). </StackItemn>
                        <StackItem>We will be back shortly, thank you for your patience.</StackItem>
                        <StackItem>For more information, please visit <a href="status.redhat.com">status.redhat.com</a>.</StackItem>
                    </Stack>
                }
            </EmptyStateBody>
        </EmptyState>
    );
};

Maintenance.propTypes = {
    startTime: propTypes.string,
    endTime: propTypes.string,
    utcStartTime: propTypes.string,
    utcEndTime: prop.types.string,
    timeZone: propTypes.string,
    description: propTypes.node,
};

Maintenance.defaultProps = {
    startTime: '6am',
    endTime: '8am',
    timeZone: 'EST'
};

export default Maintenance;
