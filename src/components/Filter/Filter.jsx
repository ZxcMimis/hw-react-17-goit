import { useEffect, useState } from "react";
import './Filter.scss'

export const Filter = ({ filteredContact }) => {
    const [filter, setFilter] = useState('')

    useEffect(() => {
        filteredContact(filter);
    }, [filter])

    return <>
        <h3 className="find-contacts-title">find contacts by name</h3>
        <div className="input-wrapper">
            <input
                type="text"
                className="styled-input"
                placeholder=" "
                onChange={(e) => { setFilter(e.target.value) }}
            />
            <label className="input-label">find contacts by name</label>
        </div>

    </>
}