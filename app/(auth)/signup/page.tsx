import React from "react";
import { RegisterForm } from "@/features/auth/components/register-form";
import { requireUnauth } from "@/lib/auth-utils";

const SignUpPage = async () => {
  await requireUnauth();

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default SignUpPage;
