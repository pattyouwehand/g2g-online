import React from 'react';

function withPostLoading(Component) {
    
    return function WithLoadingComponent({isLoading, ...props}) {
        if(!isLoading) return <Component {...props} />
        return(
            <p>Loading...</p>
        );
    };
};

export default withPostLoading;