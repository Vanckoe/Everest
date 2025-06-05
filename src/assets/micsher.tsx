import React from 'react';

type MicsherProps = {
    color?: string;
    width?: string;
    height?: string;
};

const Micsher: React.FC<MicsherProps> = ({ color = '#31A301', width = '33', height = '24' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 33 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect y="8.10547" width="1.05056" height="14.9329" rx="0.525279" fill={color}/>
            <rect opacity="0.9" x="3.90234" y="12.3828" width="1.05056" height="10.6557" rx="0.525279" fill={color}/>
            <rect opacity="0.8" x="7.80469" y="17.332" width="1.05056" height="5.70303" rx="0.525279" fill={color}/>
            <rect opacity="0.7" x="11.7061" y="9.67969" width="1.05056" height="13.3571" rx="0.525279" fill={color}/>
            <rect opacity="0.6" x="15.6083" width="1.05056" height="23.0372" rx="0.525279" fill={color}/>
            <rect opacity="0.5" x="19.5098" y="4.05078" width="1.05056" height="18.9851" rx="0.525279" fill={color}/>
            <rect opacity="0.4" x="23.4121" y="1.35156" width="1.05056" height="21.6865" rx="0.525279" fill={color}/>
            <rect opacity="0.3" x="27.3145" y="9.67969" width="1.05056" height="13.3571" rx="0.525279" fill={color}/>
            <rect opacity="0.2" x="31.2168" y="15.5352" width="1.05056" height="7.50399" rx="0.525279" fill={color}/>
        </svg>
    );
};

export default Micsher;
