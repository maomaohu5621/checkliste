import React from 'react';
import FilterableTable from './FilterableTableHighLevel';
import Header from '../Header';
import dataHighLevel from './dataHighLevel.json';

const HighLevel = () => {

    return (
        <div>
            <Header />
            <h1>High Level</h1>
            <FilterableTable data={dataHighLevel} />
        </div>
    );
};

export default HighLevel;
