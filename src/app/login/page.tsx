'use client';

import {ExclamationCircleIcon} from '@heroicons/react/24/outline';
import {Button} from '@nextui-org/button';
import {Input} from '@nextui-org/input';
import {useFormState, useFormStatus} from 'react-dom';

import {authenticate} from '../actions/auth';

export default function Page() {
  const [state, dispatch] = useFormState(authenticate, undefined);
  const {pending} = useFormStatus();

  return (
    <main className="container mx-auto flex h-screen flex-1 flex-col items-center justify-center gap-5 px-4 pt-5 md:container">
      <h1 className="text-center text-3xl">Login</h1>
      <form
        action={dispatch}
        className="flex min-w-[300px] max-w-max  flex-col gap-5 rounded-2xl bg-gray-800 p-4">
        <Input type="email" label="Email" required name="email" placeholder="Enter your email" />
        <Input
          type="password"
          label="Password"
          required
          name="password"
          placeholder="Enter your password"
          minLength={5}
        />
        <Button type="submit" color="primary" disabled={pending}>
          Login
        </Button>
        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          {state === 'CredentialsSignin' && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">Invalid credentials</p>
            </>
          )}
        </div>
      </form>
    </main>
  );
}
