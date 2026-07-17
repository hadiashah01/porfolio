import { Section } from "@/components/ui/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { TimelineItem, SectionHeading } from "@/components/sections";
import { buildMetadata } from "@/config/metadata";
import { journeyPageContent, personal } from "@/config/personal";
import { journeyMilestones } from "@/config/journey";

export const metadata = buildMetadata({
  title: "Learning Journey",
  description: "Milestones and continuous learning progress over time.",
  path: "/journey",
});

export default function JourneyPage() {
  return (
    <Section containerSize="lg" className="pt-20 sm:pt-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow={journeyPageContent.eyebrow}
            title={journeyPageContent.title}
            description={journeyPageContent.description}
          />
          <Card>
            <CardHeader>
              <CardTitle>{journeyPageContent.currentDirectionTitle}</CardTitle>
              <CardDescription>
                {journeyPageContent.currentDirectionDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-7">
                {personal.learningPhilosophy}
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <ul className="space-y-4">
            {journeyMilestones.map((milestone) => (
              <TimelineItem
                key={milestone.title}
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
