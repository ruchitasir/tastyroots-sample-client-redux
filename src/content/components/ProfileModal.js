import React,{useState } from 'react';
import { Button, Form, Header, Icon, Input, Modal, DropdownProps } from 'semantic-ui-react'


const ProfileModal= props=> {

    let [inputIngredient, setInputIngredient] = useState(false)

    const servingsOptions =[
        {  text: '0.5', value: 0.5 },
        {  text: '1', value: 1 },
        {  text: '1.5', value: 1.5 }
    ]

    const prepTimeOptions = [
        {  text: '', value: 0.5 },
        {  text: '', value: 1 },
        {  text: '', value: 1.5 }
    ]

    const addNewIngredient = ()=>{
        console.log('clicked for add new ingredient')
        setInputIngredient(true)
    }

    let input = <div> </div>
    if(inputIngredient){
        console.log('inputIngredient',inputIngredient)
        input = (
            // <Form.Field>
            //     <Form.Input label="Ingredient Name" name="name"   required />
            //  </Form.Field>
            <div>hello</div>
        )
        setInputIngredient(false)
    }

    return (

    <Modal trigger={<Icon name='edit' size='large'></Icon>} size={"small"} as={Form}  closeIcon>  
    {/* <Modal trigger={<Icon name='edit' size='large'></Icon>} size={"small"} as={Form} onSubmit={} closeIcon> */}
    <Header icon='user circle' content='Add new recipe' />
            <Modal.Content>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                {/* <Form.Input label="Recipe Name" name="recipeName" placeholder={props.user.firstname} onChange={} required /> */}
                                <Form.Input label="Recipe Name" name="recipeName" required />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input label="Description" name="description"   required />
                            </Form.Field>
                            <Form.Select fluid required label='Servings'  options={servingsOptions}  name="servings"  placeholder="Servings"/>
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <Form.Input label="Prep Time" name="prepTime"   required />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input label="Cook Time" name="cookTime"   required />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input label="Ingredient Name" name="name"   required />
                            </Form.Field>
                            {input}
                            <Button onClick={addNewIngredient}>Add a new ingredient</Button>
                            <Form.Field>
                                <input type="hidden"  name="id" />
                            </Form.Field>
                        </Form.Group>
                        <Form.Field>
                                <label>Profile Pic</label>
                                <Input name="pic"  />
                        </Form.Field>
                </Modal.Content>
            <Modal.Actions>
                <Button color='green' type="submit">Update</Button>
            </Modal.Actions>
        </Modal>
          )
    }

export default ProfileModal