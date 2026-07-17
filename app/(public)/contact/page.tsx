import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { SectionHeading, ContactMethodList } from "@/components/sections";
import { buildMetadata } from "@/config/metadata";
import { contactPageContent } from "@/config/personal";
import { contactFormPlaceholders, contactMethods } from "@/config/social";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch through the contact form or professional links.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section containerSize="lg" className="pt-20 sm:pt-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow={contactPageContent.eyebrow}
            title={contactPageContent.title}
            description={contactPageContent.description}
          />
          <Card>
            <CardHeader>
              <CardTitle>{contactPageContent.reachOutTitle}</CardTitle>
              <CardDescription>
                {contactPageContent.reachOutDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactMethodList methods={contactMethods} />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{contactPageContent.formTitle}</CardTitle>
            <CardDescription>
              {contactPageContent.formDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">
                  {contactPageContent.nameLabel}
                </label>
                <Input id="name" placeholder={contactFormPlaceholders.name} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  {contactPageContent.emailLabel}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={contactFormPlaceholders.email}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="subject">
                {contactPageContent.subjectLabel}
              </label>
              <Input
                id="subject"
                placeholder={contactFormPlaceholders.subject}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="message">
                {contactPageContent.messageLabel}
              </label>
              <Textarea
                id="message"
                placeholder={contactFormPlaceholders.message}
              />
            </div>
            <Button
              type="button"
              variant="primary"
              className="w-full sm:w-auto"
            >
              {contactPageContent.submitLabel}
            </Button>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
