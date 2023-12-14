'use server';

import {signIn} from '@/auth';

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).name === 'CredentialsSignin') {
      return 'CredentialsSignin';
    }
    throw error;
  }
}
