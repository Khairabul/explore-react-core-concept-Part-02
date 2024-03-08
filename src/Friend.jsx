export default function Friend({friend}){
    return(    
    //    <div style={{border:'2px solid yellow',borderRadius: '15px'}}>
       <div className="box">
        <h4>id : {friend.id} </h4>
        <h4>Name : {friend.name}</h4>
        <h4>Username : {friend.username} </h4>
        <p>Email : {friend.email} </p>
       </div> 
    )
}