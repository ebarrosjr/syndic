import React, { useState, SyntheticEvent } from 'react'
import { useRouter } from 'next/router';

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const logar = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        await router.push('/');
    }

    return (
        <div>
            <form onSubmit={logar}>
                <input type="email" id="email" placeholder="Seu e-mail" required onChange={e => setEmail(e.target.value)} />
                <input type="password" id="password" placeholder="Seu e-mail" required onChange={e => setPassword(e.target.value)} />
                <button type="submit"> Entrar </button>
            </form>
        </div>
    )
}
