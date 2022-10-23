import { Meta, StoryObj } from "@storybook/react";
import { Logo, LogoProps } from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo,
  args: {
    style: {
      fill: "#F78181",
      width: 92.93,
      height: 107,
    },
  },
  argTypes: {},
} as Meta<LogoProps>;
export const Default: StoryObj<LogoProps> = {};
