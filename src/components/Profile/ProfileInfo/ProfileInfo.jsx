import React from 'react';


const ProfileInfo = () => {
    return (
   	<div>
        <div>
            <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        </div>
        <div>
            <img src='data:image/jpeg;base64,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' />
        </div>
    </div>
)
}

export default ProfileInfo;