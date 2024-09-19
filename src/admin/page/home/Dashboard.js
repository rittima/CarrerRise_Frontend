import React from 'react'
import Slide from './Slide';

const Dashboard = () => {
  const name = localStorage.getItem('username');
  return (
    <div>
      <div className='container'>
        <h1>Hi {name ? name:'Guest'}, welcome to CarrierRise</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4 className="fst-italic" >"We are eager to have you on our website."</h4>
        <img style={{marginLeft:"20%"}} src="https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg?w=740&t=st=1726583386~exp=1726583986~hmac=ccbc36e251983d509a17a850e61b0bdbe257bf1a891a00f0c843b549169c0f5e" width={'30%'} alt="Cute chatbot saying hello" />
        </div><footer className="blockquote-footer">Platform build by <cite title="Source Title">CarrierRise.com</cite></footer>
      </div>
      <Slide/>
    </div>
  )
}

export default Dashboard
