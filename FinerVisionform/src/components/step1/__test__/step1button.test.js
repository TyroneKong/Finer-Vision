import { Step1Button } from "../Step1Button";
import { shallow } from "enzyme";

it("should render button", () => {
  const component = shallow(<Step1Button />);
  expect(component.find("button").text()).toEqual("Next");
});
