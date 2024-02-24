import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';




export default function Protected({ children }) {
  const router = useRouter()
  const { data: session } = useSession();

  if (session.user.isadmin) {
    return children
  } else {
    router.push('/auth/login')

  }

}

