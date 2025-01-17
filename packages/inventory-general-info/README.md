# RedHat Cloud Services frontend components - inventory general info
[![npm version](https://badge.fury.io/js/%40redhat-cloud-services%2Ffrontend-components-inventory-general-info.svg)](https://badge.fury.io/js/%40redhat-cloud-services%2Ffrontend-components-inventory-general-info)

This package exports components to show system info page and reducers with actions to fetch and store data.

## !!!This package is deprecated!!!

Do not use this package anymore, if you want to use general information detail you can use federated modules provided by inventory team

```JSX
import React from 'react';
import { useStore } from 'react-redux';
import AsyncComponent from '@redhat-cloud-services/frontend-components/AsyncComponent';

const GeneralInfo = () => {
    const store = useStore();
    return <AsyncComponent
        appName="inventory"
        module="./SystemDetail"
        store={store}
    />;
};

export default GeneralInfo;
```
## Installation
With NPM
```bash
npm i -S @redhat-cloud-services/frontend-components-inventory-general-info
```

With yarn
```bash
yarn add @redhat-cloud-services/frontend-components-inventory-general-info
```

This package is dependent on [@redhat-cloud-services/frontend-components-utilities](https://www.npmjs.com/package/@redhat-cloud-services/frontend-components-utilities), [@redhat-cloud-services/frontend-components](https://www.npmjs.com/package/@redhat-cloud-services/frontend-components) and [@redhat-cloud-services/host-inventory-client](https://www.npmjs.com/package/@redhat-cloud-services/host-inventory-client) will automatically install them trough direct dependencies.
