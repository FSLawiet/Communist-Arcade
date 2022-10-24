import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import React, { useState } from "react";
import axios from "axios";

export interface LoginProps {
  url?: string;
}

export const Login = ({ url = "" }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLoginEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handleLoginPassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleLoginRemember = (e: React.FormEvent<HTMLButtonElement>) => {
    setRemember(!remember);
  };
  const handleLoginSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const LoginInfo = { email, password, remember };
    if (LoginInfo.email !== "" && LoginInfo.password !== "") {
      if (process.env.NODE_ENV === "development") {
        const resp = await axios.post(`${url}/login`, LoginInfo);
        console.log(resp.data.message);
        setIsUserLoggedIn(true);
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo style={{ fill: "#F78181", width: 92.93, height: 107 }} />
        <Heading size="lg" className="mt-4">
          Communist Arcade
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e ajude uma comunidade!
        </Text>
      </header>
      <form
        onSubmit={handleLoginSumbit}
        className="flex flex-col gap-4 items-stretch mt-10 w-full max-w-[400px]"
      >
        {isUserLoggedIn && <Text>Log In Realizado com Sucesso!</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              placeholder="proletario@exemplo.com"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleLoginEmail}
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Senha:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              placeholder="************"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={handleLoginPassword}
            />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2 mt-4">
          <Checkbox
            id="remember"
            name="remember"
            onClick={handleLoginRemember}
          />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>
        <Button id="submit" type="submit" className="mt-4">
          Entrar
        </Button>
      </form>
      <footer className="flex flex-col gap-4 items-center mt-8">
        <Text
          className="text-gray-400 underline hover:text-gray-200 transition-colors"
          asChild
          size="sm"
        >
          <a href="#">Esqueceu a sua senha?</a>
        </Text>
        <Text
          className="text-gray-400 underline hover:text-gray-200 transition-colors"
          asChild
          size="sm"
        >
          <a href="#">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  );
};
