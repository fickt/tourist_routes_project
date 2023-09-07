<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ForgetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the message envelope.
     */
   /* public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Forget Password Mail',
        );
    }*/

    /**
     * Get the message content definition.
     */
/*    public function content(): Content
    {
        return new Content(
            view: 'view',
        );
    }*/

    /**
     * Get the attachments for the message.
     *
     //* @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
 /*   public function attachments(): array
    {
        return [];
    }*/

    public function build()
    {
        return $this->markdown('forgotpassword')
            ->subject('Your Order is being Processed')
            ->with([
                'lol' => 'lol'
            ]);
    }
}
