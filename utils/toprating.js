import Link from "next/link"
const TopRating = (props) => (
    <div className="topRatingCard">
        <div className="join-us-header">Top rating</div>
        <div className="sidebar-text">TopRating  helps you make informed decisions. Tell us what you’re passionate about to get your personalized feed and help others.</div>

        <Link href="/ask"><button>Let's go!</button></Link>

        <style jsx>
            {
                `

            .join-us-header {
                font-size: 18px;
                font-weight: 600;
                line-height: 24px;
                color: #0d0d0d;
                margin: 12px auto;
            }

            .Sidebar-text, .join-us-header{
                line-height: 24px;
                margin-bottom: 18px;
            }

            .Sidebar-text {
                font-size: 0.3em;
                font-weight: 400;
                letter-spacing: .1px;
                text-transform: none;
                font-family : verdana;
            }

            button{
                width : 100px;
                height : 40px;
                border : 0;
                border-radius : 6px;

                cursor : pointer;
                background-color : rgb(96, 51, 141);
                font-family : inherit;
                font-size : 13px;
                font-weight : bold;
                color : #f2f2f2;
                outline : 0;
                margin-top : 6px;
                }

                button:hover {
                    background-color : #e6ecf0;
                    color : rgb(96, 51, 141);
                    border : 1px solid rgb(96, 51, 141);
                }

              .topRatingCard{
                overflow: hidden;
                box-shadow: 0 4px 19px 0 rgba(0,0,0,.05);
                border: 1px solid #e6e8eb;
                background-color: #fff;
                max-height: 454px;
                width: 257px;
                margin-bottom: 36px;
                padding: 18px;
                text-align : center;
                top : 460px;
                animation : bounce 3s ease-in-out infinite;
                animation-direction : alternate;
              }

          @keyframes bounce {
            0% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(20px);
            }
          }

            `
            }
        </style>
    </div>
)

export default TopRating
