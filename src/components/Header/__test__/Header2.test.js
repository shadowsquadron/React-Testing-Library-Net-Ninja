import {render,screen} from '@testing-library/react'
import Header from '../Header'


test('should render same text passed into title prop', async() => {

    render(<Header title="My Header"/>)
    const headingElement = screen.getByText(/My Header/i)
    expect(headingElement).toBeInTheDocument()



})



// test('should render same text passed into title prop', async() => {

//     render(<Header title="My Header"/>)
//     const headingElement = screen.getByText(/My Header/i)
//     expect(headingElement).toBeInTheDocument()



// })


test('should render same text passed into title prop', async() => {

    render(<Header title="My"/>)
    const headingElement = screen.getByRole("heading", {name: "My"})
    expect(headingElement).toBeInTheDocument()



})


test('should render same text passed into title prop', async() => {

    render(<Header title="My"/>)
    const headingElement = screen.getByTitle("Header")
    expect(headingElement).toBeInTheDocument()



})




test('should render same text passed into title prop', async() => {

    render(<Header title="My"/>)
    const headingElement = screen.getByTestId("header-2")
    expect(headingElement).toBeInTheDocument()



})  



// FIND
test('should render same text passed into title prop', async() => {

    render(<Header title="My Header"/>)
    const headingElement = await screen.findByText(/My Header/i)
    expect(headingElement).toBeInTheDocument()



})


// QUERY (just to check)
test('should render same text passed into title prop', async() => {

    render(<Header title="My Header"/>)
    const headingElement = screen.queryByText(/My Heads/i)
    expect(headingElement).not.toBeInTheDocument()



})







test('should render same text passed into title prop', async() => {

    render(<Header title="My Header"/>)
    const headingElement = screen.getAllByRole("heading")
    expect(headingElement.length).toBe(2)



})