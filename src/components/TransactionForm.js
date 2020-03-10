import React, { Component } from 'react'

class TransactionForm extends Component {
    state = {
        title : "",
        description: ""
    }

    handleChange =(e)=>{
       this.setState({
        [e.target.name]: e.target.value
       })

    }

    handleSubmit = e =>{
        e.preventDefault()
        this.props.onAddorEdit(this.state)
    }
    render() {
        return (
            <div>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <input name="title" placeholder="title" value={this.state.title} onChange={this.handleChange} /><br />
                    <input name="description" placeholder="description" value={this.state.description} onChange={this.handleChange} /><br />
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}
export default  TransactionForm