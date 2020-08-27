import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import ErrorTest from './errorTest';
import Error from './Error/Error';
import './index.scss';
import {
    Table,
    TableHeader,
    TableBody,
    textCenter
} from '@patternfly/react-table';


class MyCmp extends Component {
    // render() {
    //     const { cells, rows } = this.state;
    //     return (
    //         <Table
    //             className="pf-m-expandable pf-c-treeview"
    //             rowWrapper={TreeRowWrapper}
    //             aria-label="Simple Table"
    //             cells={cells}
    //             rows={sizeCalculator(rows)}
    //         >
    //             <TableHeader />
    //             <TableBody />
    //         </Table>
    //     );

        
    // }

    render() {
        
         return(
            <>
                <Error />
            </>
        );
    }
}

ReactDOM.render(<MyCmp />, document.querySelector('.demo-app'));
