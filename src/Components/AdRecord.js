import React, { Component } from 'react';





class AdRecord extends Component{


    constructor(props){
        super(props);
    }


    render(){
        return(
            <div style={{margin:'1em', display:"grid", gridTemplateColumns:'2fr 2fr 2fr 2fr', columnGap:'1em', marginBottom:'3em'}}>
                <div>
                    <div className="input-field">
                        <input placeholder='Name' id="first_name" type="text" className="validate inputNoMargin" />
                    </div>
                    <div className='input-field'>
                        <input placeholder='Description' id="first_name" type="text" className="validate inputNoMargin" />
                    </div>
                </div>
                
                <div>
                    <div className="input-field" >
                        <select multiple>
                            <option value="" disabled defaultValue>Tags</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                    <div className='input-field'>
                        <select>
                            <option value="1">Open</option>
                            <option value="2">Closed</option>
                            <option value="3">On hold</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='input-field'>
                            <input placeholder="Buyer's name" id="first_name" type="text" className="validate inputNoMargin" disabled/>
                        </div>
                        <div className='input-field'>
                            <input value='Promotion tier: Tier 1' id="first_name" type="text" className="validate inputNoMargin" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="file-field input-field">
                        <div class="btn" style={{marginTop:'1em'}}>
                            <span>Upload photo</span>
                            <input type="file" className=''/>
                        </div>
                        <div class="file-path-wrapper">
                            <input className="file-path validate" type="text" style={{marginLeft:'1em'}}/>
                        </div>
                    </div>
                    <div className="input-field">
                        <a className="waves-effect waves-teal btn" style={{width:'100%', backgroundColor:'red'}}>Delete ad</a>
                    </div>
       
                </div>
             
               
            </div>

        );
    }
}




export default AdRecord;