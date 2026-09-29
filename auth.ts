import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';
export const {handlers, auth, signIn, signOut}=NextAuth({session:{strategy:'jwt'},providers:[Credentials({credentials:{email:{},password:{}},async authorize(credentials){const email=String(credentials?.email||'').toLowerCase();const password=String(credentials?.password||'');const user=await db.user.findUnique({where:{email}});if(!user||!(await bcrypt.compare(password,user.passwordHash))) return null;return {id:user.id,name:user.name,email:user.email,role:user.role};}})],callbacks:{jwt({token,user}){if(user) token.role=(user as any).role;return token;},session({session,token}){(session.user as any).id=token.sub;(session.user as any).role=token.role;return session;}}});
