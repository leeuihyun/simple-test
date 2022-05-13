import { useState, useCallback } from "react";

export default (initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    const onChangeValue = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    return [value, onChangeValue, setValue];
};
