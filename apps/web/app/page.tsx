import Landing from "@/components/landing";
import { KodMainLayout } from "@/components/layouts";

export default async function Page() {
  return (
    <KodMainLayout>
      <Landing />
    </KodMainLayout>
  );
}
