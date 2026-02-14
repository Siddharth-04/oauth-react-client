import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OAuthRedirect(){
    const navigate = useNavigate();
    useEffect(()=>{
        const token = new URLSearchParams(window.location.search).get("token");
        if(token){
            localStorage.setItem("token",token);
        }
        else{
            navigate("/");
        }
    },[])
    return (
        <div style={{textAlign:"center", marginTop:"100px"}}>
            <h2>Processing OAuth Redirect...</h2>
            <p>Please wait while we log you in.</p>
        </div>
    );
}