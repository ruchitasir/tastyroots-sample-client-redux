
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../redux/user/UserFromDBActions'

const UserFromDB= ({ userData, fetchUser})=> {
    useEffect(() => {
        fetchUser()
      }, [])

   return(
          <div>Hello {userData &&
            userData.user &&
            userData.user.firstname}
            {userData &&
            userData.user &&
            userData.user.lastname}
            </div>
          )
}

const mapStateToProps = state => {
    return {
      userData: state.userDB
    }
  }

const mapDispatchToProps = dispatch => {
    return {
      fetchUser: () => dispatch(fetchUser())
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFromDB)