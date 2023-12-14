import bcrypt from 'bcrypt';
import NextAuth, {User} from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import {z} from 'zod';

import {authConfig} from '@/auth.config';

// pass // 12345
const pasHash = '$2b$10$Hc2.KA507Ofn1kwqFnlB.e8eTMV.H2.CG6UzWdEc35SztfwInoULq';
const mockUser: User = {
  id: '1',
  name: 'Cryptoman',
  email: 'mat@a.com',
};

export const {auth, signIn, signOut} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({email: z.string().email(), password: z.string().min(5)})
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const {email, password} = parsedCredentials.data;

          if (email !== mockUser.email) return null;

          const passwordsMatch = await bcrypt.compare(password, pasHash);

          if (passwordsMatch) return mockUser;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
