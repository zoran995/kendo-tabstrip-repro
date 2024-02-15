import { render, screen } from "@testing-library/react";
import { TabStripForm } from "../TabstripForm";

describe("TabstripForm", () => {
  it("passing with keepTabsMounted=false", () => {
    render(<TabStripForm keepTabsMounted={false} />);

    expect(screen.getByText("Please fill in the fields:")).toBeVisible();
    expect(screen.getByRole("textbox", { name: "First name" })).toBeVisible();
    expect(screen.getByRole("textbox", { name: "Last name" })).toBeVisible();
    expect(screen.getByRole("combobox")).toBeVisible();
  });

  it("now working get by role", () => {
    render(<TabStripForm keepTabsMounted={true} />);

    expect(screen.getByText("Please fill in the fields:")).toBeVisible();
    expect(screen.getByRole("textbox", { name: "First name" })).toBeVisible();
    expect(screen.getByRole("textbox", { name: "Last name" })).toBeVisible();
    expect(screen.getByRole("combobox")).toBeVisible();
  });
});
