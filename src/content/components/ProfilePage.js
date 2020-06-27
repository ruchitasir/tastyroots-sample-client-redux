import React from 'react';
import { Container, Loader, Segment  } from 'semantic-ui-react';
import RecipeAddModal from './RecipeAddModal'

const ProfilePage = props => {
    if(!props.userDetails) {
        return (
            <Segment>
                <Loader />

            </Segment>
        )
    }
    return (
        <Container className="top-spacing">
            <h1>{props.user.firstname} {props.user.lastname}</h1>
            {props.userDetails.email}
            <RecipeAddModal user={props.user}/>
        </Container>
    )
}

export default ProfilePage