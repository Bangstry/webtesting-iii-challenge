import React from 'react';
import renderer from "react-test-renderer"; 
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls';




    test("== snapshot", () => {
      const tree = renderer.create(<Controls />); 

      expect(tree.toJSON()).toMatchSnapshot();
    });


    test('buttons appear', ()=>{

      const comp = render(<Controls />);
        comp.getByText(/lock gate/i);
        comp.getByText(/close gate/i);

    });
