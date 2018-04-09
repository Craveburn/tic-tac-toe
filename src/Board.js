import React, { Component } from 'react';
import './Board.css'
import XPiece from './XPiece'
import OPiece from './OPiece'
import BlankPiece from './BlankPiece';

class Board extends Component {
    render() {
        return (
            <div className="main">
                <div className="container1">
                    <div className="box1">
                        <OPiece />
                    </div>
                    <div className="box2">
                        <BlankPiece />
                    </div>
                    <div className="box3">
                        <XPiece />
                    </div>
                </div>
                <div className="container2">
                    <div className="box4"></div>
                    <div className="box5">
                        <OPiece />
                    </div>
                    <div className="box6"></div>
                </div>
                <div className="container3">
                    <div className="box7">
                        <XPiece />
                    </div>
                    <div className="box8"></div>
                    <div className="box9">
                        <XPiece />
                    </div>
                </div>
            </div>
        )
    }
}

export default Board