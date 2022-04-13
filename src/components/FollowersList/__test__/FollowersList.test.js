import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

// describe("FollowersList", () => {

    
//     it('should fetch and render input element', async () => {
//         render(
//             <MockFollowersList />
//         );
//         const followerDivElement = screen.findByTestId(`follower-item-0`)
//         expect(followerDivElement).toBeInTheDocument();
//     });
    
   
// })

