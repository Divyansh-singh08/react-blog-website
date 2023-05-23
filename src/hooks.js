//create a custom hooks

import { useState } from "react";

export function useFormInput(initialValue){ 
    const [value,setValue] = useState(initialValue);

    function handleChange(event){
        setValue(event.target.value);
    }

    return {
        value:value,
        onChange:handleChange
    }

}