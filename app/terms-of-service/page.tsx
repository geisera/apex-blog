import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Terms() {
  return (
    <>
      <div className="font-sans leading-relaxed text-gray-800 dark:text-gray-100">
        <div className="mx-auto mt-8 max-w-4xl rounded-lg p-6 shadow-lg dark:text-gray-100">
          <h1 className="mb-6 text-center text-3xl font-semibold">Terms of Service</h1>
          <p className="text-center text-sm text-gray-600 dark:text-gray-100">
            <strong>Effective Date:</strong> December 23, 2024
          </p>

          <p className="mt-4">
            Welcome to <strong>ForceDevNotes.com</strong> ("we", "our", or "us"). By accessing or
            using ForceDevNotes.com (the "Website"), you agree to comply with and be bound by these
            Terms of Service ("Terms"). Please read them carefully before using the Website. If you
            do not agree to these Terms, do not access or use the Website.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p className="mt-2">
            By using the Website, you agree to these Terms, as well as any additional terms and
            conditions that apply to specific features of the Website. These Terms apply to all
            visitors, users, and others who access or use the Website.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">2. Use of Content</h2>
          <p className="mt-2">
            All content published on ForceDevNotes.com, including but not limited to articles,
            tutorials, code examples, images, and other materials (collectively "Content"), is for
            informational and educational purposes only. You are granted a limited, non-exclusive,
            and non-transferable license to access and use the Content solely for personal,
            non-commercial purposes. You may not copy, distribute, modify, or use any Content
            without the prior written consent of ForceDevNotes.com, except as expressly permitted by
            law.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">3. User Conduct</h2>
          <p className="mt-2">You agree that you will not:</p>
          <ul className="ml-6 mt-2 list-disc">
            <li>
              Engage in any activity that could harm, disrupt, or interfere with the proper
              functioning of the Website.
            </li>
            <li>
              Post or transmit any content that is unlawful, defamatory, offensive, or infringes the
              rights of others.
            </li>
            <li>
              Use the Website for any commercial purposes, unless explicitly permitted by
              ForceDevNotes.com.
            </li>
            <li>Attempt to gain unauthorized access to the Website’s systems or servers.</li>
          </ul>

          <h2 className="mt-6 text-2xl font-semibold">
            4. Comments and User-Generated Content
          </h2>
          <p className="mt-2">
            The Website may allow you to post comments or user-generated content. You are solely
            responsible for the content you post, and by posting such content, you grant
            ForceDevNotes.com the right to use, modify, and distribute the content in connection
            with the operation of the Website. We reserve the right to remove or modify any
            user-generated content that violates these Terms or is deemed inappropriate.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">5. Disclaimer of Warranties</h2>
          <p className="mt-2">
            ForceDevNotes.com provides the Website and its Content "as is" without any warranties of
            any kind, either express or implied. We do not warrant that the Website will be
            uninterrupted, error-free, or free of viruses or other harmful components. You
            acknowledge that the use of the Website is at your own risk.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">6. Limitation of Liability</h2>
          <p className="mt-2">
            To the fullest extent permitted by law, ForceDevNotes.com shall not be liable for any
            direct, indirect, incidental, special, or consequential damages arising from your use or
            inability to use the Website, including but not limited to any errors or omissions in
            the Content, loss of data, or any other damages.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">7. External Links</h2>
          <p className="mt-2">
            The Website may contain links to third-party websites. These links are provided for
            convenience, and ForceDevNotes.com does not endorse or control the content of these
            third-party sites. By accessing external links, you agree to be governed by the terms
            and privacy policies of those websites.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">8. Privacy Policy</h2>
          <p className="mt-2">
            Your use of the Website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">9. Modifications to Terms</h2>
          <p className="mt-2">
            ForceDevNotes.com reserves the right to update or modify these Terms at any time. Any
            changes will be posted on this page with an updated effective date. Your continued use
            of the Website after any modifications to the Terms constitutes your acceptance of the
            revised Terms.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">10. Termination</h2>
          <p className="mt-2">
            We reserve the right to suspend or terminate your access to the Website at our sole
            discretion, without notice, if we believe you have violated these Terms or for any other
            reason.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">11. Governing Law</h2>
          <p className="mt-2">
            These Terms shall be governed by and construed in accordance with the laws of the
            jurisdiction in which ForceDevNotes.com operates, without regard to its conflict of law
            principles. Any disputes arising under these Terms shall be resolved in the competent
            courts of that jurisdiction.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">12. Contact Information</h2>
          <p className="mt-2">
            If you have any questions or concerns about these Terms, please contact us at:
          </p>
          <ul className="ml-6 mt-2 list-none">
            <li>Email: tony@forcedevnotes.com</li>
          </ul>

          <p className="mt-4">
            By accessing or using the Website, you acknowledge that you have read, understood, and
            agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </>
  )
}
