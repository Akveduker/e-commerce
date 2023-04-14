import { useState } from 'react';
import AddressContainerWithButton from '../AddressContainerWithButton/AddressContainerWithButton';
import AddressBuilder from '../AddressBuilder/AddressBuilder';

const AddressContainerWithBuilder = () => {
    const [isBuilder, setIsBuilder] = useState(false)
    if (isBuilder) return <AddressBuilder setIsBuilder={setIsBuilder} />
    return (
        <AddressContainerWithButton setIsBuilder={setIsBuilder} />
    );
};

export default AddressContainerWithBuilder;