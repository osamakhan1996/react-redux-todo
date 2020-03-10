import React, { Component } from 'react'
import TransactionForm from './TransactionForm'

export default class TransactionList extends Component {
    state = {
        list : this.returnList()
    }

    returnList(){
        if(localStorage .getItem('items')==null)
            localStorage.setItem('items',JSON.stringify([]))
            return JSON.parse(localStorage .getItem('items'))
        
    }

    onAddorEdit = (data)=>{
        var list = this.returnList()
        list.push(data)
        localStorage.setItem('items',JSON.stringify(list))
        this.setState({
            list
        })
    }
    render() {
        return (
            <div>
                <TransactionForm onAddorEdit={this.onAddorEdit} /><hr />
                <div>
                   {this.state.list.map((item,index)=>{
                       return <h1>{item.title}{item.description}</h1>
                       
                   })}
                </div>
        
            </div>
        )
    }
}
