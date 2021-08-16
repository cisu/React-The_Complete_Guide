import { useEffect, useState } from 'react'

//  = true meaning it is optional
const useCounter = (forwards = true) => {
 const [counter, setCounter] = useState(0);

 useEffect(() => {
     const interval = setInterval(() => {

        if(forwards) {
            setCounter((prevCounter) => prevCounter + 1);
        } else {
            setCounter((prevCounter) => prevCounter - 1);
        }

     }, 1000);

     return () => clearInterval(interval);
    //  forwards now it's a dependency
 }, [forwards]);

 return counter
}

export default useCounter
