exports.emailTpl = data => ({
   subject: 'Welcome to Dollar Bank!',
   html: `Hello ${data.firstName}, welcome to Dollar Bank!`,
   text: `Hello ${data.firstName}, welcome to Dollar Bank!`
});
