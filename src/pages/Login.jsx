export default function Login(){
    const  loginWithGoogle = () =>{
        window.location.href = "http://localhost:8080/auth/google";
    }
    return (
        <div style={{textAlign:"center", marginTop:"100px"}}>
            <h2>OAuth Testing Service</h2>
            <button onClick={loginWithGoogle}>Login with Google
            </button>
        </div>
    );
}