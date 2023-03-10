import React, { ButtonHTMLAttributes } from "react";

export default (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button onClick={() => alert('oi')}>salvar</button>
)