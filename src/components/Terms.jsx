export default function Terms() {
  return (
    <section className="privacy-page">
      <div className="container">
        <a href="#top" className="back-link">&larr; Back to Home</a>
        <h1>Terms of Service</h1>

        <h2>1. Introduction</h2>

        <p>
          1.1 This page sets out the Service Terms for the Dompet Wallet (the &quot;Wallet&quot;).
          By downloading or otherwise accessing the Wallet, you accept all of the terms herein. A
          reference in these Service Terms to &quot;Dompet,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot; means DBIT TECHNOLOGIES PLT.
        </p>
        <p>
          1.2 Separate Terms of Use also apply to your use of the Wallet. In the event of conflict
          between these Service Terms and the website Terms of Use, the Service Terms shall prevail.
        </p>
        <p>
          1.3 The Wallet is published by DBIT TECHNOLOGIES PLT and consists of software that permits you to
          self-custody Bitcoin, organize network addresses, view transaction history, and
          transact in Bitcoin as set forth below.
        </p>

        <h2>2. Description of the Wallet</h2>

        <p>
          2.1 The Wallet is provided to you exclusively by Dompet. At no point will Dompet ever take
          custody of Bitcoin stored in a Wallet. The Wallet is only capable of supporting
          Bitcoin. Under no circumstances should you attempt to store virtual currencies in your
          Wallet that the Wallet does not support.
        </p>
        <p>
          2.2 When you create a Wallet, the Wallet software generates a cryptographic private and
          public key pair that you may use to send and receive any Bitcoin via the
          relevant Bitcoin network (On-chain, Lightning, Spark).{' '}
          <strong>
            YOU MUST STORE, OUTSIDE OF THE SERVICES, A BACKUP OF ALL WALLET CREDENTIALS, INCLUDING
            YOUR PASSPHRASES, IDENTIFIERS, BACKUP PHRASES, PRIVATE KEYS AND NETWORK ADDRESSES.
          </strong>{' '}
          If you do not maintain a backup of your Wallet data outside of the Wallet, you will not be
          able to access Bitcoin previously accessed using your Wallet in the event that we
          discontinue or no longer offer the Wallet. We are not responsible for maintaining this data
          on your behalf.
        </p>

        <h2>3. Risk Disclosures Relating to the Wallet</h2>

        <p>
          3.1 In order to be completed, any Bitcoin transaction created with the Wallet must
          be confirmed and recorded in the Bitcoin ledger associated with the relevant Bitcoin network (On-chain, Lightning, Spark). Such networks are decentralized, peer-to-peer networks supported
          by independent third parties, which are not owned, controlled or operated by Dompet.
        </p>
        <p>
          3.2 Dompet has no control over any Bitcoin network and therefore cannot and does
          not ensure that any transaction details you submit via the Wallet will be confirmed on the
          Bitcoin network. The transaction details you submit via the Wallet may
          not be completed, or may be substantially delayed, by the Bitcoin network used to
          process the transaction. We do not guarantee that the Wallet can transfer title or right in
          any Bitcoin or make any warranties whatsoever with regard to title.
        </p>
        <p>
          3.3 Once transaction details have been submitted to a Bitcoin network, we cannot
          assist you to cancel or otherwise modify your transaction or transaction details. Dompet
          has no control over any Bitcoin network and does not have the ability to facilitate
          any cancellation or modification requests.
        </p>

        <h2>4. Network Upgrade</h2>

        <p>
          4.1 A &quot;Network Upgrade&quot; or &quot;Fork&quot; means a change to the underlying
          protocol of a Bitcoin network that may result in more than one version of a
          Bitcoin, the result of which may be one or more versions that are not supported by
          the Wallet. In the event of a Fork or other network disruption, Dompet may not be able to
          support activity related to your Bitcoin. In the event of a Fork, the transactions
          may not be completed, completed partially, incorrectly completed, or substantially delayed.
          Dompet is not responsible for any loss incurred by you caused in whole or in part, directly
          or indirectly, by a Fork or other network disruption.
        </p>

        <h2>5. No Password Retrieval</h2>

        <p>
          5.1 With respect to the Wallet, Dompet does not receive or store your Wallet password, nor
          any keys, network addresses or transaction history. We cannot assist you with Wallet
          password retrieval. You are solely responsible for remembering, storing and keeping secret
          your Wallet password. Any Bitcoin you have associated with such Wallet may become
          inaccessible if you do not know or keep secret your Wallet password. Any third party with
          knowledge of one or more of your credentials (including, without limitation, a backup
          phrase, wallet identifier or password) can dispose of Bitcoin in your Wallet.
        </p>
        <p>
          5.2 When you create a Wallet, you must: (a) create a strong password that you do not use
          for any other website or online service; (b) protect and keep secret all credentials for
          the Wallet; (c) protect access to your device and your Wallet; (d) promptly notify us if
          you discover or otherwise suspect any security breaches related to your Wallet; and (e) use
          the backup functionality provided through the Wallet and safeguard your backup files. You
          agree to take responsibility for all activities that occur with your Wallet and accept all
          risks of any authorized or unauthorized access to your Wallet, to the maximum extent
          permitted by law.
        </p>

        <h2>6. Fees</h2>

        <p>
          6.1 Dompet may charge certain fixed fees for some of its features (including, but not limited to, SatsPacket), 
          but it does not currently charge a fee for the Wallet receiving, sending or controlling
          Bitcoin. However, we reserve the right to do so in the future, and in such case
          shall display to you any applicable fees prior to you incurring the fee. Network fees
          (including, without limitation &quot;miner&apos;s fees&quot;) required to use a Bitcoin
          network may apply to a transaction. We may attempt to calculate such a fee for
          you. Our calculation may not be sufficient, or it may be excessive. You may select a
          greater or lesser fee. You are solely responsible for selecting and paying any such fee and
          Dompet shall neither advance nor fund such a fee on your behalf, nor be responsible for any
          excess or insufficient fee calculation.
        </p>
      </div>
    </section>
  )
}
