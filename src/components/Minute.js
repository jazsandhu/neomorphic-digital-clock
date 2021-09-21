import React from 'react';
import './column.scss';

function Minute(props) {
    return (
        <div className="columnGroup">
            <div>
                <div className={`timeColumn currentTime${props.minute[0]}`}>
                    <div className="number columnValue_0">
                        0
                    </div>
                    <div className="number columnValue_1">
                        1
                    </div>
                    <div className="number columnValue_2">
                        2
                    </div>
                    <div className="number columnValue_3">
                        3
                    </div>
                    <div className="number columnValue_4">
                        4
                    </div>
                    <div className="number columnValue_5">
                        5
                    </div>
                </div>
            </div>
            <div>
                <div className={`timeColumn currentTime${props.minute[1]}`}>
                    <div className="number columnValue_0">
                        0
                    </div>
                    <div className="number columnValue_1">
                        1
                    </div>
                    <div className="number columnValue_2">
                        2
                    </div>
                    <div className="number columnValue_3">
                        3
                    </div>
                    <div className="number columnValue_4">
                        4
                    </div>
                    <div className="number columnValue_5">
                        5
                    </div>
                    <div className="number columnValue_6">
                        6
                    </div>
                    <div className="number columnValue_7">
                        7
                    </div>
                    <div className="number columnValue_8">
                        8
                    </div>
                    <div className="number columnValue_9">
                        9
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Minute
