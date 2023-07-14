import React from "react";

interface IButtonProps {
  label: string;
}

export default function Button({ label }: IButtonProps) {
  return <div>{label}</div>;
}
