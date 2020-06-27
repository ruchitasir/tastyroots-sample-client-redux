import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'
import { incrementLikes } from '../../redux/action/LikeRecipeAction'

const LikeRecipe= props=> {
    let likes = props.numOfLikes
   return(
          <div>
              <h1>Num of likes {props.numOfLikes}</h1>
              <Button
              content='Like'
              icon='heart'
              label={{ as: 'a', basic: true, content: likes }}
              labelPosition='right'
              onClick={props.incrementLikes}
               />
          </div>
          )
    }

    const mapStateToProps = state => {
        return {
            numOfLikes: state.likeRecipe.numOfLikes
        }
      }
      
      const mapDispatchToProps = dispatch => {
        return {
            incrementLikes: () => dispatch(incrementLikes())
        }
      }

export default connect(
    mapStateToProps,
    mapDispatchToProps)(LikeRecipe)