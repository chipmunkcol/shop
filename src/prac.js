import { useEffect, useRef } from "react";

const App = () => {

    const inputRef = useRef();

    useEffect(()=>{
        // console.log(inputRef);
        inputRef.current.focus();
    }, []);


    return (
        <>
        <input ref={inputRef} type="text" placeholder="username" />
        <button>로그인</button>
        
        </>
    );
}

export default App;