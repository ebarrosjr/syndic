import { useEffect } from "react"
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8000/api/user', {
        credentials: 'include'
      });
      if(response.status != 200) {
        await router.push('/login');
      }
      const content = await response.json();
      console.log(content);
    })()
  });

  return (
    <>
    Home
    </>
  )
}
