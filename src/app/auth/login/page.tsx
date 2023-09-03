'use client';

import Button from '@/components/Common/Button';
import Input from '@/components/Common/Input';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true);
    try {
      const data = await signIn('credentials', body);
      console.log(data);

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="grid h-[calc(100vh_-_56px)] place-items-center ">
      <form className="flex min-w-[350px] flex-col justify-center gap-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl ">Login</h1>
        <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
        <Input
          id="password"
          type="password"
          label="Password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Button label="Login" />
        <div className="text-center">
          <p className="text-gray-400">
            Not a member?{' '}
            <Link href="/auth/register" className="text-black hover:underline">
              Register
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
