import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Display from "./Display";


  test("== snapshot", () => {
    const tree = render(<Display locked={true} closed={true} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test("locked/closed when props closed/locked = true", () => {
    const comp = render(<Display locked={true} closed={true} />);
    comp.getByText(/locked/i);
    comp.getByText(/closed/i);
  });

  test("unlocked/open when props closed/locked = false", () => {
    const comp = render(<Display locked={false} closed={false} />);
    comp.getByText(/unlocked/i);
    comp.getByText(/open/i);
  });

  test("diplay red when closed/locked", () => {
    const comp = render(<Display locked={true} closed={true} />);
    const unlocked = comp.getByText(/locked/i);
    const closed = comp.getByText(/closed/i);
  });