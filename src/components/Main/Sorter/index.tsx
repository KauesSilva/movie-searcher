import React, { useState } from "react";
import {
    SorterLabel,
    SorterOption,
    SorterSelect,
    SorterWrapper,
} from "./Sorter.style";

interface SorterProps {
    onSortChange: (orderBy: string) => void;
}

function Sorter({ onSortChange }: SorterProps): React.ReactElement {
    const [orderBy, setOrderBy] = useState("default");

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setOrderBy(selectedValue);
        onSortChange(selectedValue);
    };

    return (
        <SorterWrapper>
            <SorterLabel htmlFor="sort">Sort By:</SorterLabel>
            <SorterSelect
                name="sorter"
                value={orderBy}
                onChange={handleSortChange}
            >
                <SorterOption value="default" defaultChecked></SorterOption>
                <SorterOption value="new">Newest</SorterOption>
                <SorterOption value="old">Oldest</SorterOption>
                <SorterOption value="asc">A-Z</SorterOption>
                <SorterOption value="desc">Z-A</SorterOption>
            </SorterSelect>
        </SorterWrapper>
    );
}

export default Sorter;
