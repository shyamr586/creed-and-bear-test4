import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import ReactDOM from "react-dom";
import Create from "./../Create";

afterEach(() => cleanup());

test("check if initial elements are loaded", ()=>{
    render(<Create/>);
    const users = screen.queryAllByTestId("user")
    expect(users).toHaveLength(2)
})

test("check if adding new elements work",  () => {
    const {container} = render(<p data-testid="user">New user</p>, {container: document.getElementById("div")})
    render(<Create/>);
    const users = screen.queryAllByTestId("user")
    expect(users).toHaveLength(3)
})