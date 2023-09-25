import React, { useState } from 'react';

function useFilters() {
    const [search, setSearch] = useState("");
    const [greaterThan, setGreaterThan] = useState(0);
    const [lessThan, setLessThan] = useState(20);

    return {
        render: (
            <div className="child">
                <p>Filters</p>
                <input type="search" placeholder='Search'
                    onChange={(e) => setSearch(e.target.value)} />
                <input type="number" placeholder='Greater Than' defaultValue={greaterThan}
                    onChange={(e) => setGreaterThan(e.target.value)} />
                <input type="number" placeholder='Less Than' defaultValue={lessThan}
                    onChange={(e) => setLessThan(e.target.value)} />
            </div>
        ), search, greaterThan, lessThan
    };
}


function DisplayContext({ search, greaterThan, lessThan }) {
    return (
        <div>
            <p>DisplayContext</p>
            <p>search: {search}</p>
            <p>greaterThan: {greaterThan}</p>
            <p>lessThan: {lessThan}</p>
        </div>
    )
}

export default function Parent() {

    const {render, search, greaterThan, lessThan} = useFilters();

    return (
        <div className="parent">
            <p>Parent</p>

            <DisplayContext {...{search, greaterThan, lessThan}}></DisplayContext>

            {render}
        </div>
    )
}