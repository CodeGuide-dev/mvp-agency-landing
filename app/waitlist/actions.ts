'use server'

import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

const WaitlistSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
})

export async function joinWaitlist(prevState: unknown, formData: FormData) {
  try {
    const validatedFields = WaitlistSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
    })

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Please fix the errors below',
      }
    }

    const { name, email } = validatedFields.data
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabase
      .from('waitlist')
      .insert([{ name, email }])

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        return {
          success: false,
          message: 'This email is already on our waitlist',
        }
      }
      
      console.error('Waitlist error:', error)
      return {
        success: false,
        message: 'Something went wrong. Please try again.',
      }
    }

    return {
      success: true,
      message: 'Successfully joined the waitlist!',
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    }
  }
}