const Mail = require('../services/Mail')

class PurchaseMail {
  get key () {
    return 'PurchaseMail'
  }

  async handle (job, done) {
    const { user, content, ad } = job.data

    await Mail.sendsssMail({
      from: '"Luiz Tonza" <meu@email.com>',
      to: ad.author.email,
      subject: `Solicitação de compra: ${ad.title}`,
      template: 'purchase',
      context: { user, content, ad }
    })

    console.log(`${new Date()} Email enviado para ${ad.author.email}`)
    return done()
  }
}

module.exports = new PurchaseMail()
