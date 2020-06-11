import React,{useState } from 'react';
import { Button, Form, Header, Icon,  Modal } from 'semantic-ui-react'
import RecipeAddStepsInModal from '../components/RecipeAddStepsInModal'
import RecipeAddIngredientsModal from './RecipeAddIngredientsModal';

const RecipeAddModal= props=> {

    let [steps, setSteps] = useState([])
    let [step,setStep]= useState()
    let [ingredients, setIngredients] = useState([])
    let [ingredientName, setIngredientName] = useState()
    let [ingredientUnit,setIngredientUnit] = useState()
    let [ingredientQuantity, setIngredientQuantity] = useState()

    const servingsOptions =[
        {  text: '0.5', value: 0.5 },
        {  text: '1', value: 1 },
        {  text: '1.5', value: 1.5 },
        {  text: '2', value: 2 },
        {  text: '2.5', value: 2.5 },
        {  text: '3', value: 3 },
        {  text: '3.5', value: 3.5 },
        {  text: '4', value: 4 },
        {  text: '4.5', value: 4.5 },
        {  text: '5', value: 5 },
        {  text: '5.5', value: 5.5 },
        {  text: '6', value: 6 }
    ]
    
    const unitOptions = [
        {  text: 'piece',value: 'piece'},
        {  text: 'each',value: 'each'},
        {  text: 'tsp', value: 'tsp' },
        {  text: 'tbsp', value: 'tbsp' },
        {  text: 'cup', value: 'cup' },
        {  text: 'ounce', value: 'ounce' },
        {  text: 'lb', value: 'lb' },
        {  text: 'grams', value: 'grams' },
        {  text: 'miligrams', value: 'miligrams' },
        {  text: 'fluid-ounce', value: 'fluid-ounce' },
        {  text: 'fluid-cup', value: 'fluid-cup' },
        {  text: 'pint', value: 'pint' },
        {  text: 'quart', value: 'quart' },
        {  text: 'gallom', value: 'gallon' },
        {  text: 'litre', value: 'litre' },
        {  text: 'mililitre', value: 'mililitre' },
        {  text: 'stick',value: 'stick'},
        {  text: 'packet',value: 'packet'},
    ]

      /*********************   Adding and Removing Ingredient fields on form ********************/
    const handleIngredientQuantityChange =(e,index)=>{
        ingredients[index].qty = e.target.value
       setIngredientQuantity(ingredients[index].qty)
        setIngredients(ingredients)
    }

    const handleIngredientUnitChange =(e, data, index)=>{
        ingredients[index].unit = data.value
        console.log('options value', data.value)
        setIngredientUnit(ingredients[index].unit)
        setIngredients(ingredients)
    }

    const handleIngredientNameChange =(e,index)=>{
        ingredients[index].name = e.target.value
        setIngredientName(ingredients[index].name)
        setIngredients(ingredients)
    }

   
    const addNewIngredient = ()=>{
        console.log('clicked for add new ingredient')
        console.log('ingredients',ingredients)
        setIngredients([...ingredients,{qty: 0, unit: '', name: ''}])
    }

    const handleRemoveIngredient = (index)=>{
        let newIngredients = [...ingredients]
        newIngredients.splice(index,1)
        setIngredients(newIngredients)
    }

    /*********************   Adding and removing Steps field on form ********************/
    const handleStepChange=(e,index)=>{
        steps[index] = e.target.value
        setStep(steps[index])
        setSteps(steps)
       
    }

    const addSteps =(e)=>{
       setSteps([...steps,''])
    }

    const handleRemoveSteps=(index)=>{

        console.log('steps',steps)
        console.log('index to be removed',index)
        console.log('step at index',steps[index])
        let newSteps = [...steps]
        console.log('newsteps',newSteps)
        newSteps.splice(index,1)
        console.log('newsteps after removal',newSteps)
        setSteps(newSteps)
    }

    /*********************************************************/
    return (

    <Modal trigger={<Icon name='edit' size='large'></Icon>} size={"small"} as={Form}  closeIcon>  
    <Header icon='user circle' content='Add new recipe' />
            <Modal.Content>
                        <Form.Group widths='equal'>
                            <Form.Field>
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
                        </Form.Group>
            
                        <RecipeAddIngredientsModal ingredients={ingredients} unitOptions={unitOptions} handleIngredientQuantityChange={handleIngredientQuantityChange} handleIngredientUnitChange={handleIngredientUnitChange} handleIngredientNameChange={handleIngredientNameChange} handleRemoveIngredient={handleRemoveIngredient}/>
                        <Form.Field>
                            <Button onClick={addNewIngredient}>Add a new ingredient</Button>
                        </Form.Field>
            
                        <RecipeAddStepsInModal steps={steps}  handleRemoveSteps={handleRemoveSteps} handleStepChange={handleStepChange}/>
                        <Form.Field>
                                <Button onClick={(e)=>addSteps(e)}>Add steps</Button>
                        </Form.Field>

                        <Form.Field>
                                <input type="hidden"  name="id" />
                        </Form.Field>

                </Modal.Content>
            <Modal.Actions>
                <Button color='green' type="submit">Add Recipe</Button>
            </Modal.Actions>
        </Modal>
          )
    }

export default RecipeAddModal