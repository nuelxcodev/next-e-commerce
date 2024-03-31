export const authConfig = {
  secret: "fdrtfyghuijouytrdeswrtyuiytre",
  session: {
    strategy: "jwt",
  },
  pages: {
    error: "/",
    signIn: "/login",
    
  },
  callbacks: {
    authorized({ auth }) {
      const isAuthenticated = !!auth?.user;
      return isAuthenticated;
    },
  },
  providers: [],
};
