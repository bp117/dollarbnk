import format from 'date-fns/format';
import jwtDecode from 'jwt-decode';
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import Router from 'next/router'

// Add padding from the start of the current string/number
export const myPadStart = (el, targetLength, padString) => {
   return el.toString().padStart(targetLength, padString);
};

// Insert something after every n characters in the string
export const chunker = (el, step, string) => {
   const regExp = new RegExp(`.{${step}}`, 'g');
   return el
      .toString()
      .match(regExp)
      .join(string);
};

// Format date
export const formatDate = (date, dateFormat) => format(new Date(date), dateFormat);

// Token checker
export const getAuthToken = () => {
   return cookie.get('token');
};

export const setAuthToken = token => {
   cookie.set('token', token)
};

export const removeAuthToken = () => {
   cookie.remove('token')
};

export const isValidToken = () => {

   return new Promise((resolve, reject) => {
      const token = checkValidToken();

      if (token) {
          resolve(token)
      } else {
          reject()
      }
   });
};

export const checkValidToken = () => {
    const currentTime = Date.now().valueOf() / 1000;
    const token = getAuthToken();

    if (!token) {
        return;
    }

    const decodedToken = jwtDecode(token);

    // If token expired - remove it
    if (decodedToken.exp < currentTime) {
        removeAuthToken();
        return;
    }

    return token;
}

export const auth = ctx => {
    const { token } = nextCookie(ctx),
        { pathname } = ctx

    if (pathname === '/login') {
        if (!token)  {
            return false
        }

        if (typeof window === 'undefined') {
            ctx.res.writeHead(302, { Location: '/panel' })
            ctx.res.end()
        } else {
            Router.push('/panel')
        }
    }


    // If there's no token, it means the user is not logged in.
    if (!token)  {
        if (typeof window === 'undefined') {
            ctx.res.writeHead(302, { Location: '/login' })
            ctx.res.end()
        } else {
            Router.push('/login')
        }
    }

    return token
}