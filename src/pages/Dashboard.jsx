export default function Dashboard(){
    const token = localStorage.getItem("token");
    return (
        <div style={{textAlign:"center", marginTop:"100px"}}>
            <h2>Welcome to the Dashboard!</h2>
            <p>{token ? "Authenticated" : "Not Authenticated !"}</p>
        </div>
    );
}