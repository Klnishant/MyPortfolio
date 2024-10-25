import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    const {name, email, subject, message} = body;

    if(!name || !email || !subject || !message) {    
        return NextResponse.json({staus: 400, message: 'All fields are required!'});
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        const mailcontext = {
            from: email,
            to: process.env.Mail_RECIEVER,
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        if (mailcontext.from == mailcontext.to) {
            return NextResponse.json({success:false, staus: 400, message: 'You cannot send an email to yourself!'});
        }
    
        if (mailcontext.from != mailcontext.to) {
            await transporter.sendMail(mailcontext);
        }
    
        return NextResponse.json({success:true, staus: 200, message: 'Email sent successfully!'});
    } catch (error:any) {
        return NextResponse.json({staus: 500, message: error.message});
    }
}