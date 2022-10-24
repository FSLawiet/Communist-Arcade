import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";
import { Login, LoginProps } from "./Login";

export default {
  title: "Pages/Log In",
  component: Login,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/login", (req, res, ctx) => {
          return res(ctx.json({ message: "Login realizado!" }));
        }),
      ],
    },
  },
} as Meta<LoginProps>;
export const MockUp: StoryObj<LoginProps> = {
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
