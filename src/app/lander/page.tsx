import { redirect } from "next/navigation";

export default function LanderPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const oref = searchParams?.oref;
  const refValue = Array.isArray(oref) ? oref[0] : oref;

  redirect(refValue ? `/home?oref=${encodeURIComponent(refValue)}` : "/home");
}
