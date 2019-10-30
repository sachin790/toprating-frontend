import Link from 'next/link'
import { AddIcon } from '../components/Icons'
import ReactTooltip from 'react-tooltip'
const HeaderButton = () => (
    <div>
        <ReactTooltip effect="solid" place="top" />
        <Link prefetch  href="/ask"><button data-tip={ 'Ask a Question'} ><AddIcon /></button></Link>
        <style jsx>
        {
            `
            button {
                width : 50px;
                height : 50px;
                border : 0;
                border-radius : 50px;
                padding : 12px;
                cursor : pointer;
                background-color : rgb(96, 51, 141);
                text-transform : uppercase;
                font-family : verdana;
                font-size : 10px;
                font-weight : bold;
                color : #f2f2f2;
                outline : 0;
                display : inline-block;
                box-shadow : 0 0 0px 2px rgba(0,0,0,0.12);
                overflow : hidden;
            }
            button:hover {
                color : rgb(96, 51, 141);
                border : 2px solid rgb(96, 51, 141)
            }
            `
        }
        </style>
    </div>
)

export default HeaderButton