import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class ListContacts extends Component{

 state={
    query:""
  }

  handleChange=(value)=>{
      this.setState({
          query:value.trim()
      })
  }
  handleClick=()=>{
      this.setState({
          query:""
      })
  }

    render() {
        
        const {contacts,clickFxn} = this.props;
        const {query}=this.state;

        const showingList=query===""? contacts:contacts.filter(e=>(e.name.toLowerCase().includes(query)))


        return (
    <div className="list-contacts">
    <div className="list-contacts-top">
        <input className="search-contacts" type="text" value={query} onChange={(event)=>(this.handleChange(event.target.value))} placeholder="Search Contacts"/>
        <Link to="/create" className="add-contact">Add Contact</Link>
    </div>
        {showingList.length !== contacts.length && (
            <div className="showing-contacts">
                <span>Now showing {showingList.length} of {contacts.length}</span>
                <button onClick={this.handleClick}>Show All</button>
            </div>
        )}

        <ol className="contact-list">
            {showingList.map(e=>(
             <li key={e.id} className="contact-list-item">
             <div className="contact-avatar"
             style={{backgroundImage:`url(${e.avatarURL})`}}></div>
             <div className="contact-details">
                 <p>{e.name}</p>
                 <p>{e.handle}</p>
             </div>
             <button onClick={()=>clickFxn(e)} className="contact-remove">remove</button>
             </li>
            ))}
        </ol>
    </div>
        )
    }
}

export default ListContacts 