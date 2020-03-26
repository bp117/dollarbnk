exports.emailTpl = data => ({
   subject: '[Dollar Bank] Reset your password',
   html: `Hello ${data.firstName}, <a href="https://localhost:3002/reset-password/${data.resetToken}">Click here</a> to reset your password`,
   text: `Hello ${data.firstName}, <a href="https://localhost:3002/reset-password/${data.resetToken}">Click here</a> to reset your password`
});
