import React from 'react';
import { Redirect } from 'react-router-dom'

const FamilyCircle = props => {
    if (!props.user) {
        return <Redirect to="/" />
      }
    return (
        <div>FAMILY CIRCLE STUB</div>
    )
}

export default FamilyCircle