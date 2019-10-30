const SearchForm = (props) => (
    <div>
        <input type="text" placeholder={props.placeholder || ' The best ...'} />

        <button>Search</button>

        <style jsx> 
        {
            `
            input[type="text"]{
                width : 400px;
                padding : 18px;
                border : 1px solid #bf2371;
                border-radius : 10px;
                outline : 0;
                color : #bf2371;
                font-weight : bold;
            }

            ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ * /
                color : #bf2371;
                font-weight : bold;
                font-family : verdana
            }

            :-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: #bf2371;
                font-weight : bold;
                font-family : verdana
              }
              
              ::-ms-input-placeholder { /* Microsoft Edge */
                color: #bf2371;
                font-weight : bold;
                font-family : verdana
              }

              button {
                  text-transform : uppercase;
                  font-family : verdana;
                  padding : 18px;
                  border-radius : 10px;
                  width : 88px;
                  border : 1px solid #bf2371;
                  outline : 0;
                  margin : 15px;
                  cursor : pointer;
                  background-color : #bf2371;
                  color : #fff;
                  font-size : 10px;
                 font-weight : bold;
                 box-shadow : 0 3px #999;

              }
              
              button:hover {
                background-color : #e6ecf0;
                color : #bf2371
            }
            `
        } </style>
    </div>
)

export default SearchForm