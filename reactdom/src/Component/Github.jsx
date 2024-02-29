import React, { useEffect, useState } from 'react';

const Github = () => {
    const [data, setdata] = useState(0);
    useEffect(() => {
        fetch('https://api.github.com/users/Ghanashyamaryal')
        .then(response=>response.json())
        .then(data=>
        setdata(data))
        
    }, []);
    return (
        <div>
            <h1 className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Follower :- {data.followers}</h1>
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    );
}

export default Github;
