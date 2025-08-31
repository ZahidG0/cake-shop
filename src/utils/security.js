// Security utilities for input validation and sanitization

/**
 * Sanitizes user input to prevent XSS attacks
 * @param {string} input - The input string to sanitize
 * @returns {string} - The sanitized string
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  if (!input) return '';
  
  return input.replace(/[<>\"'&]/g, (match) => {
    const entities = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '&': '&amp;'
    };
    return entities[match];
  });
};

/**
 * Validates email format
 * @param {string} email - The email to validate
 * @returns {boolean} - True if valid email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates phone number format
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - True if valid phone format
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[0-9\s\(\)\-\+]{10,20}$/;
  return phoneRegex.test(phone);
};

/**
 * Validates credit card number format (basic validation)
 * @param {string} cardNumber - The card number to validate
 * @returns {boolean} - True if valid card format
 */
export const validateCardNumber = (cardNumber) => {
  const cardRegex = /^[0-9\s]{13,19}$/;
  return cardRegex.test(cardNumber);
};

/**
 * Validates CVV format
 * @param {string} cvv - The CVV to validate
 * @returns {boolean} - True if valid CVV format
 */
export const validateCVV = (cvv) => {
  const cvvRegex = /^[0-9]{3,4}$/;
  return cvvRegex.test(cvv);
};

/**
 * Validates ZIP code format
 * @param {string} zip - The ZIP code to validate
 * @returns {boolean} - True if valid ZIP format
 */
export const validateZip = (zip) => {
  const zipRegex = /^[0-9]{5}(-[0-9]{4})?$/;
  return zipRegex.test(zip);
};

/**
 * Rate limiting utility to prevent spam
 */
export class RateLimiter {
  constructor(maxRequests = 5, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map();
  }

  isAllowed(identifier) {
    const now = Date.now();
    const userRequests = this.requests.get(identifier) || [];
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter(time => now - time < this.windowMs);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    return true;
  }
}

/**
 * Secure comparison function to prevent timing attacks
 * @param {string} a - First string to compare
 * @param {string} b - Second string to compare
 * @returns {boolean} - True if strings match
 */
export const secureCompare = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  
  return result === 0;
};