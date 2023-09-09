import Landing from "@/components/landing";
import { KodMainLayout } from "@/components/layouts";

export default function Page(): JSX.Element {
  return (
    <KodMainLayout>
      <Landing />
    </KodMainLayout>
  );
}
