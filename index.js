const generatePasswords = (pattern, size, quantity) => {
  const charSets = {
    'A': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'a': 'abcdefghijklmnopqrstuvwxyz',
    '1': '0123456789',
    '@': '!@#$%^&*()_+~`|}{[]:;?><,./-='
  };

  let chars = '';
  if (pattern.includes('A')) chars += charSets['A'];
  if (pattern.includes('a')) chars += charSets['a'];
  if (pattern.includes('1')) chars += charSets['1'];
  if (pattern.includes('@')) chars += charSets['@'];

  const passwords = [];
  for (let i = 0; i < quantity; i++) {
    let password = '';
    for (let j = 0; j < size; j++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    passwords.push(password);
  }

  return { passwords };
};

// Example usage
if (require.main === module) {
  const pattern = process.argv[2];
  const size = parseInt(process.argv[3], 10);
  const quantity = parseInt(process.argv[4], 10);

  if (pattern && size && quantity) {
    console.log(JSON.stringify(generatePasswords(pattern, size, quantity), null, 2));
  } else {
    console.log('Usage: node index.js <pattern> <size> <quantity>');
  }
}

module.exports = generatePasswords;
