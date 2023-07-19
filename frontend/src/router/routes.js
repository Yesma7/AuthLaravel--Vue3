import { useAuth } from '@/store/auth'

export default async function rutas(to, from, next) {
    if(to.meta?.auth) {
        const auth = useAuth();
        if(auth.token && auth.user) {
          const isAuthenticated = await auth.checkToken();
          console.log(isAuthenticated);
          if(isAuthenticated) {
            next();
          } else {
            next({ name: 'login' });
          }
        } else {
          next({ name: 'login' });
        }
        console.log(to.name);
      } else {
        next();
      }
}