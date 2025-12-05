import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 animate-fade-in-up">Terms of Service</h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-100">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
                <CardDescription>Agreement to these terms and conditions</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using our services, you accept and agree to be bound by the terms and provisions of
                  this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Use of Services</CardTitle>
                <CardDescription>Rules and restrictions for using our services</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You agree
                  not to:
                </p>
                <ul className="text-muted-foreground leading-relaxed mt-4 space-y-2">
                  <li>Use the services in any way that violates applicable laws or regulations</li>
                  <li>Engage in any conduct that restricts or inhibits anyone's use of the services</li>
                  <li>Attempt to gain unauthorized access to any part of the services</li>
                  <li>Interfere with or disrupt the services or servers</li>
                  <li>Use the services to transmit viruses or malicious code</li>
                  <li>Impersonate or attempt to impersonate the company or another user</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Accounts</CardTitle>
                <CardDescription>Account creation and security responsibilities</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  When you create an account, you must provide accurate and complete information. You are responsible
                  for maintaining the confidentiality of your account credentials and for all activities that occur
                  under your account.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You agree to notify us immediately of any unauthorized use of your account or any other breach of
                  security. We will not be liable for any loss or damage arising from your failure to comply with these
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Intellectual Property Rights</CardTitle>
                <CardDescription>Ownership of content and materials</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  The services and their original content, features, and functionality are owned by us and are protected
                  by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You retain ownership of any content you submit, post, or display on or through the services. By
                  submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce,
                  modify, and distribute your content in connection with operating and providing the services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Payment Terms</CardTitle>
                <CardDescription>Billing and subscription information</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Some services require payment of fees. You agree to pay all fees and charges associated with your
                  account. All fees are non-refundable unless otherwise stated. We reserve the right to change our fees
                  at any time with reasonable notice.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  For subscription services, your subscription will automatically renew unless you cancel before the
                  renewal date. You may cancel your subscription at any time through your account settings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Disclaimers and Limitations of Liability</CardTitle>
                <CardDescription>Legal limitations and warranties</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  The services are provided "as is" and "as available" without warranties of any kind, either express or
                  implied. We do not warrant that the services will be uninterrupted, timely, secure, or error-free.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
                  indirectly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Termination</CardTitle>
                <CardDescription>How accounts can be terminated</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account and access to the services immediately, without prior notice
                  or liability, for any reason, including if you breach these Terms. Upon termination, your right to use
                  the services will immediately cease.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Governing Law</CardTitle>
                <CardDescription>Legal jurisdiction and dispute resolution</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without
                  regard to its conflict of law provisions. Any disputes arising from these Terms will be resolved
                  through binding arbitration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Changes to Terms</CardTitle>
                <CardDescription>How we update these terms</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                  provide at least 30 days' notice prior to any new terms taking effect. Your continued use of the
                  services after changes become effective constitutes acceptance of the revised Terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact Information</CardTitle>
                <CardDescription>How to reach us with questions</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Email: legal@example.com
                  <br />
                  Address: 123 Business St, City, State 12345
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
