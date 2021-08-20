export function passwordValidator(password) {
  if (!password) return "Password can't be empty."
  if (password.length <= 8 && password.length <= 16) return 'Password must be at least 8-12 characters long.'
  return ''
}
