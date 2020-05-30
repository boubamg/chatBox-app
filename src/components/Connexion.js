import React, { Component } from 'react'

    class Connexion extends Component {
        render () {

            return (
               <div className="connexionBox">
                   <form className="connexion" onSubmit={this.handleSubmit}>
                       <input 
                       placeholder="Pseudo"
                       type="text"
                       required />
                    <button type="submit">Go</button>
                   </form>
               </div> 
            )
        }
    }

export default Connexion;