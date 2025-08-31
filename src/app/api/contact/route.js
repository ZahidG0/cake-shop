import { NextResponse } from 'next/server';
import { sanitizeInput, validateEmail, validatePhone, RateLimiter } from '@/utils/security';

const rateLimiter = new RateLimiter(5, 60000); // 5 requests per minute

export async function POST(request) {
  try {
    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    if (!rateLimiter.isAllowed(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Sanitize all inputs
    const sanitizedData = {
      firstName: sanitizeInput(body.firstName),
      lastName: sanitizeInput(body.lastName),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone),
      subject: sanitizeInput(body.subject),
      message: sanitizeInput(body.message)
    };

    // Validate required fields
    if (!sanitizedData.firstName || !sanitizedData.lastName || !sanitizedData.email || !sanitizedData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(sanitizedData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone if provided
    if (sanitizedData.phone && !validatePhone(sanitizedData.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone format' },
        { status: 400 }
      );
    }

    // Here you would typically save to database or send email
    console.log('Contact form submission:', sanitizedData);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}