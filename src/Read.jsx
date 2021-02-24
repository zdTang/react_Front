import React, { Component } from 'react'
import fetch from 'node-fetch';
export default class Read extends Component {
    constructor(props){
        super(props)
    }
    

    async componentDidMount(){
        console.dir("didMount");
        let res=await fetch("./data.json");
        let data=await res.json();
        console.log(data);

    }

    render() {
        return (
            <div>
                <h1>This is Read</h1>
            </div>
        )
    }
}
