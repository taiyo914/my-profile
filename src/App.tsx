import React, {useState, useEffect} from 'react';

function App() {
  const [myname, setMyname] = useState("");
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setMyname("Taiyo Suzuki");
  }, [])

  return (
    <div>
       <header style={{ backgroundColor: '#4d88ff', color: 'white', textAlign: 'center', fontSize:"25px",padding:"1px" ,fontWeight:"bold"}}>
        <h1>My Profile {count}</h1>
      <button onClick={()=>setCount(prev=>prev+1)}>+</button>
      </header>
      <main style={{ padding: '20px'}}>
      <h1 style={{fontSize:"25px", fontWeight:"bold"}}>Welcome to My Profile!</h1>
        <div style={{fontSize:"20px",padding:"10px"}}>
          <p style={{fontSize:"20px"}}>
          Hello! My name is {myname} </p>
          <p>I'm currently diving deep into the world of programming.</p>
          <p>I've always been fascinated by technology and how it shapes our lives, </p>
          <p>so I decided to start learning how to code.</p>
          <p> Right now, I'm focusing on languages like JavaScript and Python, as they are both powerful and versatile.</p>
          <br/>
          <p>I’m still in the early stages of my programming journey, </p>
          <p>but I’m passionate about learning and improving every day. </p>
          <p>Whether it's building small web applications, experimenting with algorithms, or just solving coding challenges,</p>
          <p>I find immense joy in the process of creating something from scratch.</p>
          <br/>
          <p>Programming has opened up a new way of thinking for me. </p>
          <p>It’s like solving puzzles, where you need to think logically and creatively to find the best solution. 
          </p>
          <p>I’m also fascinated by the idea of being able to turn ideas into reality through code, </p>
          <p>and that keeps me motivated to keep learning.
          </p>
          <br/>
          <p>Thank you for reading, and I look forward to connecting with other learners and professionals in the field!</p>
        </div>
      </main>
      <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '10px', marginTop: '20px' }}>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

