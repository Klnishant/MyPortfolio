import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    const {name, email, subject, message} = body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
    
        await transporter.sendMail({
            from: email,
            to: process.env.MAIL_RECIVER,
            subject: subject,
            text: message
        });
    
        return NextResponse.json({staus: 200, message: 'Email sent successfully!'});
    } catch (error:any) {
        return NextResponse.json({staus: 500, message: error.message});
    }
}