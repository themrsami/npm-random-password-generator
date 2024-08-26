# Random Password Generator - Future Generation

A simple and customizable NPM package for generating random passwords based on specified criteria. Choose from uppercase letters, lowercase letters, numbers, and special characters to create secure, unique passwords.

## Installation

Install the package using NPM:

```bash
npm install random-password-generator-future-generation
```

## Usage

### Importing the Package

```javascript
const generatePasswords = require('random-password-generator-future-generation');
```

### Function Syntax

```javascript
generatePasswords(pattern, size, quantity);
```

- **pattern**: A string specifying the character types to include:
  - `A` for uppercase letters (A-Z)
  - `a` for lowercase letters (a-z)
  - `1` for numbers (0-9)
  - `@` for special characters (`!@#$%^&*()_+~`|}{[]:;?><,./-=`)
- **size**: Length of each password.
- **quantity**: Number of passwords to generate.

### Example

```javascript
const generatePasswords = require('random-password-generator-future-generation');

const pattern = 'Aa1@'; // Includes uppercase, lowercase, numbers, and special characters
const size = 12;        // Password length
const quantity = 5;     // Number of passwords to generate

const { passwords } = generatePasswords(pattern, size, quantity);

console.log(passwords);  // Array of 5 randomly generated passwords, each 12 characters long
```

### CLI Usage

Run the package directly from the command line:

```bash
node index.js <pattern> <size> <quantity>
```

**Example:**

```bash
node index.js Aa1@ 10 3
```

This command will generate 3 passwords, each 10 characters long, containing uppercase letters, lowercase letters, numbers, and special characters.

### Character Pattern Options

- `A`: Uppercase letters (A-Z)
- `a`: Lowercase letters (a-z)
- `1`: Numbers (0-9)
- `@`: Special characters (!@#$%^&*()_+~`|}{[]:;?><,./-=)

### Return Format

The function returns an object with a `passwords` key containing an array of generated passwords:

```json
{
  "passwords": ["examplePassword1", "examplePassword2", "examplePassword3"]
}
```

## Scripts

- **start**: Runs the CLI tool to generate passwords.
- **test**: Placeholder script.

## License

This project is licensed under the ISC License.

## Author

Developed by themrsami
