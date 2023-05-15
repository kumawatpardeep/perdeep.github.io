import React, { useState } from 'react'
import './Contact.css'

export const Contact = () => {
  const[name,setName]=useState('');
  const[nameError,setNameError]=useState(false);
  const[ocup_type,setocup_type]=useState(false);
  const[org_name,setorg_name]=useState(false);
  const[ocupType,setOcupType]=useState('');
  const[orgName,setOrgName]=useState('');
  const[email,setEmail]=useState('');
  const[message,setMessage]=useState('');

  function inVaild(itemName,value){
    let nameRegex;
    if(itemName==='name'){
      nameRegex=/[A-Za-z]{5,11}$/;
    }
    else if(itemName==='itemocup_type'){
      nameRegex=/[A-Za-z]{5,100}$/;

    }
    else if(itemName==="org_name"){
      nameRegex=/[A-Za-z]{5,100}$/;

    }
    else{
      return false;
    }
    // return ocup_typeRegex.test(value);
    return nameRegex.test(value);

  }
  

  const onContact=()=>{
    if(inVaild('name',name)){
      setNameError(false);
    }
    else{
      setNameError(true);
    }
    if(inVaild('name',name)){
      setocup_type(false);
    }
    else{
      setocup_type(true);
    }
    if(inVaild('name',name)){
      setorg_name(false);
    }
    else{
      setorg_name(true);
    }
console.log(name,ocupType,orgName,email,message);
  }
  return (
    <div className='formm'>
     <div className='cont'>
      <div className='headingdeatils'>
        <h1 className='qqq'>Contact Form</h1>
      </div>
      <div className="contact-form">
      <label className='n'>Name</label><br />
      <input id="name" name='name' value={name} onChange={(e)=>setName(e.target.value)} type="text" required/><br/>
      {nameError && <p style={{color:'red'}}>Enter a valid name</p>}

      <label className='oc'>Ocuupation Type</label><br />
      <input id='ocup_type' name='ocup_type' value={ocupType} onChange={(e)=>setOcupType(e.target.value)} type="text" /><br/>
      {ocup_type && <p style={{color:'red'}}>Ocup_type a valid name</p>}

      <label className='in'>Ocuupation/ Instiute Name</label><br />
      <input id='org_name' name='org_name' value={orgName} onChange={(e)=>setOrgName(e.target.value)} type="text" /><br/>
      {org_name && <p style={{color:'red'}}>org_name a valid </p>}


      <label className='em'>Email</label><br />
      <input id='email' name='email' value={email} type="text" onChange={(e)=>setEmail(e.target.value)} /><br/>

      <label className='me'>Message</label><br/>
      <textarea name="message" id="message" value={message}  onChange={(e)=>setMessage(e.target.value)} cols="30" rows="10"></textarea><br/>
        
      </div>
      <div className='savebtn'>
        <button type='submit' className='sss' onClick={onContact}>Send</button>
      </div>
      </div>
    </div>
  )
}
