import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Button, TomatoButton } from "../index";

test("normal button renders", () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("color", "grey");
});

test("tomato button renders", () => {
  const tree = renderer.create(<TomatoButton />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("color", "tomato");
  expect(tree).toHaveStyleRule("color", "red", {
    modifier: ":hover"
  });
});
