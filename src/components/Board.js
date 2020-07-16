import React from 'react';

import Square from './Square';

export default class Board extends React.Component{
    renderSquare=(i)=>
    {
        return(
            <Square value={this.props.squares[i]} clickAction={()=>this.props.click(i)}></Square>
        )
    }

render()
{
    // console.log(props);
    return(
        <div>
            <div>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>

            <div>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                
            </div>

            <div>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>

        </div>
    )
}

}