import AuthForm from "@/components/auth/auth-form";


export default function AuthPage({searchParams}) {
  const formMode = searchParams.mode || 'login';
  return <AuthForm mode={formMode} />;
}