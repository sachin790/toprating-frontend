import React from 'react'
import ReactTooltip from 'react-tooltip'
const Recommend = (props) => (
    <div>
        <ReactTooltip effect="solid" place="top" />
        <button data-tip={props.tip || 'Recommend or add the options you think are the best'}>
            I Recommend...
        <style jsx>
                {
                    `
            button {
                width : 150px;
                border : 1px solid #bf2371;
                border-radius : 25px;
                padding : 12px;
                cursor : pointer;
                background-color : rgb(96, 51, 141);
                text-transform : uppercase;
                font-family : verdana;
                font-size : 13px;
                font-weight : bold;
                color : #f2f2f2;
                outline : 0;
                letter-spacing : .1px
            }
            button:hover {

                background-color : #e6ecf0;
                color : #bf2371
            }
            
            `
                }
            </style>
        </button></div>
)
export default Recommend