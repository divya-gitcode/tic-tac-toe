import React from 'react';

import Board from './Board';
import { render } from '@testing-library/react';

export default class Game extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            xIsNext: true,
            stepCount: 0,
            history:
            [
                {squares: Array(9).fill(null)}
            ]
            // value: 5
        }
    }

    handleclick=(i)=>
    {
        const history=this.state.history
        const current=history[history.length-1]
        const squares=current.squares

        const winner=calculateWinner(squares)
        if(winner || squares[i])
        {
            return
        }


        squares[i]=this.state.xIsNext ? 'X' : '0'

        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepCount: history.length
        })

    }

    // someFunc=()=>{
    //     return 5;
    // }
    // change=()=>
    // {
    //     this.setState({
    //         value:6
    //     })
    // }
    render()
    {
        // console.log(this.state)
        // const result=this.someFunc();

        const history=this.state.history
        const current=history[history.length-1]
        const squares=current.squares

        let status

        const winner=calculateWinner(squares)
        if(winner)
        {
            status='winner is '+ winner
        }
        
        else
        {
            status='Next player is '+ (this.state.xIsNext?'X' : '0')
        }
        


    return(
        <div className='game'>
            <Board click={(i)=>this.handleclick(i)} squares={squares} />
            {/* <button onClick={()=> this.change()}>
                Click me! */}
            {/* </button> */}
             
             <div className='game-info'>
                 {status}
             </div>

        </div>
        
    )
    }
}

function calculateWinner(squares)
{
    const possibilities=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i=0;i<possibilities.length;i++)
    {
        const[a,b,c]=possibilities[i];
        if(squares[a] && squares[a]==squares[b] && squares[b]==squares[c])
        {
            return squares[a]
        }

    }
    return null
}
