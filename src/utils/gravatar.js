import md5 from 'crypto-js/md5';

export const getGravatarUrl = (email, size = 80) => {
    if (!email) return `https://www.gravatar.com/avatar/?d=mp&s=${size}`;
    
    const hash = md5(email.toLowerCase().trim()).toString();
    return `https://www.gravatar.com/avatar/${hash}?d=mp&s=${size}`;
};
