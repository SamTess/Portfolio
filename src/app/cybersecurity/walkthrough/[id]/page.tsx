import { walkthroughs } from "@/data/cybersecurity";
import { WalkthroughContent } from "@/components/WalkthroughContent";

export function generateStaticParams() {
  return walkthroughs.map((walkthrough) => ({
    id: walkthrough.id,
  }));
}

export default function WalkthroughPage({ params }: { params: { id: string } }) {
  const walkthrough = walkthroughs.find((w) => w.id === params.id);

  return <WalkthroughContent walkthrough={walkthrough} />;
}
