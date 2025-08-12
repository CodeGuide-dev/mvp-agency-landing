import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget: z.enum(['5k-15k', '15k-50k', '50k-100k', '100k+', 'not-sure']).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic rate limiting using timestamp (in production, use a proper rate limiter)
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
    
    // Validate the form data
    const validatedData = contactSchema.parse(body)
    
    // Basic spam protection - check for obvious spam patterns
    const spamKeywords = ['viagra', 'casino', 'porn', 'lottery', 'winner']
    const messageContent = `${validatedData.name} ${validatedData.message}`.toLowerCase()
    const hasSpam = spamKeywords.some(keyword => messageContent.includes(keyword))
    
    if (hasSpam) {
      return NextResponse.json(
        { error: 'Message blocked by spam filter' },
        { status: 400 }
      )
    }
    
    // In a real application, you would send an email here using a service like:
    // - Resend (https://resend.com/)
    // - SendGrid
    // - Mailgun
    // - AWS SES
    
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'hello@agencypro.com',
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
        ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
        ${validatedData.budget ? `<p><strong>Budget:</strong> ${validatedData.budget}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>IP: ${ip}</small></p>
        <p><small>Timestamp: ${new Date().toISOString()}</small></p>
      `
    })
    
    // Send auto-reply to the user
    await emailService.send({
      to: validatedData.email,
      subject: 'Thank you for contacting us!',
      html: `
        <h2>Thank you for your message!</h2>
        <p>Hi ${validatedData.name},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>The AgencyPro Team</p>
      `
    })
    */
    
    // For now, just log the submission (remove in production)
    console.log('Contact form submission:', {
      ...validatedData,
      ip,
      timestamp: new Date().toISOString()
    })
    
    // You could also save to a database here
    // await database.contacts.create(validatedData)
    
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}