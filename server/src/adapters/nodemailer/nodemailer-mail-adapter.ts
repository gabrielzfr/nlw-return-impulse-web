import { MailAdapter, SendMailData } from "../mail-adapter";

import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "04d907ede7e66a",
          pass: "a8093d20e3c243"
        }
      });

export class NodemailerAdapter implements MailAdapter {

    

    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Gabriel Francis <gabrielfrancisoliveira@gmail.com>',
            subject,
            html: body,
        });
    }
}