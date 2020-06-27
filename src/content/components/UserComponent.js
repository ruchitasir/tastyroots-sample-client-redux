import React from 'react';
import { connect } from 'react-redux';
import { setReduxUser } from '../../redux/action/userAction'
import { Button } from 'semantic-ui-react'

const UserComponent= props=> {
   return(
          <div>

              <h1> {props.userStr}  </h1>
                <h2> <button onClick={ props.setReduxUser}>Concat String</button></h2>
                <h3>Hello</h3>
              
          </div>
          )
    }
    const mapStateToProps = state => {
        return {
          userStr: state.user.userStr
        }
      }

      const mapDispatchToProps = dispatch => {
        return {
            setReduxUser: () => dispatch(setReduxUser())
        }
      }  



export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(UserComponent)