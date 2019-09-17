import React from 'react';
import renderer from "react-test-renderer"; 
import {render, fireEvent} from '@testing-library/react';
import Dashboard from './Dashboard';

test("Dashboard renders", () =>{
  let dashboard = render(<Dashboard />);
  console.log(dashboard)
})




    test("== snapshot", () => {
      const tree = renderer.create(<Dashboard />); 

      expect(tree.toJSON()).toMatchSnapshot();
    });


    test('controls/display render', ()=>{

      const comp = render(<Dashboard />);
        comp.getByText(/lock gate/i);
        comp.getByText(/close gate/i);
        comp.getByText(/unlocked/i);
        comp.getByText(/open/i);

    });

    test('closed if locked', ()=>{

      const comp = render(<Dashboard />);
        const btnLock = comp.getByText(/lock gate/i);
        const btnClose = comp.getByText(/close gate/i);
        fireEvent.click(btnClose);

        fireEvent.click(btnLock);
        comp.getByText(/locked/i);
        comp.getByText(/closed/i);
        
        const btnOpen = comp.getByText(/open gate/i);
        fireEvent.click(btnOpen);
        comp.getByText(/locked/i);
        comp.getByText(/closed/i);
    });