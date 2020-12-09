function hasNumber(myString) {
  return /\d/.test(myString);
}
const numbers = /^[0-9]+$/;

export default function Validate(label, value) {
  const errors = [];
  switch (label) {
    case 'name': {
      if (!value) errors.push({ label: 'name', error: 'Name is required' });
      if (hasNumber(value))
        errors.push({ label: 'name', error: 'Name should not include numbers' });
      return errors;
    }
    case 'number': {
      if (!value) errors.push({ label: 'number', error: 'number is required' });
      if (value.length < 12 || value.length > 12)
        errors.push({ label: 'number', error: 'Should contain 12 characters, no more no less' });
      if (!value.match(numbers)) errors.push({ label: 'number', error: 'Only numbers allowed' });
      return errors;
    }
    default: {
      return errors;
    }
  }
}
