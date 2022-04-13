import {render,screen} from '@testing-library/react'
import TodoFooter from '../TodoFooter'
import { BrowserRouter } from 'react-router-dom'

const MockTodoFooter = ({numberOfIncompleteTasks}) =>{

    return(
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
    </BrowserRouter>
    )
}



describe("TodoFooter", () =>{


  describe("Functionality 1", () =>{

    test('should render the correct ammount of incomplete tasks', async() => {

      render(<MockTodoFooter numberOfIncompleteTasks={5}/>)
      const paragraphElement = screen.getByText(/5 tasks left/i)
      expect(paragraphElement).toBeInTheDocument()



    })

  })

  describe("Functionality 2", () =>{
    
    test('should render "task" when the correct amount of incomplete tasks is one', async() => {

      render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
      const paragraphElement = screen.getByText(/1 task left/i)
      expect(paragraphElement).toBeInTheDocument()



    })

  })

})



// Other Assertions
// test('should render "task" when the correct amount of incomplete tasks is one', async() => {

//   render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
//   const paragraphElement = screen.getByText(/1 task left/i)
//   expect(paragraphElement).toBeVisible()


// })


// test('should render "task" when the correct amount of incomplete tasks is one', async() => {

//   render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
//   const paragraphElement = screen.getByText(/1 task left/i)
//   expect(paragraphElement).toContainHTML("p")


// })


// test('should render "task" when the correct amount of incomplete tasks is one', async() => {

//   render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
//   const paragraphElement = screen.getByTestId("para")
//   expect(paragraphElement).toHaveTextContent("1 task left") //something like screen.getByText(/1 task left/i)



// })


// test('should render "task" when the correct amount of incomplete tasks is one', async() => {

//   render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
//   const paragraphElement = screen.getByTestId("para")
//   expect(paragraphElement.textContent).toBe("1 task left") //something like screen.getByText(/1 task left/i)

//   // paragraphElement.value is for input elements

// })
