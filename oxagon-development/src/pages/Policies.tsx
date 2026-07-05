import { motion } from "motion/react";
import { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-semibold tracking-tight text-white mt-12 mb-6 border-b border-white/10 pb-4">
    {children}
  </h2>
);

const SubsectionTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="text-lg font-medium text-white mt-8 mb-3 flex items-baseline gap-2">
    {children}
  </h3>
);

const Paragraph = ({ children }: { children: ReactNode }) => (
  <p className="text-gray-400 leading-relaxed mb-4 break-words whitespace-normal">{children}</p>
);

const Callout = ({ children }: { children: ReactNode }) => (
  <div className="my-6 p-4 rounded-lg bg-white/5 border border-white/10 text-gray-300 italic border-l-4 border-l-white break-words whitespace-normal">
    {children}
  </div>
);

const Tag = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
    {children}
  </span>
);

export default function Policies() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-4">
              Organization Policies
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Official guidelines, terms, and agreements for Oxagon Development.
            </p>
            <Callout>
              <strong>A Note on Strictness:</strong> You may notice these policies are exceptionally strict. Because we are a small organization, we simply do not have the size or resources to fight legal battles or manage disputes with extensive resources. Our policies are designed to maintain community integrity and protect our work.
            </Callout>
          </header>

          <div className="space-y-12">
            {/* SECTION 01 */}
            <section>
              <SectionTitle>§01 — ROW Policy (Rights of Origin & Watermark Integrity)</SectionTitle>
              
              <SubsectionTitle><span className="text-white/50 text-base">1.1</span> Ownership and Origin:</SubsectionTitle>
              <Paragraph>
                All content, software, designs, media, documentation, branding elements, and derivative works created, distributed, or authorized under the Organization are protected intellectual property of Oxagon Development. All creators assign ownership rights to the Organization upon creation while under the Organization's authorization.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">1.2</span> Integrity Protection:</SubsectionTitle>
              <Paragraph>
                The following are prohibited without explicit authorization: removal or alteration of ROW identifiers; obscuring or covering watermarks; redistributing modified protected content without attribution; claiming authorship of Organization content; removing branding or credits; altering source attribution in any form.
              </Paragraph>
              <Callout>
                "Circumvention of ROW protections constitutes unauthorized modification of protected property regardless of medium or intent."
              </Callout>

              <SubsectionTitle><span className="text-white/50 text-base">1.3</span> Enforcement Authority:</SubsectionTitle>
              <Paragraph>
                The Organization reserves the right to issue takedown requests, restrict access, suspend or terminate accounts, revoke permissions, and apply network-wide bans.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">1.4</span> Persistence Clause:</SubsectionTitle>
              <Paragraph>
                ROW protections remain in effect permanently, including after a user leaves any community or service.
              </Paragraph>
            </section>

            {/* SECTION 02 */}
            <section>
              <SectionTitle>§02 — Privacy Policy (Minimal Data & Human Verification Model)</SectionTitle>
              
              <SubsectionTitle><span className="text-white/50 text-base">2.1</span> Limited Data Storage:</SubsectionTitle>
              <Paragraph>
                The Organization does not collect or store personal data beyond what is strictly necessary to operate accounts. Stored information may include account identifiers, login credentials, email addresses, and account verification status. No personal information is shared with third parties without explicit user consent or legal obligation.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">2.2</span> Verification Data Handling:</SubsectionTitle>
              <Paragraph>
                If verification requires face images, identification documents, or similar materials: data is used only for one-time verification; not permanently stored; deleted immediately after verification is complete; only accessed by authorized human reviewers; never shared with third parties; retained for audit purposes only if legally required.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">2.3</span> Human Review Guarantee:</SubsectionTitle>
              <Paragraph>
                Verification processes are performed by authorized human reviewers, not automated AI decision systems. Automation may assist technically, but final decisions are made by humans.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">2.4</span> Temporary Processing Clause:</SubsectionTitle>
              <Paragraph>
                Sensitive materials exist only temporarily during processing and are removed after verification within a reasonable timeframe.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">2.5</span> No Sale or Sharing:</SubsectionTitle>
              <Paragraph>
                The Organization does not sell or trade personal data. Data may only be shared when required for service operation, required by law, or authorized by the user.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">2.6</span> Security Disclaimer:</SubsectionTitle>
              <Paragraph>
                Reasonable safeguards are used, but no system can guarantee absolute security.
              </Paragraph>
            </section>

            {/* SECTION 03 */}
            <section>
              <SectionTitle>§03 — Automatic Agreement Policy (Binding Acceptance)</SectionTitle>

              <SubsectionTitle><span className="text-white/50 text-base">3.1</span> Conditions of Acceptance:</SubsectionTitle>
              <Paragraph>
                A person is considered to have agreed if they: join an OSN server or community; use any application or service; create an account; continue use after policies are presented.
              </Paragraph>
              <Callout>
                "Participation constitutes acceptance without a written signature."
              </Callout>

              <SubsectionTitle><span className="text-white/50 text-base">3.2</span> Scope of Agreement:</SubsectionTitle>
              <Paragraph>
                Policies apply across all Organization platforms, future updates, associated systems, and interactions with other agreeing members.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">3.3</span> Continuing Obligation:</SubsectionTitle>
              <Paragraph>
                Obligations remain enforceable after leaving, deleting accounts, or discontinuing use.
              </Paragraph>
            </section>

            {/* SECTION 04 */}
            <section>
              <SectionTitle>§04 — OSN Conduct & Community Protection Policy</SectionTitle>

              <SubsectionTitle><span className="text-white/50 text-base">4.1</span> Respect and Safety:</SubsectionTitle>
              <Paragraph>
                Users must not engage in harassment, bullying, threats, discrimination, or targeted attacks.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">4.2</span> External Harm Policy:</SubsectionTitle>
              <Paragraph>
                Users must not create or distribute content intended to harm, harass, or maliciously target other agreeing members, staff, administrators, or the Organization and its projects. This includes intentional spread of false information designed to damage reputation or relationships within the community.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">4.3</span> Media and Video Restrictions:</SubsectionTitle>
              <Paragraph>
                Prohibited content includes: misleading or manipulated media intended to cause harm; false allegations presented as fact; exposure of private information; coordinated harassment.
              </Paragraph>
              <Callout>
                "Legitimate criticism is allowed if it is non-abusive and non-defamatory."
              </Callout>
              <Callout>
                <strong>Enforcement Limitation Disclaimer:</strong> If a server or service is operated as part of the OSN but is not directly owned or controlled by Oxagon Development, enforcement relies on the applicable server's moderation team. Oxagon Development is not liable for violations occurring on third-party platforms under independent moderation.
              </Callout>

              <SubsectionTitle><span className="text-white/50 text-base">4.4</span> Anti-Exploitation Rule:</SubsectionTitle>
              <Paragraph>
                Users must not exploit vulnerabilities, bypass safeguards, or abuse permissions.
              </Paragraph>
            </section>

            {/* SECTION 05 */}
            <section>
              <SectionTitle>§05 — Enforcement Framework</SectionTitle>
              <Paragraph>
                Violations may result in the following actions, severity determines level applied.
              </Paragraph>
              <div className="flex flex-wrap gap-3 mt-4">
                <Tag>Warning</Tag>
                <Tag>Restrictions</Tag>
                <Tag>Content Removal</Tag>
                <Tag>Temporary Suspension</Tag>
                <Tag>Permanent Ban</Tag>
                <Tag>Account Termination</Tag>
                <Tag>Network-Wide Revocation</Tag>
              </div>
            </section>

            {/* SECTION 06 */}
            <section>
              <SectionTitle>§06 — Policy Supremacy Clause</SectionTitle>
              <Paragraph>
                If conflicts exist between policies, the interpretation providing greater protection to safety, organizational integrity, intellectual property, and community stability shall prevail.
              </Paragraph>
            </section>

            {/* SECTION 07 */}
            <section>
              <SectionTitle>§07 — Modification Rights</SectionTitle>
              <Paragraph>
                Policies may be updated at any time without prior notice. Continued use of any Oxagon Development service after updates constitutes acceptance of the revised terms.
              </Paragraph>
            </section>

            {/* SECTION 08 */}
            <section>
              <SectionTitle>§08 — Severability</SectionTitle>
              <Paragraph>
                If any clause or provision is found to be invalid or unenforceable, all remaining provisions remain fully effective and binding.
              </Paragraph>
            </section>

            {/* SECTION 09 */}
            <section>
              <SectionTitle>§09 — Good-Faith Principle</SectionTitle>
              <Paragraph>
                Users agree not to exploit loopholes or ambiguities within these policies. Attempts to bypass rules through technicalities may still be treated as violations at the Organization's sole discretion.
              </Paragraph>
            </section>

            {/* SECTION 10 */}
            <section>
              <SectionTitle>§10 — Limitation of Liability & Legal Disputes</SectionTitle>

              <SubsectionTitle><span className="text-white/50 text-base">10.1</span> Waiver of Legal Action:</SubsectionTitle>
              <Paragraph>
                By using any Oxagon Development service, users expressly waive the right to bring any lawsuit, legal claim, civil proceeding, or other legal action against Oxagon Development, its staff, administrators, or members. Users agree to settle disputes exclusively through the dispute resolution process outlined in this policy.
              </Paragraph>
              <Callout>
                "Participation in any Oxagon Development service constitutes full and knowing acceptance of this waiver. If you do not agree, you must discontinue use immediately."
              </Callout>

              <SubsectionTitle><span className="text-white/50 text-base">10.2</span> No Warranty:</SubsectionTitle>
              <Paragraph>
                All services are provided "as-is" and "as-available" without warranty of any kind. No guarantees on uptime, availability, accuracy, security, or fitness for any particular purpose are made, whether express or implied.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">10.3</span> Indemnification:</SubsectionTitle>
              <Paragraph>
                Users agree to indemnify and hold harmless Oxagon Development from any claims, damages, losses, or expenses (including legal fees) arising from: violation of these policies; misuse of services; unauthorized access; infringement of third-party rights; or breach of applicable laws.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">10.4</span> Dispute Resolution:</SubsectionTitle>
              <Paragraph>
                Disputes must follow this process — Step 1: good-faith negotiation with the Organization directly within 30 days. Step 2: if unresolved, binding arbitration (not court litigation) before a neutral arbitrator. Step 3: arbitration decisions are final and enforceable.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">10.5</span> Limitation of Damages:</SubsectionTitle>
              <Paragraph>
                Total liability shall not exceed the greater of: (a) the amount paid by the user in the 12 months preceding the claim, or (b) zero if no payment was made. The Organization is not liable for indirect, incidental, punitive, or consequential damages.
              </Paragraph>

              <SubsectionTitle><span className="text-white/50 text-base">10.6</span> Jurisdiction Disclaimer:</SubsectionTitle>
              <Paragraph>
                Oxagon Development does not represent that its services are appropriate or lawful in all jurisdictions. Users who access services from locations where such use is unlawful do so at their own risk and responsibility.
              </Paragraph>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
