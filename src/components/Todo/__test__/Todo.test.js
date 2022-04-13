import {render, screen, fireEvent} from '@testing-library/react'
import Todo from '../Todo'
import { BrowserRouter } from 'react-router-dom'

const MockTodo = () => {

    return(
        <BrowserRouter>
            <Todo/> 
        </BrowserRouter>
    )
}


const addTask = (task) => {


    const inputElement = screen.getByPlaceholderText(/Add a new task here/i)
    const buttonElement = screen.getByRole("button",{name:/Add/i})
    task.forEach(task=>{

        fireEvent.change(inputElement, {target:{value:task}})
        fireEvent.click(buttonElement)

    })

}


describe("Todo", ()=>{

    test('should render input element', async() => {

        render(<MockTodo/>)
        const inputElement = screen.getByPlaceholderText(/Add a new task here/i)
        const buttonElement = screen.getByRole("button",{name:/Add/i})
        fireEvent.change(inputElement, {target:{value:"what"}})
        fireEvent.click(buttonElement)
        const divElement = screen.getByText(/what/i)
        expect(divElement).toBeInTheDocument()



    })

    test('should render multiple items', async() => {

        render(<MockTodo/>)
        addTask(["Hello", "My", "Friend"])
        const divElement = screen.getAllByTestId("task-container")
        expect(divElement.length).toBe(3)



    })



    test('task should not have "completed" class when intially rendered', async() => {

        render(<MockTodo/>)
        addTask(["Hellos", "My", "Friend"])
        const divElement = screen.getByText(/Hellos/i)
        expect(divElement).not.toHaveClass("todo-item-active")



    })


    test('task should not have "completed" class when clicked', async() => {

        render(<MockTodo/>)
        addTask(["Hellos", "My", "Friend"])
        const divElement = screen.getByText(/Hellos/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")



    })
    

})