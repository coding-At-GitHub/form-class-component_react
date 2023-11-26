import React, { Component } from 'react';
 import { useEffect } from 'react';
 import { useState } from 'react';
export default class FormHandlingClass extends Component {

    constructor(props){
        super(props)
        this.state={
            Fname: '',
            Lname: '',
            Address1: '',
            Address2: '',
            Email: '',
            Mobile: '',
            IsAccepted: false
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleCheck=(e)=>{
        this.setState({IsAccepted:this.state.IsAccepted===false})
    }
    // handleFname = (e) => {
    //     this.setState({Fname:e.target.value})
    // }
    // handleLname = (e) => {
    //     this.setState({Lname:e.target.value})
    // }
    // handleAddress1 = (e) => {
    //     this.setState({Address1:e.target.value})
    // }
    // handleAddress2 = (e) => {
    //     this.setState({Address2:e.target.value})
    // }
    // handleEmail = (e) => {
    //     this.setState({Email:e.target.value})
    // }
    // handleMobile = (e) => {
    //     this.setState({Mobile:e.target.value})
    // }
    // handleLname = (e) => {
    //     this.setState({Lname:e.target.value})
    // }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('firstname',this.state.Fname);
        console.log('lastname',this.state.Lname);
        console.log('add1',this.state.Address1);
        console.log('add',this.state.Address2);
        console.log('masil',this.state.Email);
        console.log('mob',this.state.Mobile);
        console.log('check',this.state.IsAccepted);
    }

    render() {
        return (
            <div>
                <h1>Form Handling with Class Component</h1>
             <p>Form Handling   </p>
         
               <form onSubmit={(e)=>{this.handleSubmit(e)}}>
               <table>
                    <tr><td> First Name</td><td><input type='text' name='Fname' value={this.state.Fname} onChange={(e) => {this.setState({[e.target.name]:e.target.value})}} /> {this.state.Fname}</td></tr>
                    <tr><td> Last Name</td><td><input type='text' name='Lname' value={this.state.Lname} onChange={(e) => {this.handleChange(e)}} />{ this.state.Lname}</td></tr>
                    <tr><td>Address 1 </td><td><input type='text' name='Address1' value={this.state.Address1} onChange={(e) => {this.handleChange(e)}} />{this.state.Address1}</td></tr>
                    <tr><td>Address 2 </td><td><input type='text' name='Address2' value={this.state.Address2} onChange={(e) => {this.handleChange(e)}} />{this.state.Address2}</td></tr>
                    <tr><td>Email </td><td><input type='text' name='Email' value={this.state.Email} onChange={(e) => {this.handleChange(e)}} />{this.state.Email}</td></tr>
                    <tr><td>Mobile </td><td><input type='text' name='Mobile' value={this.state.Mobile} onChange={(e) => {this.handleChange(e)}} />{this.state.Mobile}</td></tr>
                    <tr><td>Accept Terms and Condition</td><td><input type='checkbox' checked={this.state.IsAccepted} onChange={(e)=> this.handleCheck(e)} /></td></tr>
                    <tr><td>&nbsp;</td></tr>
                    <tr><td><button type='submit' >Submit</button></td></tr>
                    {/* <tr><td colSpan={2} style={{textAlign: 'centre'}}><botton type='submit' >Submit</botton></td></tr> */}
                </table>
               </form>
            </div>
        )
    }
}
