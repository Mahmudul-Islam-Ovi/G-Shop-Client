import React from 'react';

const Partners = () => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            <img
                className="h-8 sm:h-10 mx-4"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
            />
            <img
                className="h-8 sm:h-10 mx-4"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
            />
            <img
                className="h-8 sm:h-10 mx-4"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
            />
            <img
                className="h-8 sm:h-10 mx-4"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
            />
        </div>
    );
};

export default Partners;