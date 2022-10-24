import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";
import { Login } from "./Login";

export default {
  title: "Pages/Log In",
  component: Login,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(ctx.json({ message: "Login realizado!" }));
        }),
      ],
    },
  },
} as Meta;
export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("proletario@exemplo.com"),
      "anarquia@exemplo.com"
    );
    userEvent.type(
      canvas.getByPlaceholderText("************"),
      "senhasupersegura"
    );
    userEvent.click(canvas.getByRole("button"));
    await waitFor(() =>
      expect(
        canvas.getByText("Log In Realizado com Sucesso!")
      ).toBeInTheDocument()
    );
  },
};
