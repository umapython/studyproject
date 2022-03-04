import React ,{useEffect, useState}from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
//import ContactCard from './ContactCard';
import ContactList from './ContactList';


function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
  const addcontacthandler=(contact)=>{
      console.log(contact);
      setContacts([...contacts,contact]);
  };
  useEffect(()=>{
    const retrievecontacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrievecontacts)setContacts(retrievecontacts);
  },[]);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  return (
    <div className='ui container'>
      <Header />
      <AddContact addcontacthandler={addcontacthandler}/>
      <ContactList contacts={contacts}/>
      {/* <ContactCard /> */}
    </div>
  );
}

export default App;
